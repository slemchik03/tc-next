export const CheckBoxFilter = ({filterItem, register}) => {
    const {
        name,
        property_id,
        values
    } = filterItem

    return (
        <div className="cat-filter__engine">
        <p className="cat-filter__engine-title">{name}</p>

        <div className="cat-filter__engine-content">
            {
                values.map(value => {
                    return (
                    <div key={value} className="cat-filter__engine-item">
                        <input {...register(property_id + "")} value={value} className="cat-filter__radio" type="checkbox" />
                        <label className="cat-filter__label" htmlFor="cat-engine-petrol-gas">{value}</label>
                    </div>
                    )
                })
            }
        </div>

    </div>
    )
}