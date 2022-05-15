import {useForm} from "react-hook-form"
import ReactModal from "react-modal"
import defaultModalStyles from "../../utils/defaultModalStyles"
import axios from "axios"

export const OrderLizingModal = ({isOpen, closeModal}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()


    const submitHandler = async (data) => {
        if (data["agreement"]) {
            const response = await axios.get(`https://trade-group.su/mail?name=${data["name"]}&tel=${data["phone"]}&message=${data["message"]}`)
            closeModal(true)
            return reset()
        }
     }
    return (
        <ReactModal style={defaultModalStyles} isOpen={isOpen}>
            <div className="modal__dialog">
                <div className="modal__content">
                        <div onClick={closeModal} data-close className="modal__close">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.254395" y="16.1326" width="22.8149" height="2.28149" rx="1" transform="rotate(-45 0.254395 16.1326)" fill="#DF0000"/>
                                <rect width="22.8149" height="2.28149" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.7458 16.1326)" fill="#DF0000"/>
                            </svg>                                
                        </div>
                            <p className="map__form-title">Подберем технику за 15 минут</p>
                            <p className="map__form-subtitle">Оставьте свой номер, и мы перезвоним вам</p>

                            <form onSubmit={handleSubmit(submitHandler)} id="form">

                            {
                                errors["agreement"] && (
                                    <div className="delivery__form-item">
                                        <p style={{color: "red"}}>Дайте свое согласие на обработку персональных данных</p>
                                    </div>
                                )

                            }
                                 <input {...register("phone", {required: true})} placeholder="Ваш номер телефона" name="phone" type="text" className="modal__input"></input> 
                                <input style={{marginTop: "5px"}} {...register("name", {required: true})} placeholder="Ваше имя" name="name" type="text" className="modal__input"></input>
                                <input {...register("message", {required: true})} placeholder="Какую технику вы хотите" name="message" type="text" className="modal__input"></input>
                            

                            <button style={{marginTop: "10px"}} type="submit" className="modal__btn">Сделать заказ.</button>
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
                        </form>
                            
                        </div>
                </div>
        </ReactModal>
            
    )
}