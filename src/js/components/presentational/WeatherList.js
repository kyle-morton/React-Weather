import React from "react";
import Weather from "./Weather";

const WeatherList = ({days}) => {
    const forecastDays = days.map((day, index) => {
        return(
            <Weather 
                day={day}
                key={day.key}
                index={index}
            />
        )
    });
    return(
        <div className="row text-center">
            {forecastDays}
        </div>
    );
};

export default WeatherList;