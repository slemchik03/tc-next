import { useForm } from "react-hook-form";
import { CheckBoxFilter } from "./CheckBoxFilter";
import { IntervalFilter } from "./IntervalFilter";

export const CatalogFilters = ({filters}) => {
    const {register, handleSubmit} = useForm()

    const submitHandler = data => {
        // отправляем запрос...
    }

    return (
            <form className="cat-filter__form">
            <div className="cat-filter__inner">

                {
                    filters?.map(item => {
                        if (item.filter_type === "checkboxes") {
                            return <CheckBoxFilter key={item.name} name={item.name}/>
                        }
                        return <IntervalFilter key={item.name} name={item.name}/>
                    })
                }

            </div>

            <div className="cat-filter__btns">
                <button className="cat-filter__show">Показать</button>
                <button className="cat-filter__reset">Сбросить фильтры</button>
            </div>
        </form>
    )
}