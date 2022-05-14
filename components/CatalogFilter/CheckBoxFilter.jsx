import { useRouter } from "next/router";

export const CheckBoxFilter = ({filterItem, register, dark}) => {
    const {
        name,
        property_id,
        values
    } = filterItem

    const router = useRouter()
    const filtersQuery = router.query["filters"]?.split(";").filter(el => el?.includes(property_id))[0]

    return (
        <div className="cat-filter__engine">
        <p className="cat-filter__engine-title" style={{color: dark ? "#fff" : "#000"}}>{name}</p>

        <div className="cat-filter__engine-content">
            {
                values.map(value => {
                    return (
                    <div key={value} className="cat-filter__engine-item">
                        <input {...register(property_id + "")} value={value} defaultChecked={filtersQuery?.includes(value+"")} className="cat-filter__radio" type="checkbox" />
                        <label  className="cat-filter__label" style={{color: dark ? "#fff" : "#000"}} htmlFor="cat-engine-petrol-gas">{value}</label>
                    </div>
                    )
                })
            }
        </div>

    </div>
    )
}