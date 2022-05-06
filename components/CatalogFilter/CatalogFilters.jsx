import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CheckBoxFilter } from "./CheckBoxFilter";
import { DefaultFilters } from "./DefaultFilters";
import { IntervalFilter } from "./IntervalFilter";

export const CatalogFilters = ({filters, category, currentPage, initialFilters}) => {
    const {register, handleSubmit} = useForm()
    const router = useRouter()


    const submitHandler = data => {
        const path = Object.entries(data)
        .filter(el => el[1] !== false)
        .map(el => `${el[0]}-${el[1]}`)
        .join(';') 
        console.log(path);
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
                            return <CheckBoxFilter filterItem={item} register={register}  key={item.name} />
                        }
                        return <IntervalFilter filterItem={item} register={register} key={item.name} />
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