import React from "react";

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

export default Title;