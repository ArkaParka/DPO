import React, {useEffect, useState} from 'react';
import cl from "classnames";
import './Courses.scss';
import CoursesCards from "./CoursesCards/CoursesCards";
import {AddNewFilter} from "../../App.utils";
import Button from "@mui/material/Button";
import Filters from "../Filters/Filters";
import {Link} from "react-router-dom";
import {Dropdown, DropdownButton} from "react-bootstrap";

function Courses() {
    const [filters, setFilters] = useState([]);

    function addNewFilter(newFilter) {
        if (newFilter.target) {
            let specialityFilter = newFilter.target.id;
            let nameFilter = newFilter.target.value;

            if (specialityFilter) {
                newFilter = {
                    name: 'Специальность',
                    value: specialityFilter,
                };
            } else {
                newFilter = {
                    name: 'Имя',
                    value: nameFilter,
                };
            }
        }

        let newFilters = AddNewFilter(filters, newFilter);
        setFilters(newFilters);
    }

    function handleFiltersClear() {
        setFilters([]);
    }

    return (
        <div className={cl('courses')}>
            <div className={cl('courses-search')}>
                <input className={cl('input')} onChange={addNewFilter}  placeholder='Искать курс...'/>
                <DropdownButton
                    className={cl('filters-btn', 'btn')}
                    id="dropdown-basic-button"
                    title="Специальность"
                    onSelect={(event, filter) => addNewFilter(filter)}
                >
                    <Dropdown.Item href="#/all" id='all'>Все</Dropdown.Item>
                    <Dropdown.Item href="#/graphics" id='graphics'>Графика</Dropdown.Item>
                    <Dropdown.Item href="#/web" id='web'>Веб</Dropdown.Item>
                    <Dropdown.Item href="#/net" id='сети'>Сети</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className={cl('courses-content')}>
                <CoursesCards filters={filters} />
            </div>
        </div>
    );
}

export default Courses;
