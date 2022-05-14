import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const repeat = (n, callback) => {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(callback(i))
    }
    return res
}


export const CatalogPaginate = ({pagesCount}) => {
    const router = useRouter()
    const [page, setPage] = useState()

    useEffect(() => {
        setPage(router.query["page"])
    }, [router.query])

    const clickBtnPrevHandler = () => {
        if (page - 1 >= 0) {
            const newPage = page - 1
            setPage(newPage)
            router.push({href: router.pathname, query: {...router.query, page: newPage}})
        }
    }

    const clickBtnNextHandler = () => {
        if (page + 1 < pagesCount) {
            const newPage = +page + 1
            setPage(newPage)
            router.push({href: router.pathname, query: {...router.query, page: newPage}})
        }
    }

    const clickPaginateHandler = (page) => {
        setPage(page)
        router.push({href: router.pathname, query: {...router.query, page}})
    }

    const paginateOffsetCalc = page % 10 === 0 ? Math.ceil(page / 10) : Math.ceil(page / 10) - 1
    const paginateOffset = paginateOffsetCalc >= 0 ? paginateOffsetCalc : 0

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
                                <li key={index} onClick={() => clickPaginateHandler(index)} className={`cat-pagination__list-item ${index == +page ? "is-active" : ""}`}>
                                    <a href="#">{index + 1}</a>
                                </li>
                            )
                        }).slice((paginateOffset * 10), (paginateOffset * 10) + 10)
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