import Link from "next/link"
import { Navigation } from "swiper"
import {Swiper} from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { SearchVehicleForm } from "../components/Forms/SearchVehicleForm"

const Company = () => {
    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="breadcrumbs">
                        <div className="breadcrumbs__block">
                        <Link href="/" ><a className="breadcrumbs__item">Главная</a></Link>
                        </div>
                        <div className="breadcrumbs__block">
                            <span className="breadcrumbs__item">О компании</span>
                        </div>
                    </div>
                    <div className="about__wrapper">
                        <div className="about__title">О компании</div>
                        <div className="about__subtitle">
                            <span>Компания TRADE - GROUP</span> занимает одну из лидирующих позиций на рынке техники для склада и вилочных погрузчиков.
                        </div>
                        <div className="about__list">
                            <div className="about__list-title">Мы поставляем широкий ассортимент техники для склада:</div>
                            <ul>
                                <li><p className="about__list-text">вилочные погрузчкики (дизельные, газ-бензиновые, электрические)</p></li>
                                <li><p className="about__list-text">электрические тележки</p></li>
                                <li><p className="about__list-text">штабелеры</p></li>
                                <li><p className="about__list-text">ричтраки</p></li>
                                <li><p className="about__list-text">комплектовщики заказов</p></li>
                                <li><p className="about__list-text">узкопроходные штабелеры</p></li>
                                <li><p className="about__list-text">тягачи</p></li>
                                <li><p className="about__list-text">штабелеры с электроподъемом</p></li>
                                <li><p className="about__list-text">ручные штабелеры</p></li>
                                <li><p className="about__list-text">гидравлические тележки</p></li>
                                <li><p className="about__list-text">навесное оборудование для различных задач</p></li>
                            </ul>
                            <div className="about__text about__text-red">
                                <span>На нашем складе всегда большой выбор</span> вилочных погрузчиков и оборудования для склада, как премиум производителей, так и производства с заводов КНР, доступные по стоимости при отличном качестве.
                            </div>
                            <div className="about__text2 about__text-red">
                                <span>Звоните! Мы поможем подобрать оборудование под Ваши задачи без переплат!</span>
                            </div>
                            <div className="about__text3">
                                Мы являемся официальным дилером ведущих производителей техники для склада и вилочных погрузчиков EP Equipment и Liugong, что позволяет нам предложить клиенту практически любую технику для склада исходя из его потребностей, а партнерство с лизинговыми компаниями, такими как Сберлизинг, Альфализинг, Европлан, Ресо-лизинг, позволяет подобрать выгодные варианты финансирования приобретения техники.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="partners">
                <div className="partners__slider">
                    <div className="swiper-wrapper partners__wrapper">
                        <div className="partners__item swiper-slide">
                            <img src="/partners/sber-lizing.webp" alt="" />
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="/partners/alfa-lizing.webp" alt="" />
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="/partners/balt-lizing.webp" alt="" />
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="/partners/europlan.webp" alt="" />
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="/partners/peco.webp" alt="" />
                        </div>
                        <div className="partners__item swiper-slide">
                            <img src="/partners/sovkombank.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="manufacturers">
                <div className="container">
                    <div className="manufacturers__title">Производители</div>
                    <div className="manufacturers__wrapper">
                        <div className="manufacturers__item">
                            <div className="manufacturers__img">
                                <img src="/company/ep-equipment.webp" alt="" />
                            </div>
                            <div className="manufacturers__content">
                                <div className="manufacturers__content-text">
                                    <span>EP Equipment – китайская машиностроительная корпорация</span>, занимающая 1-е место в Китае по выпуску самоходной складской техники.
                                    <br/><br/>
                                    <span>EP Equipment – это инновации и репутация надёжного производителя!</span>
                                    <br/><br/>
                                    <span>EP Equipment – производит самый широкий ассортимент</span> подъемно-транспортного оборудования, ежемесячно выпускается по несколько новых моделей техники.
                                    <br/><br/>
                                    <span>EP Equipment начинает свою историю в 1993 году.</span>
                                    <br/><br/>
                                    В компании работает более 1000 человек по всему миру, и она особенно известна на рынках Европы, Китая и США.
                                    В 2017 году компания EP Equipment поставила более 50 000 единиц самоходных машин, 
                                    а 2019 году преодолела планку в 130 000 машин в год.
                                    18 января 2018 г. - Группа KION (производитель всемирно известных Linde и Still) вступает 
                                    в эксклюзивное глобальное стратегическое партнерство с ведущим китайским производителем 
                                    EP Equipment 
                                    на быстрорастущем рынке складского оборудования путем приобретения миноритарной доли 
                                    в EP Equipment.
                                    <br/><br/>
                                    Партнерство сосредоточено на совместной разработке продуктов и синергии цепочки поставок, что сделало обе стороны более конкурентоспособными с точки зрения предлагаемых ими продуктов.
                                    <br/><br/>
                                    По мнению Квек Чинг Понг, член исполнительного совета KION Group и руководитель по Азиатско-Тихоокеанскому региону - «EP Equipment неуклонно растет в Китае и во всем мире, особенно 
                                    в складском сегменте начального уровня, благодаря его сильной ориентации на клиентов 
                                    и инновационному и конкурентоспособному ассортименту продукции. Вступив в партнерство 
                                    с EP Equipment, KION еще больше укрепит свои позиции в качестве ведущего поставщика подъемно-транспортного оборудования».
                                    <br/><br/>
                                    <span>Выбирая EP Equipment, Вы выбираете надежного партнера для своего бизнеса, в чем уже убедились тысячи довольных клиентов на территории РФ и СНГ!</span>
                                </div>
                            </div>
                        </div>
                        <div className="manufacturers__item">
                            <div className="manufacturers__img">
                                <img src="/company/liugong.webp" alt="" />
                            </div>
                            <div className="manufacturers__content">
                                <div className="manufacturers__content-text">
                                    <span>LiuGong –</span> крупнейшее государственное предприятие по производству спецтехники и погрузчиков в Китае с самой широкой линейкой дорожно-строительной техники.
                                </div>
                            </div>
                        </div>
                        <div className="manufacturers__item">
                            <div className="manufacturers__img">
                                <img src="/company/tcm.webp" alt="" />
                            </div>
                            <div className="manufacturers__content">
                                <div className="manufacturers__content-text">
                                    <span>ТСМ –</span> знаменитый японский бренд, принадлежащий компании, под которым выпускаются современные автопогрузчики, прекрасно зарекомендовавшие себя на рынке. Корпорацию ТСМ, образованную в 1949 году, можно смело назвать настоящим новатором в области производства подъемной техники.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="sertificats">
                <div className="container">
                    <div className="sertificats__wrapper">
                        <div className="sertificats__title">Сертификаты</div>
                        <div className="sertificats__slider-btns">
                            <div className="sertificats__slider-prev">
                                <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31 11.5H1M1 11.5L13.1875 22M1 11.5L13.1875 1" stroke="#fff" stroke-strokewidth={"2"} strokelinecap-linecap="round" stroke-strokelinejoin="round"/>
                                </svg>
                            </div>
                            <div className="sertificats__slider-next">
                                <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11.5H31M31 11.5L18.8125 1M31 11.5L18.8125 22" stroke="#fff" stroke-strokewidth={"2"} strokelinecap-linecap="round" stroke-strokelinejoin="round"/>
                                </svg>                                            
                            </div>
                        </div>
                        <div className="sertificats__slider">
                            <div className="swiper-wrapper sertificats__slider-wrapper">
                                <Swiper modules={[Navigation]} slidesPerView={2} 
                                    navigation={
                                        {
                                            prevEl: ".sertificats__slider-prev",
                                            nextEl: ".sertificats__slider-next"
                                        }
                                    }
                                >
                                    <SwiperSlide>
                                        <div className="sertificats__slider-item swiper-slide">
                                            <img src="/company/sertificats-1.webp" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sertificats__slider-item swiper-slide">
                                            <img src="/company/sertificats-2.webp" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sertificats__slider-item swiper-slide">
                                            <img src="/company/sertificats-3.webp" alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="sertificats__slider-item swiper-slide">
                                            <img src="/company/sertificats-3.webp" alt="" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="sertificats__pagination"></div>
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

            <div className="requisites">
                <div className="container">
                    <div className="requisites__title">Реквизиты</div>
                    <div className="requisites__wrapper">
                        <div className="requisites__item">
                            <div className="requisites__name">Название организации</div>
                            <div className="requisites__value">{`ООО "ТРЭЙД ГРУПП"`}</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">Юридический адрес</div>
                            <div className="requisites__value">108836, Г. Москва, Поселение Десеновское, ул. 3-я Нововатутинская, д. 7 -242</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">ОГРН</div>
                            <div className="requisites__value">5187746033327</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">ОКПО</div>
                            <div className="requisites__value">35311311</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">ИНН</div>
                            <div className="requisites__value">7751153691</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">КПП</div>
                            <div className="requisites__value">775101001</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">р/с</div>
                            <div className="requisites__value">40702810704300001313</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">Название банка</div>
                            <div className="requisites__value">ФИЛИАЛ ЦЕНТРАЛЬНЫЙ ПАО БАНКА {`"ФК ОТКРЫТИЕ"`}</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">БИК</div>
                            <div className="requisites__value">044525297</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">к/с</div>
                            <div className="requisites__value">30101810945250000297</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">Телефон</div>
                            <div className="requisites__value">+7 (495) 166-77-33</div>
                        </div>
                        <div className="requisites__item">
                            <div className="requisites__name">Email</div>
                            <div className="requisites__value">mail@trade-group.su</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company