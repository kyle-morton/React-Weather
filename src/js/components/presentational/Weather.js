import React from "react";
import Title from "./Title";
import Icon from "./Icon";
import Temperature from "./Temperature";


const Weather = ({day}) => {
    return(
        <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
            <Title 
                dayOfWeek={day.day}
                />
            <Icon
                weather={day.weather}
                />
            <Temperature 
                highTemp={day.highTemp}
                lowTemp={day.lowTemp}
            />
        </div>
    );
};

export default Weather;