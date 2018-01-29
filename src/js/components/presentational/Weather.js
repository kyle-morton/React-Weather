import React from "react";
import Title from "./Title";
import Icon from "./Icon";
import Temperature from "./Temperature";


const Weather = ({day}) => {
    return(
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4 weather-column">
            <Title 
                dayOfWeek={day.dayOfWeek}
                />
            <Icon
                src={day.icon}
                title={day.iconTitle}
                />
            <Temperature 
                highTemp={day.highTemp}
                lowTemp={day.lowTemp}
            />
        </div>
    );
};

export default Weather;