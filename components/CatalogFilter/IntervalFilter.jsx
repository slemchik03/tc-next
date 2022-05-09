/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Range } from "react-range";

export const IntervalFilter = ({filterItem, setIntervalValues, intervalValues, dark}) => {
    const {
        name,
        property_id,
        values
    } = filterItem

    const intervalMin = intervalValues[`${property_id}-interval-min`] ? 
        intervalValues[`${property_id}-interval-min`] : 
        values[0]


    const intervalMax = intervalValues[`${property_id}-interval-max`] ? 
        intervalValues[`${property_id}-interval-max`] : 
        values[1]


    useEffect(() => {
        setIntervalValues({
            ...intervalValues, 
            [`${property_id}-interval-min`]: values[0],
            [`${property_id}-interval-max`]: values[1],
        })
    }, [])

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
                onChange={(values) => {
                    setIntervalValues({
                        ...intervalValues, 
                        [`${property_id}-interval-min`]: values[0],
                        [`${property_id}-interval-max`]: values[1],
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
                renderThumb={({ props, value }) => (
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
                    <p style={{
                        position: "absolute",
                        bottom: "-20px",
                        color: dark ? "#fff" : "black",
                        fontSize: "14px",
                    }}>
                        {value}
                    </p>
                </div>
                )}
            />
            </div>
        </div>
    )
}