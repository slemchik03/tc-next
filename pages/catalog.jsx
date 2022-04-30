import axios from "axios"
import Image from "next/image";
import { useRouter } from "next/router";

export default function Catalog({goods}) {
    const router = useRouter()
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
              <form className="cat-filter__form">
                  <div className="cat-filter__inner">


                      <div className="cat-filter__engine">
                          <p className="cat-filter__engine-title">Тип двигателя</p>
                          <div className="cat-filter__engine-content">
                              <div className="cat-filter__engine-item">
                                  <input name="cat-engine" id="cat-engine-petrol-gas" className="cat-filter__radio" type="radio" />
                                  <label className="cat-filter__label" htmlFor="cat-engine-petrol-gas">Бензин / газ</label>
                              </div>
                              <div className="cat-filter__engine-item">
                                  <input name="cat-engine" id="cat-engine-dizel" className="cat-filter__radio" type="radio" />
                                  <label className="cat-filter__label" htmlFor="cat-engine-dizel">Дизельный</label>
                              </div>
                              <div className="cat-filter__engine-item">
                                  <input name="cat-engine" id="cat-engine-electric" className="cat-filter__radio" type="radio" />
                                  <label className="cat-filter__label" htmlFor="cat-engine-electric">Электрический</label>
                              </div>
                          </div>
                      </div>

                      <div className="cat-filter__loadcapacity">
                          <p className="cat-filter__loadcapacity-title">Грузоподъемность</p>
                          <div className="cat-filter__loadcapacity-slider" id="cat-loadcapacity-range-slier"></div>
                          <div className="cat-filter__loadcapacity-inputs">
                              <label className="cat-filter__loadcapacity-label">
                                  <span className="cat-filter__loadcapacity-label-text">От</span>
                                  <input type="number" min="1000" max="48000" placeholder="1000" className="cat-filter__loadcapacity-input" id="cat-loadcapacity-input-0" />
                              </label>
                              <label className="cat-filter__loadcapacity-label">
                                  <span className="cat-filter__loadcapacity-label-text">До</span>
                                  <input type="number" min="1000" max="48000" placeholder="48000" className="cat-filter__loadcapacity-input" id="cat-loadcapacity-input-1" />
                              </label>
                          </div>
                      </div>

                      <div className="cat-filter__liftingheight">
                          <p className="cat-filter__liftingheight-title">Высота подъема</p>
                          <div className="cat-filter__liftingheight-slider" id="cat-liftingheight-range-slier"></div>
                          <div className="cat-filter__liftingheight-inputs">
                              <label className="cat-filter__liftingheight-label">
                                  <span className="cat-filter__liftingheight-label-text">От</span>
                                  <input type="number" min="2" max="15200" placeholder="1000" className="cat-filter__liftingheight-input" id="cat-liftingheight-input-0" />
                              </label>
                              <label className="cat-filter__liftingheight-label">
                                  <span className="cat-filter__liftingheight-label-text">До</span>
                                  <input type="number" min="2" max="15200" placeholder="48000" className="cat-filter__liftingheight-input" id="cat-liftingheight-input-1" />
                              </label>
                          </div>
                      </div>
                  </div>

                  <div className="cat-filter__btns">
                      <button className="cat-filter__show">Показать</button>
                      <button className="cat-filter__reset">Сбросить фильтры</button>
                  </div>
              </form>
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
                            <button className="catalog__item-btn" data-modal>Оставить заявку</button>
                        </div>
                    </div>
                      )
                  })
                  
              }
            {
                !goods.length && <div>Товары не найдены!</div>
            }
          </div>
          <div className="cat-pagination">
              <div className="cat-pagination__wrapper">
                  <button className="cat-pagination__prev">
                      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.15991 1.41L3.57991 6L8.15991 10.59L6.74991 12L0.749912 6L6.74991 0L8.15991 1.41Z" fill="#202123"/>
                      </svg>                                    
                  </button>
                  <ul className="cat-pagination__list">
                      <li className="cat-pagination__list-item is-active"><a href="#">1</a></li>
                      <li className="cat-pagination__list-item"><a href="#">2</a></li>
                      <li className="cat-pagination__list-item"><a href="#">3</a></li>
                      <li className="cat-pagination__list-item"><a href="#">4</a></li>
                      <li className="cat-pagination__list-item"><a href="#">5</a></li>
                  </ul>
                  <button className="cat-pagination__next">
                      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.840088 1.41L5.42009 6L0.840088 10.59L2.25009 12L8.25009 6L2.25009 0L0.840088 1.41Z" fill="#202123"/>
                      </svg>                                    
                  </button>
              </div>
          </div>
      </div>
  </div>
      </div>
    )
}

export async function getServerSideProps(context) {
    try {
        const {query} = context

        if (!query?.categories) {// если пользователь задал не категорию  
                                // переадресовать его на страницу с любой категорией, например 2
            return {              
                redirect: {
                    permanent: false,
                    destination: "/catalog?categories=2&page=1",
                }
            }
        }

        const category = query.categories
        const page = !query?.page ? 1 : query.page // если пользователь не задал страницу ставим page=1

        // получаем список товаров
        const response = (await axios.get(`https://trade-group.su/apicatalog?categories=${category}&page=${page}`)).data

        const goodsList = []

        for (let i = 0; i < response.length; i++) { // ищем каждый товар по slug и добавляем в список товаров
            const element = response[i]
            const goodsItem = (await axios.get(`https://trade-group.su/apicatalog?slug=${element["slug"]}`)).data
            goodsList.push(...goodsItem)
        } 
        

        return {
            props: {
                goods: goodsList
            }
        }
    } catch (error) {
        return {
            props: {
                goods: [],
                error: true
            }
        }
    }
}