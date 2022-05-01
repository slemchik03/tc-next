import Image from 'next/image'
import Link from 'next/link'
import { SearchVehicleForm } from '../components/SearchVehicleForm'

export default function Home() {
  return (
    <div className="wrapper" id="up">

            <section className="intro">
                <div className="container">
                    <div className="intro__wrapper">
                        <div className="intro__left">
                            <h1>Вилочные погрузчики и техника <span>для склада с доставкой по России</span></h1>
                            <div className="intro__btns">
                                <button className="intro__btn">Задать вопрос менеджеру</button>
                            </div>
                            <div className="intro__statistic">
                                <div className="intro__statistic-item">
                                    <p className="intro__statistic-num">12</p>
                                    <p className="intro__statistic-text">лет поставляем технику нашим клиентам</p>
                                </div>
                                <div className="intro__statistic-item">
                                    <p className="intro__statistic-num">2500+</p>
                                    <p className="intro__statistic-text">более 2500 единиц техники было поставлено</p>
                                </div>
                                <div className="intro__statistic-item">
                                    <p className="intro__statistic-num">24<span>/</span>7</p>
                                    <p className="intro__statistic-text">техническое сервисное обслуживание вашей техники</p>
                                </div>
                            </div>
                        </div>
                        <div className="intro__right">
                            <div className="intro__bg-elem">
                                <Image width='600px' height='600px' src="/s1-elem.webp" alt="" />
                            </div>
                            <div className="intro__bg-elem2">
                                <Image width='600px' height='600px' objectFit='contain' src="/s1-elem2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why" className="why">
                <div className="container">
                    <h2 className="title">ПОЧЕМУ НАМ ДОВЕРЯЮТ</h2>
                    <div className="why__wrapper">
                        <div className="why__item">
                            <div className="why__item-num">01</div>
                            <div className="why__item-content">
                                <div className="why__item-title">Прямые поставки от производителей</div>
                                <div className="why__item-text">
                                    Мы занимаемся поставкой складской техники, вилочных погрузчиков и явлемся официальным дилером ведущих производителей техники для склада и вилочных погрузчиков EP Equipment и Liugong.
                                </div>
                            </div>
                        </div>
                        <div className="why__item">
                            <div className="why__item-num">02</div>
                            <div className="why__item-content">
                                <div className="why__item-title">Персональный подбор техники</div>
                                <div className="why__item-text">
                                    Мы всегда готовы оказать профессиональную помощь на всех этапах сотрудничества, проконсультировать по техническим вопросам, или помочь приобрести технику на удобных для вас условиях.
                                </div>
                            </div>
                        </div>
                        <div className="why__item">
                            <div className="why__item-num">03</div>
                            <div className="why__item-content">
                                <div className="why__item-title">Гибкая ценовая политика</div>
                                <div className="why__item-text">
                                    Наши клиенты это в основном представители крупного, среднего и малого бизнеса, а так жегосударственные компании и частные предприниматели. 
                                </div>
                            </div>
                        </div>
                        <div className="why__item">
                            <div className="why__item-num">04</div>
                            <div className="why__item-content">
                                <div className="why__item-title">Сервисная сеть по всей России</div>
                                <div className="why__item-text">
                                    Для нас не принцпиально из какого региона России вы к нам обращаетесь, мы доставим технику в любую точку страны точно и в срок.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="our-tech" className="our-tech">
                <div className="container">
                    <div className="our-tech__wrapper">
                        <div className="our-tech__content">
                            <h2 className="title">Наша техника</h2>
                            <div className="our-tech__slider-btns">
                                <div className="our-tech__prev">
                                    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31 11.5H1M1 11.5L13.1875 22M1 11.5L13.1875 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="our-tech__next">
                                    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11.5H31M31 11.5L18.8125 1M31 11.5L18.8125 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>                                            
                                </div>
                            </div>
                        </div>
                        <div className="our-tech__slider">
                            <div className="swiper-wrapper">
                                <div className="our-tech__slider-item swiper-slide">
                                    <img  className="our-tech-slide3" src="/3.webp" alt=""  />
                                    <button data-filter className="our-tech__btn3">
                                        <Image objectFit='cover'  width="55px" height="55px" src="/our-tech-btn.svg" alt="btn"   />
                                    </button>
                                </div>
                                <div className="our-tech__slider-item swiper-slide">
                                    <img className="our-tech-slide1" src="/1.webp" alt=""  />
                                    <button data-filter className="our-tech__btn1">
                                        <Image objectFit='cover' width="55px" height="55px" src="/our-tech-btn.svg" alt="btn"  />
                                    </button>
                                </div>
                                <div className="our-tech__slider-item swiper-slide">
                                    <img className="our-tech-slide2" src="/2.webp" alt=""  />
                                    <button data-filter className="our-tech__btn2">
                                        <Image objectFit='cover' width="55px" height="55px" src="/our-tech-btn.svg" alt="btn"  />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="delivery" className="delivery">
                <div className="container">
                    <div className="delivery__wrapper">
                        <div className="delivery__content">
                            <h2 className="title delivery__title">ДОСТАВКА</h2>
                            <div className="delivery__content-bg">
                                <Image width="29" height="29" src="/vector-map.webp"  alt="" />
                            </div>
                            <div className="delivery__content-block">
                                <div className="delivery__item">
                                    <Image width="29" height="29" src="/dot-elem.svg" alt="icon"  />
                                    <p className="delivery__text">Доставка осуществляется в любой регион России</p>
                                </div>
                                <div className="delivery__item">
                                    <Image width="29" height="29" src="/dot-elem.svg" alt="icon"   />
                                    <p className="delivery__text">До грузового терминала транспортной компании продукция доставляется бесплатно</p>
                                </div>
                                <div className="delivery__item">
                                    <Image width="29" height="29" src="/dot-elem.svg" alt="icon"   />
                                    <p className="delivery__text">В дальнейшем клиент оплачивает услуги транспортной компании по действующим тарифам</p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery__form">
                        <p className="delivery__form-title">Подберем технику за 15 минут</p>
                        <p className="delivery__form-subtitle">Оставьте свой номер, и мы перезвоним вам</p>
                        <SearchVehicleForm delivery />
                        </div>
                    </div>
                </div>
            </section>

            <div className="sale">
                <div className="container">
                    <div className="sale__wrapper">
                        <div>
                            <div className="sale__title">
                                <span>распродажа техники</span> с максимальной скидкой
                            </div>
                            <div className="sale__link">
                                 <Link href="/catalog" ><a> Перейти в каталог </a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="lizing" className="lizing">
                <div className="container">
                    <div className="lizing__wrapper">
                        <div className="lizing__image">
                            <Image width="1000" height="600" objectFit='cover' src="/lizing-img.webp" alt="Лизинг"   />
                        </div>
                        <div className="lizing__content">
                            <h2 className="title lizing__title">Лизинг</h2>
                            <div className="lizing__items">
                                <div className="lizing__item">
                                    <Image objectFit='contain' width="29" height="29" src="/dot-elem.svg" alt="icon"    />
                                    <p className="lizing__text">
                                        Наша Компания сотрудничает с ведущими поставщиками и производителями специальной техники и оборудования, что даёт нашим клиентам возможность приобрести в лизинг спецтехнику на максимально выгодных условиях.
                                    </p>
                                </div>
                                <div className="lizing__item">
                                    <Image objectFit='contain' width="29" height="29" src="/dot-elem.svg" alt="icon"    />
                                    <p className="lizing__text">
                                        Лизинг позволяет юридическим лицам абсолютно легально оптимизировать налогообложение, относя лизинговые платежи 
                                        на затраты, что намного уменьшает налогооблагаемую прибыль.
                                    </p>
                                </div>
                                <div className="lizing__item">
                                    <Image objectFit='contain' width="29" height="29" src="/dot-elem.svg" alt="Лизинг"   />
                                    <p className="lizing__text">
                                        В момент окончания срока действия договора имущество, переданное в лизинг переходит в собственность клиента 
                                        по остаточной (выкупной) стоимости.
                                    </p>
                                </div>
                            </div>
                            <p className="lizing__info">
                                Если Вас интересует приобретение в лизинг, оставьте заявку и мы Вам перезвоним для уточнения подробностей.
                            </p>
                            <button className="lizing__btn" data-modal>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="partners">
                <div className="partners__slider">
                    <div className="swiper-wrapper partners__wrapper">
                        <div className="partners__item swiper-slide">
                            <Image objectFit='contain' width="180" height="40" src="/partners/sber-lizing.webp" alt="Сбер лизинг"    />
                        </div>
                        <div className="partners__item swiper-slide">
                            <Image objectFit='contain' width="180" height="40"  src="/partners/alfa-lizing.webp" alt=""  />
                        </div>
                        <div className="partners__item swiper-slide">
                            <Image objectFit='contain' width="180" height="40"  src="/partners/balt-lizing.webp" alt=""  />
                        </div>
                        <div className="partners__item swiper-slide">
                            <Image objectFit='contain' width="180" height="40"  src="/partners/europlan.webp" alt=""  />
                        </div>
                        <div className="partners__item swiper-slide">
                            <Image objectFit='contain' width="180" height="40" src="/partners/peco.webp" alt=""  />
                        </div>
                        <div className="partners__item swiper-slide">
                            <Image objectFit='contain' width="180" height="40"  src="/partners/sovkombank.webp" alt=""  />
                        </div>
                    </div>
                </div>
            </div>

            <section className="news">
                <div className="container">
                    <div className="news__wrapper">
                        <h2 className="title">НОВОСТИ КОМПАНИИ</h2>
                        <div className="news__slider-btns">
                            <div className="news__slider-prev">
                                <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31 11.5H1M1 11.5L13.1875 22M1 11.5L13.1875 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="news__slider-next">
                                <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11.5H31M31 11.5L18.8125 1M31 11.5L18.8125 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>                                            
                            </div>
                        </div>
                        <div className="news__inner">
                            <div className="news__slider">
                                <div className="swiper-wrapper">
                                 
                                    <div className="news__item swiper-slide">
                                        <div className="news__item-img">
                                            <Image objectFit='cover' width="400px" height="226px" src="/news/img-2.webp" alt=""  />
                                        </div>
                                        <p className="news__item-date">17.02.2022</p>
                                        <p className="news__item-title">Новая техника на складе</p>
                                        <p className="news__item-text">
                                            На склад Warehouse automation поступила большая партия складской техники EP.
                                            Среди представленных к продаже моделей – новые погрузчики. На склад Warehouse automation поступила большая партия складской техники EP
                                        </p>
                                       <Link href="/news/new-teknik" className="news__item-link"><a>Читать полностью </a></Link>
                                    </div>
                                </div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </div>
                       <Link href="/news" className="news__link"><a>Читать все новости </a></Link>
                    </div>
                </div>
            </section>

            <div className="map">
                <div className="container">
                    <div className="map__wrapper">
                        <div className="map__form map__form">
                            <p className="map__form-title">Подберем технику за 15 минут</p>
                            <p className="map__form-subtitle">Оставьте свой номер, и мы перезвоним вам</p>
                            <SearchVehicleForm />
                        </div>
                       <a href="https://yandex.uz/maps/213/moscow/house/likhoborskaya_naberezhnaya_3s9/Z04YcwVhQUICQFtvfXR0dXxrZg==/?ll=37.520370%2C55.853907&z=17.54"  id="map-block" className="map__block">
                         </a>
                    </div>
                </div>
            </div>

        {
            /*


        {/* <div className="filter">
            <div className="filter__dialog">
                <div className="filter__content">
                    <div data-closee className="filter__close">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.254395" y="16.1326" width="22.8149" height="2.28149" rx="1" transform="rotate(-45 0.254395 16.1326)" fill="#DF0000"/>
                            <rect width="22.8149" height="2.28149" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.7458 16.1326)" fill="#DF0000"/>
                        </svg>             
                    </div>
                    <div className="filter__form">
                        <div className="filter__manufacturer">
                            <p className="filter__manufacturer-title">Производитель</p>
                            <div className="filter__manufacturer-content">
                                <div className="filter__manufacturer-item">
                                    <input name="manufacturer" id="manufacturer-all" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" htmlFor="manufacturer-all">Все</label>
                                </div>
                                <div className="filter__manufacturer-item">
                                    <input name="manufacturer" id="manufacturer-china" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" htmlFor="manufacturer-china">Китай</label>
                                </div>
                                <div className="filter__manufacturer-item">
                                    <input name="manufacturer" id="manufacturer-japan-usa" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" htmlFor="manufacturer-japan-usa">Япония / США</label>
                                </div>
                            </div>
                        </div>


                        <div className="filter__engine">
                            <p className="filter__engine-title">Тип двигателя</p>
                            <div className="filter__engine-content">
                                <div className="filter__engine-item">
                                    <input name="engine" id="engine-petrol-gas" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" htmlFor="engine-petrol-gas">Бензин / газ</label>
                                </div>
                                <div className="filter__engine-item">
                                    <input name="engine" id="engine-dizel" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" htmlFor="engine-dizel">Дизельный</label>
                                </div>
                                <div className="filter__engine-item">
                                    <input name="engine" id="engine-electric" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" htmlFor="engine-electric">Электрический</label>
                                </div>
                            </div>
                        </div>

                        <div className="filter__loadcapacity">
                            <p className="filter__loadcapacity-title">Грузоподъемность</p>
                            <div className="filter__loadcapacity-slider" id="loadcapacity-range-slier"></div>
                            <div className="filter__loadcapacity-inputs">
                                <label className="filter__loadcapacity-label">
                                    <span className="filter__loadcapacity-label-text">От</span>
                                    <input type="number" min="1000" max="48000" placeholder="1000" className="filter__loadcapacity-input" id="loadcapacity-input-0"></input> 
                                </label>
                                <label className="filter__loadcapacity-label">
                                    <span className="filter__loadcapacity-label-text">До</span>
                                    <input type="number" min="1000" max="48000" placeholder="48000" className="filter__loadcapacity-input" id="loadcapacity-input-1"></input> 
                                </label>
                            </div>
                        </div>

                        <div className="filter__liftingheight">
                            <p className="filter__liftingheight-title">Грузоподъемность</p>
                            <div className="filter__liftingheight-slider" id="liftingheight-range-slier"></div>
                            <div className="filter__liftingheight-inputs">
                                <label className="filter__liftingheight-label">
                                    <span className="filter__liftingheight-label-text">От</span>
                                    <input type="number" min="2" max="15200" placeholder="1000" className="filter__liftingheight-input" id="liftingheight-input-0"></input> 
                                </label>
                                <label className="filter__liftingheight-label">
                                    <span className="filter__liftingheight-label-text">До</span>
                                    <input type="number" min="2" max="15200" placeholder="48000" className="filter__liftingheight-input" id="liftingheight-input-1"></input> 
                                </label>
                            </div>
                        </div>

                        <div className="filter__btns">
                            <button className="filter__show">Показать</button>
                            <button className="filter__reset">Сбросить фильтры</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    </div>
  )
}
