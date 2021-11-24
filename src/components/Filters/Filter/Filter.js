import React from 'react';
import cl from "classnames";
import './Filter.scss';
import FilterSelect from "../FilterSelect/FilterSelect";

function Filter(props) {
    const { title, data } = props;

    return (
        <div className={cl('filter')}>
            <div className={'filter-title'}>{title}</div>
            <div className={cl('filter-data')}>
                <FilterSelect options={data}/>
            </div>
        </div>
    );
}

export default Filter;
