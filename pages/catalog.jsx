import axios from "axios"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CatalogFilters } from "../components/CatalogFilter/CatalogFilters";
import { CatalogPaginate } from "../components/CatalogPaginate";
import { OrderCallModal } from "../components/Modals/OrderCallModal";

export default function Catalog({
    goods, 
    pageCount, 
    currentPage, 
    uri, 
    filters,
    category,
    initialFilters,
    links,
    filtersURI
}) {
    const router = useRouter()
    const [selectedProduct, setSelectedProduct] = useState()
    const [isModalShow, setModalShowStatus] = useState(false)

    const orderProductClickHandler = (product) => {
        setSelectedProduct(product)
        setModalShowStatus(true)
    }

    return (
      <div>
        <div className="requests">
      <div className="container">
          <div className="breadcrumbs">
              <div className="breadcrumbs__block-white">
              <Link href="/" ><a className="breadcrumbs__item-white">Главная</a></Link>
              </div>
              <div className="breadcrumbs__block">
                  <span className="breadcrumbs__item">Каталог</span>
              </div>
          </div>
          <div className="requests__wrapper">
              <div className="requests__title">Популярные запросы</div>
              <div className="requests__inner">
                  <ul>
                      {
                          links?.map(link => {
                              const quickLink = link["url"]?.split("?")[1]
                              const path = `/catalog?categories=${category}&filters=${filtersURI}&quickLink=${encodeURIComponent(quickLink)}&page=${currentPage}`
                            
                              return (
                                <li key={link.title}>
                                    <a onClick={() => router.push(path)} className="requests__link">
                                        {link.title}
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
          </div>
      </div>
  </div>

  <div className="cat-filter">
      <div className="container">
          <div className="cat-filter__content">
                <CatalogFilters 
                    initialFilters={initialFilters} 
                    currentPage={currentPage} 
                    filters={filters}
                    category={category}
                />
          </div>
      </div>
  </div>

  <div className="catalog">
      <div className="container">
          <div className="catalog__wrapper">
              {
                  goods.map((element, index) => {
                      return (
                        <div key={index} className="catalog__item">
                        <div className="catalog__item-img">
                            <Image width="384px" height="256px" src={element.image} alt="" />
                        </div>
                        <div style={{visibility: "hidden"}} className="catalog__item-favorite-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="gray"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                        </div>
                        <div className="catalog__item-title">{element.name}</div>
                        <div className="catalog__item-info">
                        {
                            element.properties.map((element, index) => {
                                return (
                                    <div key={element["value"]} className="catalog__item-info-block">
                                        <div className="catalog__item-info-right">{element["property"]}</div>
                                        <div className="catalog__item-info-left">{element["value"]}</div>
                                    </div>
                                )
                            }).slice(0,4) // обрезаем оставшеися свойства
                        }

                        </div>
                        <div className="catalog__item-btns">
                            <a onClick={() => router.push(`/catalog/${element.slug}?catalogURI=${encodeURIComponent(uri)}`)} className="catalog__item-more-btn">Подробнее</a>
                            <button onClick={() => orderProductClickHandler(element)} className="catalog__item-btn" data-modal>Оставить заявку</button>
                        </div>
                    </div>
                      )
                  })
                  
              }
            {
                !goods.length && <p style={{textAlign: "center", color:"#fff", fontSize: "24px"}}>Товары не найдены!</p>

            }
          </div>

            <CatalogPaginate 
                pagesCount={pageCount} 
                currentPage={currentPage} 
                uri={uri}
            />
            <OrderCallModal closeModal={() => setModalShowStatus(false)} isOpen={isModalShow} productName={selectedProduct?.name}/>
      </div>
  </div>
      </div>
    )
}

export async function getServerSideProps(context) {
    try {
        const {query} = context

        if (!query["categories"]) {// если пользователь задал не категорию  
                                // переадресовать его на страницу с любой категорией, например 2
            return {              
                redirect: {
                    permanent: false,
                    destination: "/catalog?categories=0,2&page=0",
                }
            }
        }
        // Получаем все параметры с url
        const category = query["categories"]
        const page = (!query["page"] || query["page"] < 0)  ? 0 : query["page"] // если пользователь не задал страницу ставим page=1

        const productsFilters = query["filters"] ? query["filters"].split(";").map((filter, index, arr) => {
            const filterParams = filter.split("-") // пример id-value

            if (filterParams.includes("interval")) {
                const intervalMaxValue = arr[index + 1].split('-')[3] // следуйщий элемент массива будет фильтр с таким же id только с макс значением
                arr.splice(index + 1, 1) // удаляем следуйщий фильтр который обозначает фильтр с этим же id только с макс значением, чтобы не повторять операцию

                const minValue = filterParams[3] ? filterParams[3] : 0
                const maxValue = intervalMaxValue ? intervalMaxValue : 0

                return `filters[]=${filterParams[0]};between;${minValue};${maxValue}&`
            }

            if (filterParams[1].split(',').length >= 2) { // если в значении фильтра указано 2 или больше параметра, например "тип двигателя:Дизель,Электрический"

                return `filters[]=${filterParams[0]};in;${filterParams[1]}&`
            }

            
            return `filters[]=${filterParams[0]};=;${filterParams[1]}&`
        }).join('') : ""

        const quickLink = query["quickLink"] ? decodeURIComponent(query["quickLink"]) : false

        // получаем список товаров
        const productsURI = quickLink 
            ? 
            encodeURI(`https://trade-group.su/apicatalog?${quickLink}`) 
            :
            encodeURI(`https://trade-group.su/apicatalog?categories=${category}&${productsFilters}page=${page}`)
            
        const productsResponse = (await axios.get(productsURI)).data

        const products = productsResponse["products"]
        const pageCount = productsResponse["pages"]
        const filters = productsResponse["allprops"]
        const links = productsResponse["links"]


        return {
            props: {
                goods: !products ? [] : products,
                pageCount: pageCount ? pageCount : 0,
                currentPage: page,
                uri: context.resolvedUrl,
                filters,
                filtersURI: query["filters"],
                category,
                links,
                initialFilters: !!productsFilters
            }
        }
    } catch (error) {
        return {
            props: {
                goods: [],
                pageCount: 0,
                currentPage: 0,
                category: "4,5",
                uri: "",
                error: error + ""
            }
        }
    }
}