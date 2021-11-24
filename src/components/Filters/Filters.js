import React from 'react';
import cl from "classnames";
import './Filters.scss';
import Filter from "./Filter/Filter";

function Filters(props) {
    const {filters} = props;

    return (
        <div className={cl('filters')}>
            {
                filters.map(filter =>
                    <Filter title={filter.title} data={filter.data} />
                )
            }
        </div>
    );
}

export default Filters;
