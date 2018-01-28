import React from "react";


const Temperature = ({highTemp, lowTemp}) => {
    return(
        <div className="row">
            <div className="col-xs-12">
                <div className="high-temp">
                    {highTemp}<i>&deg;</i>
                </div>
                <div className="low-temp light-gray">
                    {lowTemp}<i>&deg;</i>
                </div>
            </div>
        </div>
    );
};

export default Temperature;