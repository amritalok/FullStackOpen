import React from "react";

const StatLine = ({text, value}) => {
    return(
        <div>
            <p>{text} {value}</p>
        </div>
    )
}

export default StatLine;