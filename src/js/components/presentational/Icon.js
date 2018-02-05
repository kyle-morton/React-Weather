import React from "react";
import PropTypes from 'prop-types';

const Icon = ({src, title}) => {
    return(
        <div className="row">
            <div className="col-xs-12">
                <img src={src} title={title}/>
            </div>
        </div>
    );
};

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Icon;