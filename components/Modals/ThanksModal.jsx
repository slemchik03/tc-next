import ReactModal from "react-modal"
import defaultModalStyles from "../../utils/defaultModalStyles"

ReactModal.setAppElement("body")

export const ThanksModal = ({isOpen, closeModal}) => {
    return (
        <ReactModal style={defaultModalStyles} isOpen={isOpen}>
            <div className="thanks">
            <div className="thanks__dialog">
                <div className="thanks__content">
                    <div onClick={closeModal} data-close className="thanks__close">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.254395" y="16.1326" width="22.8149" height="2.28149" rx="1" transform="rotate(-45 0.254395 16.1326)" fill="#DF0000"/>
                            <rect width="22.8149" height="2.28149" rx="1" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.7458 16.1326)" fill="#DF0000"/>
                        </svg>                                
                    </div>
                    <div className="thanks__title"><span>Спасибо.</span><br/> Заявка отправлена!</div>
                    <div className="thanks__subtitle">Наш менеджер получил Вашу заявку и скоро свяжется с Вами.</div>
                    <a onClick={closeModal} href="#" className="thanks__link">Главная страница</a>
                </div>
            </div>
        </div>
        </ReactModal>

    )
}