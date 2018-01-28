import React from "react";
import Weather from "./Weather";

const WeatherList = ({days}) => {
    const forecastDays = days.map((day) => {
        return(
            <Weather 
                day={day}
                key={day.key}
            />
        )
    });
    return(
        <div className="row">
            {forecastDays}
        </div>
    );
};

export default WeatherList;