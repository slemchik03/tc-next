import Image from "next/image"
import Link from "next/link"
import { SearchVehicleForm } from "../components/Forms/SearchVehicleForm"

const Service = () => {
    return (
        <div>
            <div className="service-s1">
                <div className="container">
                    <div className="breadcrumbs">
                        <div className="breadcrumbs__block">
                            <Link href="/" ><a className="breadcrumbs__item">Главная</a></Link>
                        </div>
                        <div className="breadcrumbs__block">
                            <span className="breadcrumbs__item">Сервис и запчасти</span>
                        </div>
                    </div>
                    <div className="service-s1__wrapper">
                        <div className="service-s1__left">
                            <div className="service-s1__title">Сервис и запчасти</div>
                            <div className="service-s1__subtitle">
                                <span>TRADE - GROUP</span> занимается гарантийным ремонтом и сервисным обслуживанием вилочных погрузчиков, складской и дорожно-строительной техники.
                            </div>
                            <div className="service-s1__city">
                                <div className="service-s1__city-title">Мы имеем мобильные сервисные бригады в городах:</div>
                                <ul>
                                    <li><p className="service-s1__city-list">Москва</p></li>
                                    <li><p className="service-s1__city-list">Санкт-Петербург</p></li>
                                    <li><p className="service-s1__city-list">Новосибирск</p></li>
                                    <li><p className="service-s1__city-list">Екатеринбург</p></li>
                                    <li><p className="service-s1__city-list">Нижний Новгород</p></li>
                                    <li><p className="service-s1__city-list">Казань</p></li>
                                    <li><p className="service-s1__city-list">Челябинск</p></li>
                                    <li><p className="service-s1__city-list">Самара</p></li>
                                    <li><p className="service-s1__city-list">Уфа</p></li>
                                    <li><p className="service-s1__city-list">Пермь</p></li>
                                    <li><p className="service-s1__city-list">Краснодар</p></li>
                                    <li><p className="service-s1__city-list">Набережные-Челны</p></li>
                                </ul>
                                <div className="service-s1__city-info">
                                    <span>За каждой ремонтной бригадой</span> закреплен сервисный автомобиль, укомплектованный современным оборудованием, инструментом и оснасткой.
                                </div>
                            </div>
                        </div>
                        <div className="service-s1__right">
                            <div className="service-s1__elem">
                                <Image width="423px" height="610px" src="/2.webp" alt="" />
                            </div>
                            <div className="service-s1__elem2">
                                <Image width="514px" height="507px"  src="/3.webp" alt="" />
                            </div>
                            <div className="service-s1__elem3">
                                <Image width="1100px" height="975px"  src="/s1-elem2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-s2">
                <div className="container">
                    <div className="service-s2__wrapper">
                        <div className="service-s2__left">
                            <div className="service-s2__img">
                                <Image width="835px" height="313px" src="/vector-map.webp" alt="" />
                            </div>
                        </div>
                        <div className="service-s2__right">
                            <div className="service-s2__title">производим капитальный ремонт</div>
                            <div className="service-s2__services">
                                <ul>
                                    <li><p className="service-s2__services-list">Двигателей внутреннего сгорания,</p></li>
                                    <li><p className="service-s2__services-list">Восстановление контроллеров</p></li>
                                    <li><p className="service-s2__services-list">Гидродинамических / механических коробок передач</p></li>
                                    <li><p className="service-s2__services-list">Электро-двигателей постоянного тока</p></li>
                                    <li><p className="service-s2__services-list">Гидравлических цилиндров</p></li>
                                    <li><p className="service-s2__services-list">Сварочные и покрасочные работы</p></li>
                                    <li><p className="service-s2__services-list">Ведущих и управляемых мостов</p></li>
                                    <li><p className="service-s2__services-list">Грузоподъемных устройств вилочной техники</p></li>
                                    <li><p className="service-s2__services-list">Гидродинамических / механических коробок передач</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map">
                <div className="container">
                    <div className="map__wrapper">
                        <div className="map__form map__form">
                            <p className="map__form-title">Подберем технику за 15 минут</p>
                            <p className="map__form-subtitle">Оставьте свой номер, и мы перезвоним вам</p>
                            <SearchVehicleForm />
                        </div>
                        <a href="https://yandex.uz/maps/213/moscow/house/likhoborskaya_naberezhnaya_3s9/Z04YcwVhQUICQFtvfXR0dXxrZg==/?ll=37.520370%2C55.853907&z=17.54" id="map-block" className="map__block">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service