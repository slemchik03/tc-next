export const IntervalFilter = ({name, id}) => {
    return (
        <div className="cat-filter__liftingheight">

            <p className="cat-filter__liftingheight-title">{name}</p>
            <div className="cat-filter__liftingheight-slider" id="cat-liftingheight-range-slier"></div>
            <div className="cat-filter__liftingheight-inputs">
                <label className="cat-filter__liftingheight-label">
                    <span className="cat-filter__liftingheight-label-text">От</span>
                    <input type="number" placeholder="1000" className="cat-filter__liftingheight-input" id="cat-liftingheight-input-0" />
                </label>
                <label className="cat-filter__liftingheight-label">
                    <span className="cat-filter__liftingheight-label-text">До</span>
                    <input type="number" placeholder="48000" className="cat-filter__liftingheight-input" id="cat-liftingheight-input-1" />
                </label>
            </div>
        </div>
    )
}