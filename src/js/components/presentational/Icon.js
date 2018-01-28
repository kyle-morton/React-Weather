import React from "react";

const renderIcon = (weather) => {
    switch(weather){
        case 'Cloudy':
            return <i className="fa fa-cloud"/>;
        case 'Sunny':
        default: 
            return <i className="fa fa-sun-o"/>; 
    }
};

const Icon = ({weather}) => {
    return(
        <div className="row">
            <div className="col-xs-12">
                {renderIcon(weather)}
            </div>
        </div>
    );
};

export default Icon;