import React, { useState } from 'react';
import cl from "classnames";
import './Courses.scss';
import { useAuth } from "../../context/AuthContext";
import Filters from "../Filters/Filters";
import CoursesCards from "./CoursesCards/CoursesCards";
import {CheckFilters} from "../../App.utils";

function Courses() {
    const { isAuthenticated } = useAuth();
    const [filters, setFilters] = useState([]);

    function handleFilterAdd(newFilter) {
        let newFilters = CheckFilters(filters, newFilter);
        setFilters(newFilters);
    }

    function handleFiltersClear() {
        setFilters([]);
    }

    return (
        <div className={cl('courses')}>
            <div className={cl('courses-search')}>
                <input className="input" placeholder='Искать курс...'/>
                <button className="btn" type="button">
                    Искать
                </button>
            </div>
            <div className={cl('courses-content')}>
                <Filters onClearFilters={handleFiltersClear}  filters={filters} onAddFilter={handleFilterAdd}/>
                <CoursesCards filters={filters} />
            </div>
        </div>
    );
}

export default Courses;
