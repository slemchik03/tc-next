export const IntervalFilter = ({filterItem, register}) => {
    const {
        name,
        property_id,
        values
    } = filterItem
    return (
        <div className="cat-filter__liftingheight">

            <p className="cat-filter__liftingheight-title">{name}</p>
            <div className="cat-filter__liftingheight-slider" id="cat-liftingheight-range-slier"></div>
            <div className="cat-filter__liftingheight-inputs">
                <label className="cat-filter__liftingheight-label">
                    <span className="cat-filter__liftingheight-label-text">От</span>
                    <input {...register(`${property_id}-interval-min`)} type="number" defaultValue={values[0]} min={values[0]} max={values[1]} className="cat-filter__liftingheight-input" id="cat-liftingheight-input-0" />
                </label>
                <label className="cat-filter__liftingheight-label">
                    <span className="cat-filter__liftingheight-label-text">До</span>
                    <input {...register(`${property_id}-interval-max`)} type="number" defaultValue={values[1]} min={values[0]} max={values[1]}  className="cat-filter__liftingheight-input" id="cat-liftingheight-input-1" />
                </label>
            </div>
        </div>
    )
}