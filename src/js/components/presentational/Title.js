import React from "react";
import PropTypes from 'prop-types';

const Title = ({dayOfWeek}) => {
    return(
        <div>
            <strong className="light-gray">
                {dayOfWeek}
            </strong>
            <br />
        </div>
    );
};

Title.propTypes = {
    dayOfWeek: PropTypes.string.isRequired
};

export default Title;