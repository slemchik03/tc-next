import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ThanksModal } from "../Modals/ThanksModal"


export const SearchVehicleForm = ({delivery}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const [isModalShow, setModalShowStatus] = useState(false)

    const submitHandler = async (data) => {
        if (data["agreement"]) {
            const response = await axios.get(`https://trade-group.su/mail?name=${data["name"]}&tel=${data["phone"]}`)
            setModalShowStatus(true)
            return reset()
        }
       
    }
    if (delivery) {
        return (
            <form onSubmit={handleSubmit(submitHandler)} >
                {
                    errors["agreement"] && (
                        <div className="delivery__form-item">
                            <p style={{color: "red"}}>Дайте свое согласие на обработку персональных данных</p>
                        </div>
                    )

                }
                <div className="delivery__form-item">
                        <input {...register("phone", {required: true})} className="delivery__form-input" type="text" name="phone" placeholder="Ваш номер телефона" />
                </div>
                <div className="delivery__form-item">
                       <input {...register("name", {required: true})} className="delivery__form-input" type="text" name="name" placeholder="Ваше имя"></input>
                </div>
                <div style={{marginTop:"10px"}} className="delivery__form-item">
                        <button className="delivery__form-btn" type="submit">Отправить</button>
                </div>
                <div className="delivery__form-item">
                        <div className="delivery__form-checkbox">
                            <input {...register("agreement", {required: true})} id="formAgreement" type="checkbox" className="delivery__checkbox-input"></input>
                            <label htmlFor="formAgreement" className="delivery__checkbox-label">
                            <span>
                                 Я даю свое согласие на обработку персональных данных 
                                 и соглашаюсь с условиями и политикой конфиденциальности
                            </span>
                            </label>
                        </div>
                    </div>
                <ThanksModal isOpen={isModalShow} closeModal={() => setModalShowStatus(false)}/>
            </form> 
        )
    }

    return (   
            <form onSubmit={handleSubmit(submitHandler)}>
                {
                    errors["agreement"] && (
                        <div className="map__form-item">
                            <p style={{color: "red"}}>Дайте свое согласие на обработку персональных данных</p>
                        </div>
                    )

                }
                    <div className="map__form-item">
                        <input {...register("phone", {required: true})} className="map__form-input" type="text" name="phone" placeholder="Ваш номер телефона"></input>
                    </div>
                    <div className="map__form-item">
                        <input {...register("name", {required: true})} className="map__form-input" type="text" name="name" placeholder="Ваше имя"></input>
                    </div>
                    <div style={{marginTop:"10px"}} className="map__form-item">
                        <button className="map__form-btn" type="submit">Отправить</button>
                    </div>
                    <div className="delivery__form-item">
                            <div className="delivery__form-checkbox">
                                    <input {...register("agreement", {required: true})} id="formAgreement" type="checkbox" className="delivery__checkbox-input"></input>
                                    <label htmlFor="formAgreement" className="delivery__checkbox-label">
                                    <span>
                                        Я даю свое согласие на обработку персональных данных 
                                        и соглашаюсь с условиями и политикой конфиденциальности
                                    </span>
                                    </label>
                            </div>
                    </div>
                    <ThanksModal isOpen={isModalShow} closeModal={() => setModalShowStatus(false)}/>
            </form>   
    )
}