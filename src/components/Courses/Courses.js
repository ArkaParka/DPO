import React from 'react';
import cl from "classnames";
import './Courses.scss';
import CoursesCard from "./CoursesCard/CoursesCard";
import {colours, courses } from "../../App.const";
import {randomInteger} from "../../App.utils";

function Courses() {
    return (
        <div className={cl('courses')}>
            <div className={cl('courses-search')}>
                <input className="input" placeholder='Искать курс...'/>
                <button className="btn" type="button">
                    Искать
                </button>
            </div>
            <div className={cl('courses-cards')}>
                {
                    courses
                        .map((course, i) => {
                            let item = randomInteger(4);
                                return <CoursesCard course={course} colour={colours[item]} key={i} />;
                            }
                        )
                }
            </div>
        </div>
    );
}

export default Courses;
