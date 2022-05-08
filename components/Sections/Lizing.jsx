import Image from "next/image"
import { OrderLizingModal } from "../Modals/OrderLizingModal"
import { useState } from "react"

export const Lizing = () => {
    const [isModalShow, setModalShowStatus] = useState(false)

    return (
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
                    <button onClick={() => setModalShowStatus(true)} className="lizing__btn" data-modal>Оставить заявку</button>
                    <OrderLizingModal isOpen={isModalShow} closeModal={() => setModalShowStatus(false)}/>
                </div>
            </div>
        </div>
    </section>
    )
}