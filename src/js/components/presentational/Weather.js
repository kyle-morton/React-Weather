import React from "react";
import Title from "./Title";
import Icon from "./Icon";
import Temperature from "./Temperature";


const Weather = ({day, index}) => {
    var classNames = 'col-lg-1 col-md-1 col-sm-3 col-xs-4 weather-column';
    if (index === 0)
        classNames += ' col-lg-offset-2 col-md-offset-2';
    return(
        <div className={classNames}>
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