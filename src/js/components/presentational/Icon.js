import React from "react";

const Icon = ({src, title}) => {
    return(
        <div className="row">
            <div className="col-xs-12">
                <img src={src} title={title}/>
            </div>
        </div>
    );
};

export default Icon;