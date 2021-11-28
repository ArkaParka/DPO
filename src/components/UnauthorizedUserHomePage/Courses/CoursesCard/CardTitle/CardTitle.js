import cl from "classnames";
import React, {useState} from "react";
function CardTitle(props) {
    const {coursName} = props;

    return (
        <div className={cl('card-header')}>
            <h3>{coursName}</h3>
        </div>
    );
}

export default CardTitle;
