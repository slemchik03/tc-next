import Image from 'next/image'
import Link from 'next/link'
import { Lizing } from '../components/Lizing'
import { News } from '../components/News'
import { OurTech } from '../components/OurTech'
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

            <OurTech />

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

            <Lizing />

            <div className="partners">
                <div className="partners__slider">
                    <div className="partners__wrapper">
                        <div className="partners__item">
                            <Image objectFit='contain' width="180" height="40" src="/partners/sber-lizing.webp" alt="Сбер лизинг"    />
                        </div>
                        <div className="partners__item">
                            <Image objectFit='contain' width="180" height="40"  src="/partners/alfa-lizing.webp" alt=""  />
                        </div>
                        <div className="partners__item ">
                            <Image objectFit='contain' width="180" height="40"  src="/partners/balt-lizing.webp" alt=""  />
                        </div>
                        <div className="partners__item">
                            <Image objectFit='contain' width="180" height="40"  src="/partners/europlan.webp" alt=""  />
                        </div>
                        <div className="partners__item ">
                            <Image objectFit='contain' width="180" height="40" src="/partners/peco.webp" alt=""  />
                        </div>
                        <div className="partners__item ">
                            <Image objectFit='contain' width="180" height="40"  src="/partners/sovkombank.webp" alt=""  />
                        </div>
                    </div>
                </div>
            </div>

            <News />

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

    </div>
  )
}
