import React from 'react';
import cl from "classnames";
import './Courses.scss';
import {colours, courses, coursesFilters} from "../../App.const";
import {useAuth} from "../../context/AuthContext";
import Filters from "../Filters/Filters";
import CoursesCards from "./CoursesCards/CoursesCards";

function Courses() {
    const { isAuthenticated } = useAuth();

    return (
        <div className={cl('courses')}>
            <div className={cl('courses-search')}>
                <input className="input" placeholder='Искать курс...'/>
                <button className="btn" type="button">
                    Искать
                </button>
            </div>
            <div className={cl('courses-content')}>
                { isAuthenticated && <Filters filters={coursesFilters}/> }
                <CoursesCards />
            </div>
        </div>
    );
}

export default Courses;
