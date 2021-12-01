import React from 'react';
import cl from "classnames";
import {colours, courses as coursesList} from "../../../App.const";
import {randomInteger, SortByFilters} from "../../../App.utils";
import CoursesCard from "../CoursesCard/CoursesCard";

function CoursesCards({filters}) {
    let courses = SortByFilters(coursesList, filters);

    return (
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
    );
}

export default CoursesCards;
