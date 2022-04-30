import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import { SearchVehicleForm } from '../../components/SearchVehicleForm';

export default function Product({goods}) {
    const [showMore, setShowMore] = useState(false)

    if (goods) { // если товар существует - отрисовать его
        const item = goods[0] // получаем товар
        return (
            <div>
            <Head>
                <title>{item.article}</title>
            </Head>
            <div className="product-card">
                    <div className="container">
                        <div className="breadcrumbs">
                            <div className="breadcrumbs__block-white">
                                <a href="#" className="breadcrumbs__item breadcrumbs__item-white">Главная</a>
                            </div>
                            <div className="breadcrumbs__block">
                                <span className="breadcrumbs__item">{item.article}</span>
                            </div>
                        </div>
                        <div className="product-card__wrapper">
                            <div className="product-card__img-box">
                                <div className="product-card__slider">
                                <div className="product-card__slider-item swiper-slide">
                                    <Image width="400px" height="355px" src={item.img} alt=""/>
                                </div>
                                </div>
                                {/* <p className="product-card__price-old">1 234 567 ₽</p> */}
                                <p className="product-card__price-new">{item.price}</p>
                                <a href="#" className="product-card__link">Нашли дешевле? Снизим цену!</a>
                            </div>
                            <div className="product-card__content">
                                <p className="product-card__title">{item.name}</p>
                                <p className="product-card__articul">Код товара: {item.id}</p>
                                <div className="product-card__btns">
                                    <a href="#" className="product-card__favorite">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="gray"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                    </a>
                                </div>
                                <div className="product-card__tabs">
                                    <div className="tabs">
                                        <ul>
                                            <li className="product-card__tabs-item is-active">Характеристики</li>
                                            <li className="product-card__tabs-item">Дополнительная информация</li>
                                        </ul>
                                    </div>
                                    <div className="product-card__tabs-catalog characteristic">
                                        <div className="characteristic-wrapper">
                                            {
                                                item.properties.map((element, index) => {
                                                    return (
                                                    <div key={index} className="product-card__tabs-catalog-item bottom-line">
                                                        <div className="product-card__tabs-catalog-item-left">
                                                            {element["property"] + ":"}
                                                        </div>
                                                        <div className="product-card__tabs-catalog-item-right">
                                                            {element["value"]}
                                                        </div>
                                                    </div>
                                                    )
                                                }).slice(0, showMore ? item.properties.length : 5)
                                            }
                                        </div>
                                        <a onClick={() => setShowMore((status) => !status)} className="characteristic-show-more">{ showMore ? "Спрятать" : "Показать еще"}</a>
                                    </div>
                                    <div className="product-card__tabs-catalog addinfo hide">
                                        <div className="product-card__tabs-catalog-item">
                                            <div className="product-card__tabs-catalog-item-addinfo">
                                                <span>Lorem ipsum dolor sit amet consectetur</span> adipisicing elit. Quasi quos id tempora quibusdam voluptatibus veritatis alias possimus expedita quia repudiandae voluptate dolorem tempore, atque sequi ducimus sint exercitationem ullam assumenda! Nisi eius aliquam, possimus at vel debitis quidem molestiae beatae mollitia. Aliquid molestiae sequi reprehenderit blanditiis provident earum, accusantium reiciendis!
                                                <br/>
                                                <br/>
                                                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit</span>. Alias dolorem rem repudiandae unde eum obcaecati vitae assumenda quos necessitatibus dolorum perspiciatis aperiam architecto dignissimos soluta tenetur, harum, non voluptatibus nostrum.
                                                <br/>
                                                <br/>
                                                <span>Lorem ipsum dolor</span>, sit amet consectetur adipisicing elit. Modi et cumque nulla! Ipsa sunt accusamus natus tempore ea illo ad ipsam facilis sint, quae eos reiciendis, voluptatem eius nihil exercitationem voluptates ratione aspernatur officiis ab non. Ullam, odit, modi commodi eum quisquam architecto tempore debitis recusandae maxime neque fuga impedit?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="product-card__pay-btn">Купить</button>
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
                                    <a href="https://yandex.uz/maps/213/moscow/house/likhoborskaya_naberezhnaya_3s9/Z04YcwVhQUICQFtvfXR0dXxrZg==/?ll=37.520370%2C55.853907&z=17.54" id="map-block" className="map__block"></a>
                                </div>
                            </div>
                        </div>
            
                    </div>
            
        )
    }

    return (
        <div>Товар не найден</div>
    )

}


export async function getServerSideProps(context) {
    try {
        const {params} = context
        const response = (await axios.get(`https://trade-group.su/apicatalog?slug=${params.slug}`)).data

        return {
            props: {
                goods: response 
            }
        }
    } catch(e) {
        return {
            props: {
                goods: null
            }
        }
    }
}