import React from 'react';
import cl from "classnames";
import './Filters.scss';
import Filter from "./Filter/Filter";
import { coursesFilters as filtersConfig } from "../../App.const";

function Filters({ onAddFilter, filters, onClearFilters }) {
    return (
        <div className={cl('filters')}>
            {
                filtersConfig.map((filter, i) => {
                    return <Filter selectedFilters={filters} onAddFilter={onAddFilter} key={i} title={filter.title} options={filter.options} />;
                })
            }
            <div className={cl('filters-btn')}>
                <button className={cl('btn')} onClick={() => onClearFilters()}>Сбросить фильтры</button>
            </div>
        </div>
    );
}

export default Filters;
