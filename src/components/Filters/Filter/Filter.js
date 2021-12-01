import React, {useState, useEffect} from 'react';
import cl from "classnames";
import './Filter.scss';
import FilterSelect from "../FilterSelect/FilterSelect";

function Filter({ title, options, onAddFilter }) {
    const [filter, setFilter] = useState();

    function handleAddFilterValue(value) {
        setFilter({name: title, value: value});
    }

    useEffect(() => {
        if (filter && filter.name) {
            onAddFilter(filter);
        }
    }, [filter]);

    return (
        <div className={cl('filter')}>
            <div className={'filter-title'}>{title}</div>
            <div className={cl('filter-data')}>
                <FilterSelect onAddFilterValue={handleAddFilterValue} options={options}/>
            </div>
        </div>
    );
}

export default Filter;
