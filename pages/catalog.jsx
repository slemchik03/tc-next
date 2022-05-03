import axios from "axios"
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { CatalogFilters } from "../components/CatalogFilter/CatalogFilters";
import { CatalogPaginate } from "../components/CatalogPaginate";
import { OrderCallModal } from "../components/OrderCallModal";

export default function Catalog({goods, pageCount, currentPage, uri, filters}) {
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
                  <a href="#" className="breadcrumbs__item-white">Главная</a>
              </div>
              <div className="breadcrumbs__block">
                  <span className="breadcrumbs__item">Каталог</span>
              </div>
          </div>
          <div className="requests__wrapper">
              <div className="requests__title">Популярные запросы</div>
              <div className="requests__inner">
                  <ul>
                      <li><a href="#" className="requests__link">Вилочные автопогрузчики 3 тн</a></li>
                      <li><a href="#" className="requests__link">Вилочные автопогрузчики 3 тн</a></li>
                      <li><a href="#" className="requests__link">Вилочные автопогрузчики 3 тн</a></li>
                      <li><a href="#" className="requests__link">Вилочные автопогрузчики 3 тн</a></li>
                      <li><a href="#" className="requests__link">Вилочные автопогрузчики 3 тн</a></li>
                      <li><a href="#" className="requests__link">Вилочные автопогрузчики 3 тн</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>

  <div className="cat-filter">
      <div className="container">
          <div className="cat-filter__content">
                <CatalogFilters filters={filters}/>
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
                            <Image width="384px" height="256px" src={element.img} alt="" />
                        </div>
                        <div className="catalog__item-favorite-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="gray"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                        </div>
                        <div className="catalog__item-title">{element.name}</div>
                        <div className="catalog__item-info">
                        {
                            element.properties.map((element, index) => {
                                return (
                                    <div key={index} className="catalog__item-info-block">
                                        <div className="catalog__item-info-right">{element["property"]}</div>
                                        <div className="catalog__item-info-left">{element["value"]}</div>
                                    </div>
                                )
                            }).slice(0,4) // обрезаем оставшеися свойства
                        }

                        </div>
                        <div className="catalog__item-btns">
                            <a onClick={() => router.push("/catalog/" + element.slug)} href="#" className="catalog__item-more-btn">Подробнее</a>
                            <button onClick={() => orderProductClickHandler(element)} className="catalog__item-btn" data-modal>Оставить заявку</button>
                        </div>
                    </div>
                      )
                  })
                  
              }
            {
                !goods.length && <div>Товары не найдены!</div>

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
                    destination: "/catalog?categories=2&page=0",
                }
            }
        }
        // Получаем все параметры с url
        const category = query["categories"]
        const page = !query["page"] ? 1 : query["page"] // если пользователь не задал страницу ставим page=1

        const loadCapacityStart = +query["loadCapacityStart"] ? +query["loadCapacityStart"] : 0 // мин грузоподъемность
        const loadCapacityEnd = +query["loadCapacityEnd"] ? +query["loadCapacityStart"] : 48000 // макс грузоподъемность

        const engineType = query["engine"] ? query["engine"] : "Дизельный" // тип двигателя. по умолчанию дизель

        const manufacturerType = query["manufacture"] ? query["manufacture"] : "Все" // тип производителя 
        

        // получаем список товаров
        const productsURI = encodeURI(`https://trade-group.su/apicatalog?categories=${category}&filters[]=13;in;${engineType}&filters[]=3;between;${loadCapacityStart};${loadCapacityEnd}&page=${page}`)
        const productsResponse = (await axios.get(productsURI)).data
        // получаем список категорий
        const filtersResponse = (await axios.get(`https://trade-group.su/apicategories?parent=${category}&show_properties=1`)).data
       
        const products = productsResponse["products"]
        const pageCount = productsResponse["pages"]

        const goodsList = []

        for (let i = 0; i < products.length; i++) { // ищем каждый товар по slug и добавляем в список товаров
            const element = products[i]
            const goodsItem = (await axios.get(`https://trade-group.su/apicatalog?slug=${element["slug"]}`)).data
            goodsList.push(...goodsItem)
        } 

        const filters = filtersResponse.filter(item => item.is_filtered === "1")

        return {
            props: {
                goods: goodsList,
                pageCount,
                currentPage: page,
                uri: context.resolvedUrl,
                filters,
            }
        }
    } catch (error) {
        return {
            props: {
                goods: [],
                pageCount: 0,
                currentPage: 1,
                category: "",
                error: error + ""
            }
        }
    }
}