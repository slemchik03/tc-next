export const Layout = ({children}) => {
    return (
            <div>
            <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="header__logo">
                    <a href="index.html" >
                        <img src="/logo.svg" alt="logo" />
                        <p className="header__logo-text">Вилочные погрузчики и техника для склада с доставкой по России
                        </p>
                        
                    </a>
                    </div>
                    <a href="index.html" className="header__mobile-logo">
                        <img src="/logo.svg" alt="logo"  />
                        
                    </a>
                    <div className="header__location">
                        <div className="header__location-icon">
                            <img src="/location-icon.svg" alt="location"  />
                        </div>
                        <div className="header__location-info">
                            <div className="header__location-city">Москва</div>
                            <div className="header__location-address">Лихоборская набережная дом 3</div>
                        </div>
                    </div>
                    <div className="header__telephone">
                        <div className="header__telephone-icon">
                            <img src="/call-icon.svg" alt="call"  />
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
                        <img src="/location-icon.svg" alt="location"   />
                    </div>
                    <div className="menu__location-info">
                        <div className="menu__location-city">Москва</div>
                        <div className="menu__location-address">Лихоборская набережная дом 3, строение 9</div>
                    </div>
                </div>
                <div className="menu__telephone">
                    <div className="menu__telephone-icon">
                        <img src="/call-icon.svg" alt="call"   />
                    </div>
                    <a href="tel:+74951667733" className="menu__telephone-number">+7 (495) 166-77-33</a>
                </div>
                <button className="menu__call-btn">Заказать звонок</button>
                <div className="menu__social">
                
                    <div className="menu__social-item">
                        <a href="#"><img src="/social-icons/youtube.svg" alt=""  /> </a>
                    </div>
                
                    <div className="menu__social-item">
                        <a href="https://api.whatsapp.com/send/?phone=79167377607&text=Обязательно отправьте это сообщение и дождитесь ответа&app_absent=0">
                            <img src="/social-icons/whatsapp.svg" alt=""  /> </a>
                    </div>
                </div>
            </div>
        </header>
        <main className="main">
            {children}
        </main>
        <footer className="footer" id="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__item">
                    <a href="#top" className="footer__logo">
                        <img src="/logo.svg" alt="logo"  />
                    </a>
                    <a href="#" className="footer__app-link">
                        <img src="/google-play.webp" alt="link"  />
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
                    <img src="/google-play.webp" alt="link"  />
                </a>
                <div className="footer__bottom-social">
                    
                    <a href="#" className="footer__social"><img src="/social-icons/footer-youtube.svg"  />
                    
                    </a>
                    <a href="#" className="footer__social"><img src="/social-icons/footer-whatsapp.svg" alt=""  /> </a>
                </div>
            </div>
        </div>
    </footer>
        </div>
    )
}