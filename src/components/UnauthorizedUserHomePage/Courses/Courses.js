import React from 'react';
import cl from "classnames";
import './Courses.scss';
import CoursesCard from "./CoursesCard/CoursesCard";
import {colours, courses, coursName, longCoursName} from "../../../App.const";
import {randomInteger} from "../../../App.utils";

function Courses() {
    return (
        <div className={cl('courses')}>
            {/*<div className={cl('courses-header')}><h1>Доступные курсы</h1></div>*/}
            <div className={cl('courses-search')}>
                <input className="input" placeholder='Искать курс...'/>
                <button className="btn" type="button">
                    Искать
                </button>
            </div>
            <div className={cl('courses-cards')}>
                {
                    courses
                        .map((cours, i) => {
                            let item = randomInteger(4);
                                return <CoursesCard cours={cours} colour={colours[item]}/>;
                            }
                        )
                }
            </div>
        </div>
    );
}

export default Courses;
