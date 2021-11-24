import React from 'react';
import cl from "classnames";
import './FilterSelect.scss';

// компонент пользовательского выпадающего списка
const FilterSelect = ({ options, onChange }) => {
    return (
        <select className={cl('filter-select', 'input')} onChange={onChange}>
            { options.map((option, index) =>
                <option key={index} value={''}>{option}</option>
            ) }
        </select>
    )
}

export default FilterSelect;
