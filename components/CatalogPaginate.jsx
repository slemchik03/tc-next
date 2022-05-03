import { useRouter } from "next/router"


const repeat = (n, callback) => {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(callback(i))
    }
    return res
}

export const CatalogPaginate = ({pagesCount, currentPage, uri}) => {
    const router = useRouter()

    const clickBtnPrevHandler = () => {
        if (currentPage - 1 >= 0) {
            const uriItems = uri.split("&")
            uriItems[uriItems.length - 1] = `page=${+currentPage-1}`
            const newUri = uriItems.join("&")
            
            router.push(newUri)
        }
    }

    const clickBtnNextHandler = () => {
        if (currentPage + 1 <= pagesCount) {
            const uriItems = uri.split("&")
            uriItems[uriItems.length - 1] = `page=${+currentPage+1}`
            const newUri = uriItems.join("&")
            
            router.push(newUri)
        }
    }

    const clickPaginateHandler = (page) => {
        const uriItems = uri.split("&")
        uriItems[uriItems.length - 1] = `page=${page}`
        const newUri = uriItems.join("&")
        
        router.push(newUri)
    }

    const paginateCalc = Math.ceil(currentPage / 10) - 1
    const paginateOffset = paginateCalc >= 0 ? paginateCalc : 0

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
                                <li key={index} onClick={() => clickPaginateHandler(index)} className={`cat-pagination__list-item ${index == currentPage ? "is-active" : ""}`}>
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