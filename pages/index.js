import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
   	
    <div className="wrapper" id="up">
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="index.html" className="header__logo">
                        <img src="images/logo.svg" alt="logo">
                        <p className="header__logo-text">Вилочные погрузчики и техника для склада с доставкой по России
						</p>
						
                    </a>
                    <a href="index.html" className="header__mobile-logo">
                        <img src="images/logo.svg" alt="logo">
						
                    </a>
                    <div className="header__location">
                        <div className="header__location-icon">
                            <img src="images/location-icon.svg" alt="location">
                        </div>
                        <div className="header__location-info">
                            <div className="header__location-city">Москва</div>
                            <div className="header__location-address">Лихоборская набережная дом 3</div>
                        </div>
                    </div>
                    <div className="header__telephone">
                        <div className="header__telephone-icon">
                            <img src="images/call-icon.svg" alt="call">
                        </div>
                        <a href="tel:+74951667733" className="header__telephone-number">+7 (495) 166-77-33</a>
                    </div>
                    <div className="header__btn" data-modal>Заказать звонок</div>
                </div>
                <nav className="nav">
                    <ul className="nav__menu">
                        <li><a href="#our-tech" className="nav__link">Наша техника</a></li>
                        <li><a href="#delivery" className="nav__link">Доставка</a></li>
                        <li><a href="#lizing" className="nav__link">Лизинг</a></li>
                        <li><a href="company.html" className="nav__link">О компании</a></li>
                        <li><a href="service.html" className="nav__link">Сервис и запчасти</a></li>
                        <li><a href="news-catalog.html" className="nav__link">Новости</a></li>
                        <li><a href="catalog.html" className="nav__link">Каталог</a></li>
                        <li><a href="#footer" className="nav__link">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div className="mobile-menu">
                <nav className="mobile-nav">
                    <ul className="mobile-nav__menu">
                        <li><a href="#our-tech" className="mobile-nav__link">Наша техника</a></li>
                        <li><a href="#delivery" className="mobile-nav__link">Доставка</a></li>
                        <li><a href="#lizing" className="mobile-nav__link">Лизинг</a></li>
                        <li><a href="company.html" className="mobile-nav__link">О компании</a></li>
                        <li><a href="service.html" className="mobile-nav__link">Сервис и запчасти</a></li>
                        <li><a href="news-catalog.html" className="mobile-nav__link">Новости</a></li>
                        <li><a href="catalog.html" className="mobile-nav__link">Каталог</a></li>
                        <li><a href="#footer" className="mobile-nav__link">Контакты</a></li>
                    </ul>
                </nav>
                <div className="menu__location">
                    <div className="menu__location-icon">
                        <img src="images/location-icon.svg" alt="location">
                    </div>
                    <div className="menu__location-info">
                        <div className="menu__location-city">Москва</div>
                        <div className="menu__location-address">Лихоборская набережная дом 3, строение 9</div>
                    </div>
                </div>
                <div className="menu__telephone">
                    <div className="menu__telephone-icon">
                        <img src="images/call-icon.svg" alt="call">
                    </div>
                    <a href="tel:+74951667733" className="menu__telephone-number">+7 (495) 166-77-33</a>
                </div>
                <button className="menu__call-btn">Заказать звонок</button>
                <div className="menu__social">
                   
                    <div className="menu__social-item">
                        <a href="#"><img src="images/social-icons/youtube.svg" alt=""> </a>
                    </div>
                 
                    <div className="menu__social-item">
                        <a href="https://api.whatsapp.com/send/?phone=79167377607&text=Обязательно отправьте это сообщение и дождитесь ответа&app_absent=0"><img src="images/social-icons/whatsapp.svg" alt=""> </a>
                    </div>
                </div>
            </div>
        </header>

        <main className="main">
            <section className="intro">
                <div className="container">
                    <div className="intro__wrapper">
                        <div className="intro__left">
                            <h1>Вилочные погрузчики и техника <span>для склада с доставкой по России</span></h1>
                            <div className="intro__btns">
                                <a href="#" className="intro__link">Перейти в каталог</a>
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
                                <img src="images/s1-elem.webp" alt="">
                            </div>
                            <div className="intro__bg-elem2">
                                <img src="images/s1-elem2.webp" alt="">
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
                            <a href="/catalog" className="our-tech__link">Перейти в каталог</a>
                            <div className="our-tech__slider-btns">
                                <div className="our-tech__prev">
                                    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31 11.5H1M1 11.5L13.1875 22M1 11.5L13.1875 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className="our-tech__next">
                                    <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11.5H31M31 11.5L18.8125 1M31 11.5L18.8125 22" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                            
                                </div>
                            </div>
                        </div>
                        <div className="our-tech__slider">
                            <div className="swiper-wrapper">
                                <div className="our-tech__slider-item swiper-slide">
                                    <img className="our-tech-slide3" src="images/3.webp" alt="">
                                    <button data-filter className="our-tech__btn3">
                                        <img src="images/our-tech-btn.svg" alt="btn">
                                    </button>
                                </div>
                                <div className="our-tech__slider-item swiper-slide">
                                    <img className="our-tech-slide1" src="images/1.webp" alt="">
                                    <button data-filter className="our-tech__btn1">
                                        <img src="images/our-tech-btn.svg" alt="btn">
                                    </button>
                                </div>
                                <div className="our-tech__slider-item swiper-slide">
                                    <img className="our-tech-slide2" src="images/2.webp" alt="">
                                    <button data-filter className="our-tech__btn2">
                                        <img src="images/our-tech-btn.svg" alt="btn">
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
                                <img src="images/vector-map.webp" alt="">
                            </div>
                            <div className="delivery__content-block">
                                <div className="delivery__item">
                                    <img src="images/dot-elem.svg" alt="icon">
                                    <p className="delivery__text">Доставка осуществляется в любой регион России</p>
                                </div>
                                <div className="delivery__item">
                                    <img src="images/dot-elem.svg" alt="icon">
                                    <p className="delivery__text">До грузового терминала транспортной компании продукция доставляется бесплатно</p>
                                </div>
                                <div className="delivery__item">
                                    <img src="images/dot-elem.svg" alt="icon">
                                    <p className="delivery__text">В дальнейшем клиент оплачивает услуги транспортной компании по действующим тарифам</p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery__form">
                            <p className="delivery__form-title">Подберем технику за 15 минут</p>
                            <p className="delivery__form-subtitle">Оставьте свой номер, и мы перезвоним вам</p>
                            <form action="/">
                                <div className="delivery__form-item">
                                    <input className="delivery__form-input" type="text" name="phone" placeholder="Ваш номер телефона"></input>
                                </div>
                                <div className="delivery__form-item">
                                    <input className="delivery__form-input" type="text" name="name" placeholder="Ваше имя"></input>
                                </div>
                                <div className="delivery__form-item">
                                    <button className="delivery__form-btn" type="submit">Отправить</button>
                                </div>
                                <div className="delivery__form-item">
                                    <div className="delivery__form-checkbox">
                                        <input id="formAgreement" checked type="checkbox" name="agreement" className="delivery__checkbox-input"></input>
                                        <label for="formAgreement" className="delivery__checkbox-label">
                                            <span>
                                                Я даю свое согласие на обработку персональных данных 
                                                и соглашаюсь с условиями и политикой конфиденциальности
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </form>
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
                                Перейти в каталог
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="lizing" className="lizing">
                <div className="container">
                    <div className="lizing__wrapper">
                        <div className="lizing__img">
                            <img src="images/lizing-img.webp" alt="img">
                        </div>
                        <div className="lizing__content">
                            <h2 className="title lizing__title">Лизинг</h2>
                            <div className="lizing__items">
                                <div className="lizing__item">
                                    <img src="images/dot-elem.svg" alt="icon">
                                    <p className="lizing__text">
                                        Наша Компания сотрудничает с ведущими поставщиками и производителями специальной техники и оборудования, что даёт нашим клиентам возможность приобрести в лизинг спецтехнику на максимально выгодных условиях.
                                    </p>
                                </div>
                                <div className="lizing__item">
                                    <img src="images/dot-elem.svg" alt="icon">
                                    <p className="lizing__text">
                                        Лизинг позволяет юридическим лицам абсолютно легально оптимизировать налогообложение, относя лизинговые платежи 
                                        на затраты, что намного уменьшает налогооблагаемую прибыль.
                                    </p>
                                </div>
                                <div className="lizing__item">
                                    <img src="images/dot-elem.svg" alt="icon">
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
                            <img src="images/partners/sber-lizing.webp" alt="">
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="images/partners/alfa-lizing.webp" alt="">
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="images/partners/balt-lizing.webp" alt="">
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="images/partners/europlan.webp" alt="">
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="images/partners/peco.webp" alt="">
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="images/partners/sovkombank.webp" alt="">
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
                                    <path d="M31 11.5H1M1 11.5L13.1875 22M1 11.5L13.1875 1" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="news__slider-next">
                                <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11.5H31M31 11.5L18.8125 1M31 11.5L18.8125 22" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                            
                            </div>
                        </div>
                        <div className="news__inner">
                            <div className="news__slider">
                                <div className="swiper-wrapper">
                                    <div className="news__item swiper-slide">
                                        <div className="news__item-img">
                                            <img src="images/news/img-1.webp" alt="">
                                        </div>
                                        <p className="news__item-date">17.02.2022</p>
                                        <p className="news__item-title">Поздравляем Вас с 23 февраля!</p>
                                        <p className="news__item-text">
                                            Здравствуйте, дорогие друзья! <br />
                                            Команда Warehouse automation <br />
                                            от всей души поздравляет <br />
                                            С ДНЕМ ЗАЩИТНИКА ОТЕЧЕСТВА! Здравствуйте, дорогие друзья!<br />
                                            Команда Warehouse automation
                                        </p>
                                        <a href="/news" className="news__item-link">Читать полностью</a>
                                    </div>
                                    <div className="news__item swiper-slide">
                                        <div className="news__item-img">
                                            <img src="images/news/img-2.webp" alt="">
                                        </div>
                                        <p className="news__item-date">17.02.2022</p>
                                        <p className="news__item-title">Преимущества погрузчика EP</p>
                                        <p className="news__item-text">
                                            Помимо превосходных технических характеристик немаловажным остается факт комфорта эксплуатации. И в этом погрузчик EP преуспевает. Помимо превосходных технических характеристик немаловажным остается факт комфорта эксплуатации. И в этом погрузчик EP преуспевает
                                        </p>
                                        <a href="#" className="news__item-link">Читать полностью</a>
                                    </div>
                                    <div className="news__item swiper-slide">
                                        <div className="news__item-img">
                                            <img src="images/news/img-3.webp" alt="">
                                        </div>
                                        <p className="news__item-date">17.02.2022</p>
                                        <p className="news__item-title">Новая техника на складе</p>
                                        <p className="news__item-text">
                                            На склад Warehouse automation поступила большая партия складской техники EP.
                                            Среди представленных к продаже моделей – новые погрузчики. На склад Warehouse automation поступила большая партия складской техники EP
                                        </p>
                                        <a href="#" className="news__item-link">Читать полностью</a>
                                    </div>
                                    <div className="news__item swiper-slide">
                                        <div className="news__item-img">
                                            <img src="images/news/img-2.webp" alt="">
                                        </div>
                                        <p className="news__item-date">17.02.2022</p>
                                        <p className="news__item-title">Новая техника на складе</p>
                                        <p className="news__item-text">
                                            На склад Warehouse automation поступила большая партия складской техники EP.
                                            Среди представленных к продаже моделей – новые погрузчики. На склад Warehouse automation поступила большая партия складской техники EP
                                        </p>
                                        <a href="#" className="news__item-link">Читать полностью</a>
                                    </div>
                                </div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </div>
                        <a href="/news" className="news__link">Читать все новости</a>
                    </div>
                </div>
            </section>

            <div className="map">
                <div className="container">
                    <div className="map__wrapper">
                        <div className="map__form map__form">
                            <p className="map__form-title">Подберем технику за 15 минут</p>
                            <p className="map__form-subtitle">Оставьте свой номер, и мы перезвоним вам</p>
                            <form action="/">
                                <div className="map__form-item">
                                    <input className="map__form-input" type="text" name="phone" placeholder="Ваш номер телефона"></input>
                                </div>
                                <div className="map__form-item">
                                    <input className="map__form-input" type="text" name="name" placeholder="Ваше имя"></input>
                                </div>
                                <div className="map__form-item">
                                    <button className="map__form-btn" type="submit">Отправить</button>
                                </div>
                                <div className="map__form-item">
                                    <div className="map__form-checkbox">
                                        <input id="map-formAgreement" checked type="checkbox" name="agreement" className="map__checkbox-input"></input>
                                        <label for="map-formAgreement" className="map__checkbox-label">
                                            <span>
                                                Я даю свое согласие на обработку персональных данных 
                                                и соглашаюсь с условиями и политикой конфиденциальности
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <a href="https://yandex.uz/maps/213/moscow/house/likhoborskaya_naberezhnaya_3s9/Z04YcwVhQUICQFtvfXR0dXxrZg==/?ll=37.520370%2C55.853907&z=17.54" target="_blank" id="map-block" className="map__block">
                        </a>
                    </div>
                </div>
            </div>
        </main>

        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <a href="#top" className="footer__logo">
                            <img src="images/logo.svg" alt="logo">
                        </a>
                        <a href="#" className="footer__app-link">
                            <img src="images/google-play.webp" alt="link">
                        </a>
                    </div>
                    <div className="footer__item">
                        <div className="footer__address">
                            <p className="footer__address-title">АДРЕС</p>
                            <p className="footer__address-text">
                                Москва, Лихоборская набережная дом 3
                            </p>
                        </div>
                        <div className="footer__contacts">
                            <p className="footer__contacts-title">КОНТАКТЫ</p>
                            <a href="tel:+74951667733" className="footer__contacts-number">+7 (495) 166-77-33</a>
                            <p className="footer__contacts-email">mail@trade-group.su</p>
                        </div>
                    </div>
                    <div className="footer__item">
                        <p className="footer__item-title">КОМПАНИЯ</p>
                        <ul>
                            <li><a href="#" className="footer__item-link">О компании</a></li>
                            <li><a href="#" className="footer__item-link">Доставка</a></li>
                            <li><a href="#" className="footer__item-link">Сервис и запчасти</a></li>
                            <li><a href="#" className="footer__item-link">Реквизиты</a></li>
                            <li><a href="#" className="footer__item-link">Отзывы</a></li>
                        </ul>
                    </div>
                    <div className="footer__item">
                        <p className="footer__item-title">КАТАЛОГ</p>
                        <ul>
                            <li><a href="#" className="footer__item-link">Вилочные погрузчики</a></li>
                            <li><a href="#" className="footer__item-link">Техника для склада</a></li>
                            <li><a href="#" className="footer__item-link">Навесное оборудование</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__bottom-text">
                        © 2020-2022. ООО «ТРЭЙД ГРУПП». Все права защищены
                    </p>
                    <p className="footer__bottom-policy">Политика конфиденциальности</p>
                    <a href="#" className="footer__bottom-app-link">
                        <img src="images/google-play.webp" alt="link">
                    </a>
                    <div className="footer__bottom-social">
                        
                        <a href="#" className="footer__social"><img src="images/social-icons/footer-youtube.svg" >
						
						</a>
                        <a href="#" className="footer__social"><img src="images/social-icons/footer-whatsapp.svg" alt=""> </a>
                    </div>
                </div>
            </div>
        </footer>

        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__content">
                    <div data-close className="modal__close">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.254395" y="16.1326" width="22.8149" height="2.28149" rx="1" transform="rotate(-45 0.254395 16.1326)" fill="#DF0000"/>
                            <rect width="22.8149" height="2.28149" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.7458 16.1326)" fill="#DF0000"/>
                        </svg>                                
                    </div>
                    <form id="form">
                        <div className="modal__title">ЗАКАЗАТЬ ЗВОНОК</div>
                        <div className="modal__subtitle">Оставьте свой номер, и мы перезвоним вам</div>
                        <input required placeholder="Ваш номер телефона" name="phone" type="text" className="modal__input"></input> 
                        <input required placeholder="Ваше имя" name="name" type="text" className="modal__input"></input> 
                        <button type="submit" className="modal__btn">Отправить</button>
                        <div className="modal__checkbox">
                            <input id="modal-formAgreement" checked type="checkbox" name="agreement" className="modal__checkbox-input">
							</input> 
                            <label for="modal-formAgreement" className="modal__checkbox-label">
                                <span>
                                    Я даю свое согласие на обработку персональных данных 
                                    и соглашаюсь с условиями и политикой конфиденциальности
                                </span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="thanks">
            <div className="thanks__dialog">
                <div className="thanks__content">
                    <div data-close className="thanks__close">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.254395" y="16.1326" width="22.8149" height="2.28149" rx="1" transform="rotate(-45 0.254395 16.1326)" fill="#DF0000"/>
                            <rect width="22.8149" height="2.28149" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.7458 16.1326)" fill="#DF0000"/>
                        </svg>                                
                    </div>
                    <div className="thanks__title"><span>Спасибо.</span> <br /> Заявка отправлена!</div>
                    <div className="thanks__subtitle">Наш менеджер получил Вашу заявку и скоро свяжется с Вами.</div>
                    <a href="#" className="thanks__link">Главная страница</a>
                </div>
            </div>
        </div>

        <div className="filter">
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
                                    <input name="manufacturer" id="manufacturer-all" checked className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" for="manufacturer-all">Все</label>
                                </div>
                                <div className="filter__manufacturer-item">
                                    <input name="manufacturer" id="manufacturer-china" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" for="manufacturer-china">Китай</label>
                                </div>
                                <div className="filter__manufacturer-item">
                                    <input name="manufacturer" id="manufacturer-japan-usa" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" for="manufacturer-japan-usa">Япония / США</label>
                                </div>
                            </div>
                        </div>


                        <div className="filter__engine">
                            <p className="filter__engine-title">Тип двигателя</p>
                            <div className="filter__engine-content">
                                <div className="filter__engine-item">
                                    <input name="engine" id="engine-petrol-gas" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" for="engine-petrol-gas">Бензин / газ</label>
                                </div>
                                <div className="filter__engine-item">
                                    <input name="engine" id="engine-dizel" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" for="engine-dizel">Дизельный</label>
                                </div>
                                <div className="filter__engine-item">
                                    <input name="engine" id="engine-electric" className="filter__radio" type="radio"></input> 
                                    <label className="filter__label" for="engine-electric">Электрический</label>
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
        </div>
    </div>

	
  )
}
