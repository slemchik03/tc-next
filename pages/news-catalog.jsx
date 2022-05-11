import axios from "axios"
import Link from "next/link"

const NewsCatalog = ({news}) => {
    return (
        <div>
        <div className="news-catalog">
            <div className="container">
                <div className="breadcrumbs">
                    <div className="breadcrumbs__block-white">
                        <Link href="/"><a className="breadcrumbs__item breadcrumbs__item-white">Главная</a></Link>
                    </div>
                    <div className="breadcrumbs__block-white">
                        <span className="breadcrumbs__item">Новости</span>
                    </div>
                </div>
                <div className="news-catalog__title">новости</div>
                <nav className="news-catalog__nav">
                    <ul>
                        <li>
                            <div className="news-catalog__nav-btn" data-news-filter="all"><span>В</span>се</div>
                        </li>
                        <li>
                            <div className="news-catalog__nav-btn is-active" data-news-filter="new"><span>Н</span>овые</div>
                        </li>
                        {/* <li>
                            <div className="news-catalog__nav-btn" data-news-filter="popular"><span>П</span>опулярные</div>
                        </li> */}
                    </ul>
                </nav>
                    <div className="news-catalog__wrapper">
                        {
                            news?.map((element, index) => {
                                return (
                                    <div key={index} className="news-catalog__item" data-category="new">
                                    <div className="news-catalog__item-img">
                                        <img src={element.image} alt="" />
                                    </div>
                                    <p className="news-catalog__item-date">{element.date}</p>
                                    <p className="news-catalog__item-title">{element.title}</p>
                                    <p className="news-catalog__item-text">

                                    </p>
                                    <a href="#" className="news-catalog__item-link">Читать полностью</a>
                                </div>
                                )
                            })
                        }

                </div>
                {/* <div className="pagination">
                    <div className="pagination__wrapper">
                        <button className="pagination__prev">
                            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.15991 1.41L3.57991 6L8.15991 10.59L6.74991 12L0.749912 6L6.74991 0L8.15991 1.41Z" fill="#202123"/>
                            </svg>                                    
                        </button>
                        <ul className="pagination__list">
                            <li className="pagination__list-item is-active"><a href="#">1</a></li>
                            <li className="pagination__list-item"><a href="#">2</a></li>
                            <li className="pagination__list-item"><a href="#">3</a></li>
                            <li className="pagination__list-item"><a href="#">4</a></li>
                            <li className="pagination__list-item"><a href="#">5</a></li>
                        </ul>
                        <button className="pagination__next">
                            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.840088 1.41L5.42009 6L0.840088 10.59L2.25009 12L8.25009 6L2.25009 0L0.840088 1.41Z" fill="#202123"/>
                            </svg>                                    
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
        </div>
        
    )
}

export default NewsCatalog

export const getServerSideProps = async (context) => {

    const newsResponse = (await axios.get("https://trade-group.su/apinews")).data
    return {
        props: {
            news: newsResponse ? newsResponse : []
        }
    }
}