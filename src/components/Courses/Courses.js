import React, { useState } from 'react';
import cl from "classnames";
import './Courses.scss';
import CoursesCards from "./CoursesCards/CoursesCards";
import {AddNewFilter} from "../../App.utils";
import Button from "@mui/material/Button";

function Courses() {
    const [filters, setFilters] = useState([]);

    function handleFilterAdd(newFilter) {
        if (newFilter.target) {
            newFilter = {
                name: 'Специальность',
                value: newFilter.target.value,
            };
        }

        let newFilters = AddNewFilter(filters, newFilter);
        setFilters(newFilters);
    }

    // function handleFiltersClear() {
    //     setFilters([]);
    // }

    return (
        <div className={cl('courses')}>
            <div className={cl('courses-search')}>
                <input className={cl('input')} onChange={handleFilterAdd}  placeholder='Искать курс...'/>
                <Button
                    className={cl('find-course-btn', 'btn')}
                    variant="contained"
                >
                    Искать
                </Button>
            </div>
            <div className={cl('courses-content')}>
                {/*<Filters onClearFilters={handleFiltersClear}  filters={filters} onAddFilter={handleFilterAdd}/>*/}
                <CoursesCards filters={filters} />
            </div>
        </div>
    );
}

export default Courses;
