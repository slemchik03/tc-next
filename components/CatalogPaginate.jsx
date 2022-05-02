import { useRouter } from "next/router"
import {  useState } from "react"


const repeat = (n, callback) => {
    const res = []
    for (let i = 0; i < n - 1; i++) {
        res.push(callback(i))
    }
    return res
}

export const CatalogPaginate = ({pagesCount, currentPage, category}) => {
    const router = useRouter()

    const clickBtnPrevHandler = () => {
        if (currentPage - 1 > 0) {
            router.push(`/catalog?categories=${category}&page=${+currentPage-1}`)
        }
    }

    const clickBtnNextHandler = () => {
        if (currentPage + 1 <= pagesCount) {
            router.push(`/catalog?categories=${category}&page=${+currentPage+1}`)
        }
    }

    const clickPaginateHandler = (page) => {
        router.push(`/catalog?categories=${category}&page=${page}`)
    }

    return (
            <div className="cat-pagination">
            <div className="cat-pagination__wrapper">
                <button onClick={clickBtnPrevHandler} className="cat-pagination__prev">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.15991 1.41L3.57991 6L8.15991 10.59L6.74991 12L0.749912 6L6.74991 0L8.15991 1.41Z" fill="#202123"/>
                    </svg>                                    
                </button>
                <ul className="cat-pagination__list">
                    {
                        repeat(pagesCount, (index) => {
                            return (
                                <li key={index} onClick={() => clickPaginateHandler(index + 1)} className={`cat-pagination__list-item ${index + 1 == currentPage ? "is-active" : ""}`}>
                                    <a href="#">{index + 1}</a>
                                </li>
                            )
                        }).slice(+currentPage - 1, +currentPage + 4)
                    }
                </ul>
                <button onClick={clickBtnNextHandler} className="cat-pagination__next">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.840088 1.41L5.42009 6L0.840088 10.59L2.25009 12L8.25009 6L2.25009 0L0.840088 1.41Z" fill="#202123"/>
                    </svg>                                    
                </button>
            </div>
        </div>
    )
}