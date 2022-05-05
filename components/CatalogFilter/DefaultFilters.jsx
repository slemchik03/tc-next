export const DefaultFilters = ({register}) => {
    return (
        <>
            <div className="cat-filter__liftingheight">

                <p className="cat-filter__liftingheight-title">Грузоподъемность</p>
                <div className="cat-filter__liftingheight-slider" id="cat-liftingheight-range-slier"></div>
                <div className="cat-filter__liftingheight-inputs">
                    <label className="cat-filter__liftingheight-label">
                        <span className="cat-filter__liftingheight-label-text">От</span>
                        <input {...register(`3-interval-min`)} type="number" className="cat-filter__liftingheight-input" id="cat-liftingheight-input-0" />
                    </label>
                    <label className="cat-filter__liftingheight-label">
                        <span className="cat-filter__liftingheight-label-text">До</span>
                        <input {...register(`3-interval-max`)} type="number"  className="cat-filter__liftingheight-input" id="cat-liftingheight-input-1" />
                    </label>
                </div>
            </div>
            <div className="cat-filter__liftingheight">

                <p className="cat-filter__liftingheight-title">Высота подъема</p>
                <div className="cat-filter__liftingheight-slider" id="cat-liftingheight-range-slier"></div>
                <div className="cat-filter__liftingheight-inputs">
                    <label className="cat-filter__liftingheight-label">
                        <span className="cat-filter__liftingheight-label-text">От</span>
                        <input {...register(`5-interval-min`)} type="number" className="cat-filter__liftingheight-input" id="cat-liftingheight-input-0" />
                    </label>
                    <label className="cat-filter__liftingheight-label">
                        <span className="cat-filter__liftingheight-label-text">До</span>
                        <input {...register(`5-interval-max`)} type="number"  className="cat-filter__liftingheight-input" id="cat-liftingheight-input-1" />
                    </label>
                </div>
            </div>
            <div className="cat-filter__engine">
                <p className="cat-filter__engine-title">Тип двигателя</p>

                <div className="cat-filter__engine-content">
                    <div className="cat-filter__engine-item">
                        <input {...register("13")} value="Бензин / газ" className="cat-filter__radio" type="checkbox" />
                        <label className="cat-filter__label" htmlFor="cat-engine-petrol-gas">Бензин / газ</label>
                    </div>
                    <div className="cat-filter__engine-item">
                        <input {...register("13")} value="Дизельный" className="cat-filter__radio" type="checkbox" />
                        <label className="cat-filter__label" htmlFor="cat-engine-petrol-gas">Дизельный</label>
                    </div>
                    <div className="cat-filter__engine-item">
                        <input {...register("13")} value="Электрический" className="cat-filter__radio" type="checkbox" />
                        <label className="cat-filter__label" htmlFor="cat-engine-petrol-gas">Электрический</label>
                    </div>
                </div>
            </div>
        </>
    )
}