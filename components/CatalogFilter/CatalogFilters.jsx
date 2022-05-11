import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckBoxFilter } from "./CheckBoxFilter";
import { DefaultFilters } from "./DefaultFilters";
import { IntervalFilter } from "./IntervalFilter";

export const CatalogFilters = ({filtersList}) => {
    const {register, handleSubmit} = useForm()
    const router = useRouter()
    const [intervalValues, setIntervalValues] = useState({}) 

    const resetInterval = () => {
        setIntervalValues({})
    }
    const initialFilters = router.query["filters"] ? router.query["filters"] : ""
    const submitHandler = data => {
        const path = Object.entries({...data, ...intervalValues})
        .filter(el => el[1] !== false)
        .map(el => `${el[0]}-${el[1]}`)
        .join(';') 

        resetInterval()
        router.push({href: router.pathname, query: {...router.query, filters: path, quickLink: ""}})
    }

    return (
            <form onSubmit={handleSubmit(submitHandler)} className="cat-filter__form">
            <div className="cat-filter__inner">

                {
                   initialFilters ? filtersList?.map(item => {
                        if (item.filter_type === "checkboxes") {
                            return <CheckBoxFilter 
                                filterItem={item} 
                                register={register} 
                                key={item.name}
                                dark
                            />
                        }
                        if (item.filter_type === "interval") {
                            return <IntervalFilter 
                                intervalValues={intervalValues} 
                                setIntervalValues={setIntervalValues} 
                                filterItem={item} 
                                key={item.name} 
                                dark
                            />
                        } }) : <DefaultFilters
                                    intervalValues={intervalValues} 
                                    setIntervalValues={setIntervalValues} 
                                    register={register}
                                    dark
                                />

                }

            </div>

            <div className="cat-filter__btns">
                <button type="submit" className="cat-filter__show">Показать</button>
                <button onClick={resetInterval} type="reset" className="cat-filter__reset">Сбросить фильтры</button>
            </div>
        </form>
    )
}