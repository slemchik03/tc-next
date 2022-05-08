import { CheckBoxFilter } from "./CheckBoxFilter"
import { IntervalFilter } from "./IntervalFilter"

export const DefaultFilters = ({register, setIntervalValues, intervalValues, dark}) => {
    return (
        <>
            <CheckBoxFilter 
            filterItem={{
                property_id: "13",
                name: "Тип двигателя",
                values: [
                "Дизельный",
                "Бензин/газ",
                "Электрический"
                ]
            }} 
            register={register}
            dark={dark}
            />
            <IntervalFilter 
                filterItem={{name: "Грузоподъемность", property_id: "3", values: [1000, 48000]}}
                setIntervalValues={setIntervalValues}
                intervalValues={intervalValues}
                dark={dark}
            />
            <IntervalFilter 
                filterItem={{name: "Высота подъема", property_id: "5", values: [2, 4]}}
                setIntervalValues={setIntervalValues}
                intervalValues={intervalValues}
                dark={dark}
            />

        </>
    )
}