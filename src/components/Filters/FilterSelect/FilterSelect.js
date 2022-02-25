import React from 'react';
import cl from "classnames";
import './FilterSelect.scss';

// компонент пользовательского выпадающего списка
const FilterSelect = ({ options, onAddFilterValue }) => {
    function onChange(e) {
        onAddFilterValue(e.target.value);
    }

    return (
        <select className={cl('filter-select', 'input')} onChange={onChange}>
            { options.map((option, index) =>
                <option key={index}>{option}</option>
            ) }
        </select>
    )
}

export default FilterSelect;
