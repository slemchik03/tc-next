import { useRef } from "react";
import { Range } from "react-range";


export const IntervalFilter = ({filterItem, setIntervalValues, intervalValues, dark}) => {
    const {
        name,
        property_id,
        values
    } = filterItem

    const intervalMin = isFinite(intervalValues[`${property_id}-interval-min`]) ? 
        intervalValues[`${property_id}-interval-min`] : 
        values[0]


    const intervalMax = isFinite(intervalValues[`${property_id}-interval-max`]) ? 
        intervalValues[`${property_id}-interval-max`] : 
        values[1]

    const inputRefs = [useRef(null), useRef(null)]
    const inputChangeHandler = (value, index) => {
        if (value <= values[1] && value >= 0) {
            setIntervalValues({
                ...intervalValues, 
                [`${property_id}-interval-${index ? "max" : "min"}`]: +value,
            })
        }
    }

    return (
        <div className="cat-filter__liftingheight">

            <p className="cat-filter__liftingheight-title" style={{color: dark ? "#fff" : "#000"}}>{name}</p>
            <div className="cat-filter__liftingheight-slider" id="cat-liftingheight-range-slier"></div>
            <div className="cat-filter__liftingheight-inputs">
            <Range
                values={[
                   intervalMin,
                   intervalMax
                ]}
                min={values[0]}
                max={values[1]}
                onChange={(currentValues) => {
                    setIntervalValues({
                        ...intervalValues, 
                        [`${property_id}-interval-min`]: currentValues[0],
                        [`${property_id}-interval-max`]: currentValues[1],
                    })
                }}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '100%'
                        }}
                    >
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            backgroundColor: dark ? "gray" : "#34495e"
                        }}
                    >
                        {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, value, index }) => (
                <div
                    {...props}
                    style={{
                    ...props.style,
                    height: '22px',
                    width: '22px',
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    display: "flex",
                    justifyContent: "center"
                    }}
                >
                    <input 
                        style={{
                            position: "absolute",
                            bottom: "-20px",
                            color: dark ? "#fff" : "black",
                            fontSize: "14px",
                            background: "none",
                            textAlign: "center",
                            border: "none",
                            outline: "none",
                            zIndex: "99999"

                        }}
                        ref={inputRefs[index]}
                        onClick={() => {inputRefs[index]?.current?.focus()}}
                        onChange={(values[1] >= 100) ? ((e) => inputChangeHandler(e.target.value, index)) : () => ""}
                        value={value} 
                    />
                        
                </div>
                )}
            />
            </div>
        </div>
    )
}