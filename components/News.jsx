import Image from "next/image"
import Link from "next/link"

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


export const News = () => {
    return (
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
                         <Swiper
                            modules={[Navigation, Pagination]}      
                            slidesPerView={2}
                            navigation={{
                                nextEl: ".news__slider-next",
                                prevEl: ".news__slider-prev"
                            }}
                         >
                            <SwiperSlide>
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
                                <Link href="#/news/new-teknik" className="news__item-link"><a>Читать полностью </a></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                <Link href="#/news/new-teknik" className="news__item-link"><a>Читать полностью </a></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
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
                                <Link href="#/news/new-teknik" className="news__item-link"><a>Читать полностью </a></Link>
                                </div>
                            </SwiperSlide>
                         </Swiper>
                        
                        </div>
                        <div className="swiper-scrollbar"></div>
                    </div>
                </div>
               <Link href="#/news" className="news__link"><a>Читать все новости </a></Link>
            </div>
        </div>
    </section>
    )
}