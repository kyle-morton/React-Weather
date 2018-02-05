import React from "react";
import Weather from "./Weather";
import PropTypes from 'prop-types';

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

WeatherList.propTypes = {
    days: PropTypes.array.isRequired
};

export default WeatherList;