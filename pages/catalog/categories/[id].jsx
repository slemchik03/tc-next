import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function CategoriesList({goods, id}) {
    const router = useRouter()
    return (
        <div>
        <div className="requests">
      <div className="container">
          <div className="breadcrumbs">
              <div className="breadcrumbs__block-white">
              <Link href="/" ><a className="breadcrumbs__item-white">Главная</a></Link>
              </div>
              <div className="breadcrumbs__block">
                  <span className="breadcrumbs__item">Категории</span>
              </div>
          </div>
      </div>
  </div>

  <div className="catalog">
      <div className="container">
          <div className="catalog__wrapper">
              {
                  goods.map((element, index) => {
                      return (
                        <div key={index} className="catalog__item">
                        <div className="catalog__item-img">
                            <Image width="384px" height="256px" src={element["image"]} alt="" />
                        </div>
                        <div className="catalog__item-favorite-btn" style={{visibility: "hidden"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="gray"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                        </div>
                        <div className="catalog__item-title">{element.name}</div>
                        <div className="catalog__item-info">

                        </div>
                        <div className="catalog__item-btns">
                            <a onClick={() => router.push(`/catalog/${element.slug}`)} className="catalog__item-more-btn">Подробнее</a>
                            <button onClick={() => router.push(`/catalog/categories/${element["id"]}?prevId=${id}`)} className="catalog__item-btn">Перейти</button>
                        </div>
                    </div>
                      )
                  })
                  
              }

          </div>

      </div>
    </div>
      </div>
    )
} 

export const getServerSideProps = async (context) => {

    const {params, query} = context
    const id = params["id"]
    const prevId = query["prevId"]
    const categoriesResponse = (await axios.get(`https://trade-group.su/apicategories?parent=${id}`)).data

    if (!categoriesResponse?.length) {
        return {           
            redirect: {
                permanent: false,
                destination: `/catalog?categories=${`${prevId},${+prevId+1}`}&page=0`,
            }
        }
    }

    return {
        props: {
            goods: categoriesResponse,
            id: +id
        }
    }
}