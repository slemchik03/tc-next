export const CheckBoxFilter = ({name, id}) => {
    return (
        <div className="cat-filter__engine">
        <p className="cat-filter__engine-title">{name}</p>

        <div className="cat-filter__engine-content">
            <div className="cat-filter__engine-item">
                <input  id="cat-engine-petrol-gas" className="cat-filter__radio" type="checkbox" />
                <label className="cat-filter__label" htmlFor="cat-engine-petrol-gas">{name}</label>
            </div>
        </div>

    </div>
    )
}