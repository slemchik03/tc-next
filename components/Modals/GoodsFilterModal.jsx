import ReactModal from "react-modal"
import defaultModalStyles from "../../utils/defaultModalStyles"
import {useForm} from "react-hook-form"
import { useRouter } from "next/router"
import { useState } from "react"
import { DefaultFilters } from "../CatalogFilter/DefaultFilters"

ReactModal.setAppElement("body")


export const GoodsFilterModal = ({isOpen, closeModal}) => {
    const {register, handleSubmit} = useForm()
    const router = useRouter()
    const [intervalValues, setIntervalValues] = useState({}) 

    const submitHandler = data => {
        const path = Object.entries({...data, ...intervalValues})
        .filter(el => el[1] !== false)
        .map(el => `${el[0]}-${el[1]}`)
        .join(';') 

        router.push(`/catalog?categories=4,5&filters=${path}&page=0`)
    }

    const resetInterval = () => {
        setIntervalValues({})
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
                    <div className="cat-filter__engine">
                        <p  style={{color: "#000"}} className="cat-filter__engine-title" >Погрузчики</p>

                        <div className="cat-filter__engine-content">
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">С боковой загрузкой </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Большегрузные </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Внедорожные </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Электрические </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Дизельные </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Газ/бензиновые </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Техника для терминала</label>
                        </div>

                    </div>

                </div>
                <div className="cat-filter__engine">
                        <p  style={{color: "#000"}} className="cat-filter__engine-title" >Транспортировщики паллет</p>

                        <div className="cat-filter__engine-content">
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Перевозчики паллет </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Самоходные электротележки </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Самоходные электротележки с ручным подъемом  </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Электрические </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Сопровождаемые </label>
                        </div>

                    </div>

                </div>
                <div className="cat-filter__engine">
                        <p  style={{color: "#000"}} className="cat-filter__engine-title" >Штабелеры</p>

                        <div className="cat-filter__engine-content">
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Ручные </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Самоходные </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">С электроподъемом </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">С площадкой для оператора </label>
                        </div>
                        <div className="cat-filter__engine-item">
                            <input  className="cat-filter__radio" type="checkbox" />
                            <label  className="cat-filter__label" style={{color: "#000"}} htmlFor="cat-engine-petrol-gas">Сопровождаемые </label>
                        </div>

                    </div>

                </div>
                        <DefaultFilters 
                            register={register}
                            setIntervalValues={setIntervalValues}
                            intervalValues={intervalValues}
                        />

                        <div className="filter__btns">
                            <button type="submit" className="filter__show">Показать</button>
                            <button onClick={resetInterval} type="reset" className="filter__reset">Сбросить фильтры</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        </ReactModal>

    )
}