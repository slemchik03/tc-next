export const CheckBoxFilter = ({name, id, register}) => {
    return (
        <div className="cat-filter__engine">
        <p className="cat-filter__engine-title">{name}</p>

        <div className="cat-filter__engine-content">
            <div className="cat-filter__engine-item">
                <input {...register(id + "")} className="cat-filter__radio" type="checkbox" />
                <label className="cat-filter__label" htmlFor="cat-engine-petrol-gas">{name}</label>
            </div>
        </div>

    </div>
    )
}