import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ThanksDialog } from "./ThanksDialog"


export const SearchVehicleForm = ({delivery}) => {
    const {register, handleSubmit, reset} = useForm()
    const [isModalShow, setModalShowStatus] = useState(false)

    const submitHandler = async (data) => {
       const response = await axios.get(`https://trade-group.su/mail?name=${data["name"]}&tel=${data["phone"]}`)
       setModalShowStatus(true)
       reset()
    }


    if (delivery) {
        return (
            <form onSubmit={handleSubmit(submitHandler)} >
                <div className="delivery__form-item">
                        <input {...register("phone", {required: true})} className="delivery__form-input" type="text" name="phone" placeholder="Ваш номер телефона" />
                </div>
                <div className="delivery__form-item">
                       <input {...register("name", {required: true})} className="delivery__form-input" type="text" name="name" placeholder="Ваше имя"></input>
                </div>
                <div className="delivery__form-item">
                        <button className="delivery__form-btn" type="submit">Отправить</button>
                </div>
                <div className="delivery__form-item">
                <div className="delivery__form-checkbox">
                        <input id="formAgreement" onChange={() => ""} type="checkbox" checked name="agreement" className="delivery__checkbox-input"></input>
                        <label htmlFor="formAgreement" className="delivery__checkbox-label">
                        <span>
                            Я даю свое согласие на обработку персональных данных 
                            и соглашаюсь с условиями и политикой конфиденциальности
                        </span>
                        </label>
                </div>
                </div>
                <ThanksDialog isOpen={isModalShow} closeModal={() => setModalShowStatus(false)}/>
            </form> 
        )
    }

    return (   
            <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="map__form-item">
                        <input {...register("phone", {required: true})} className="map__form-input" type="text" name="phone" placeholder="Ваш номер телефона"></input>
                    </div>
                    <div className="map__form-item">
                        <input {...register("name", {required: true})} className="map__form-input" type="text" name="name" placeholder="Ваше имя"></input>
                    </div>
                    <div className="map__form-item">
                        <button className="map__form-btn" type="submit">Отправить</button>
                    </div>
                    <div className="map__form-item">
                        <div className="map__form-checkbox">
                            <input id="map-formAgreement" onChange={() => ""} checked type="checkbox" name="agreement" className="map__checkbox-input"></input>
                            <label htmlFor="map-formAgreement" className="map__checkbox-label">
                                <span>
                                    Я даю свое согласие на обработку персональных данных 
                                    и соглашаюсь с условиями и политикой конфиденциальности
                                </span>
                            </label>
                        </div>
                    </div>
                    <ThanksDialog isOpen={isModalShow} closeModal={() => setModalShowStatus(false)}/>
            </form>   
    )
}