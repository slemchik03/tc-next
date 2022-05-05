import ReactModal from "react-modal"
import defaultModalStyles from "../utils/defaultModalStyles"
import {useForm} from "react-hook-form"
import { useRouter } from "next/router"

ReactModal.setAppElement("body")


export const GoodsFilterModal = ({isOpen, closeModal}) => {
    const {register, handleSubmit, reset} = useForm()
    const router = useRouter()

    const submitHandler = data => {
        const path = Object.entries(data).map((el) => {
            return `${el[0]}-${el[1]}`
        }).join(';') 

        router.push(
        `/catalog?categories=2&filters=${path}&page=0`
        )
    }

    return (
        <ReactModal isOpen={isOpen} style={{...defaultModalStyles}}>
            <div className="filter">
            <div className="filter__dialog">
                <div className="filter__content">
                    <div onClick={closeModal} data-closee className="filter__close">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.254395" y="16.1326" width="22.8149" height="2.28149" rx="1" transform="rotate(-45 0.254395 16.1326)" fill="#DF0000"/>
                            <rect width="22.8149" height="2.28149" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.7458 16.1326)" fill="#DF0000"/>
                        </svg>             
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="filter__form">
                        <div className="filter__manufacturer">
                            <p className="filter__manufacturer-title">Производитель</p>
                            <div className="filter__manufacturer-content">
                                <div className="filter__manufacturer-item">
                                    <input value="Все"  id="manufacturer-all" className="filter__radio" type="checkbox"></input> 
                                    <label className="filter__label" htmlFor="manufacturer-all">Все</label>
                                </div>
                                <div className="filter__manufacturer-item">
                                    <input value="Китай" id="manufacturer-china" className="filter__radio" type="checkbox"></input> 
                                    <label className="filter__label" htmlFor="manufacturer-china">Китай</label>
                                </div>
                                <div className="filter__manufacturer-item">
                                    <input  value="Япония / США" id="manufacturer-japan-usa" className="filter__radio" type="checkbox"></input> 
                                    <label className="filter__label" htmlFor="manufacturer-japan-usa">Япония / США</label>
                                </div>
                            </div>
                        </div>

                        <div className="filter__engine">
                            <p className="filter__engine-title">Тип двигателя</p>
                            <div className="filter__engine-content">
                                <div className="filter__engine-item">
                                    <input {...register("13")} value="Бензин / газ" className="filter__radio" type="checkbox"></input> 
                                    <label className="filter__label" htmlFor="engine-petrol-gas">Бензин / газ</label>
                                </div>
                                <div className="filter__engine-item">
                                    <input {...register("13")} value="Дизельный" className="filter__radio" type="checkbox"></input> 
                                    <label className="filter__label" htmlFor="engine-dizel">Дизельный</label>
                                </div>
                                <div className="filter__engine-item">
                                    <input {...register("13")} value="Электрический" className="filter__radio" type="checkbox"></input> 
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
                                    <input {...register("3-interval-min")} type="number" min="1000" max="48000" placeholder="1000" className="filter__loadcapacity-input" id="loadcapacity-input-0"></input> 
                                </label>
                                <label className="filter__loadcapacity-label">
                                    <span className="filter__loadcapacity-label-text">До</span>
                                    <input {...register("3-interval-max")} type="number" min="1000" max="48000" placeholder="48000" className="filter__loadcapacity-input" id="loadcapacity-input-1"></input> 
                                </label>
                            </div>
                        </div>

                        <div className="filter__liftingheight">
                            <p className="filter__liftingheight-title">Высота подъема</p>
                            <div className="filter__liftingheight-slider" id="liftingheight-range-slier"></div>
                            <div className="filter__liftingheight-inputs">
                                <label className="filter__liftingheight-label">
                                    <span className="filter__liftingheight-label-text">От</span>
                                    <input {...register("5-interval-min")} type="number" min="2" max="15200" placeholder="1000" className="filter__liftingheight-input" id="liftingheight-input-0"></input> 
                                </label>
                                <label className="filter__liftingheight-label">
                                    <span className="filter__liftingheight-label-text">До</span>
                                    <input {...register("5-interval-max")} type="number" min="2" max="15200" placeholder="48000" className="filter__liftingheight-input" id="liftingheight-input-1"></input> 
                                </label>
                            </div>
                        </div>

                        <div className="filter__btns">
                            <button type="submit" className="filter__show">Показать</button>
                            <button type="reset" className="filter__reset">Сбросить фильтры</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        </ReactModal>

    )
}