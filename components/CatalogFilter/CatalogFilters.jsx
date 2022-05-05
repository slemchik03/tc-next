import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CheckBoxFilter } from "./CheckBoxFilter";
import { DefaultFilters } from "./DefaultFilters";
import { IntervalFilter } from "./IntervalFilter";

export const CatalogFilters = ({filters, category, currentPage, initialFilters}) => {
    const {register, handleSubmit} = useForm()
    const router = useRouter()


    const submitHandler = data => {
        const path = Object.entries(data).map((el) => {
            return `${el[0]}-${el[1]}`
        }).join(';') 

        router.push(
        `/catalog?categories=${category}&filters=${path}&page=${currentPage}`
        )
    }

    return (
            <form onSubmit={handleSubmit(submitHandler)} className="cat-filter__form">
            <div className="cat-filter__inner">

                {
                   initialFilters ? filters?.map(item => {
                        if (item.filter_type === "checkboxes") {
                            return <CheckBoxFilter register={register} id={item.id} key={item.name} name={item.name}/>
                        }
                        return <IntervalFilter id={item.id} register={register} key={item.name} name={item.name}/>
                    }) : <DefaultFilters register={register} />
                }

            </div>

            <div className="cat-filter__btns">
                <button type="submit" className="cat-filter__show">Показать</button>
                <button type="reset" className="cat-filter__reset">Сбросить фильтры</button>
            </div>
        </form>
    )
}