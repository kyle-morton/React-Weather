import React from "react";
import PropTypes from 'prop-types';

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

Temperature.propTypes = {
    highTemp: PropTypes.number.isRequired,
    lowTemp: PropTypes.number.isRequired
};

export default Temperature;