import Link from "next/link"

export const Footer = () => {
    return (
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
                        <li><Link href="/company"><a className="footer__item-link">О компании</a></Link></li>
                        <li><Link href="/#delivery"><a  className="footer__item-link">Доставка</a></Link></li>
                        <li><Link href="/service"><a className="footer__item-link">Сервис и запчасти</a></Link></li>
                        <li><a href="#" className="footer__item-link">Реквизиты</a></li>
                        <li><a href="#" className="footer__item-link">Отзывы</a></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <p className="footer__item-title">КАТАЛОГ</p>
                    <ul>
                        <li><Link href="/catalog/categories/4?prevId=0"><a className="footer__item-link">Вилочные погрузчики</a></Link></li>
                        <li><Link href="/catalog/categories/2?prevId=0"><a className="footer__item-link">Техника для склада</a></Link></li>
                        <li><Link href="/catalog/categories/3?prevId=0"><a className="footer__item-link">Навесное оборудование</a></Link></li>
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
    )
}