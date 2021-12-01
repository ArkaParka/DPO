import React from 'react';
import cl from "classnames";
import {colours, courses as coursesList} from "../../../App.const";
import {randomInteger, SortFilters} from "../../../App.utils";
import CoursesCard from "../CoursesCard/CoursesCard";

function CoursesCards({filters}) {
    let { name, course } = SortFilters(filters);
    filters.forEach(f => {
        switch (f.name) {
            case 'Специальность': name = f.value; break;
            case 'Курс': course = f.value; break;
        }
    });
    let courses = coursesList.filter(course => name ? course.name === name : true);
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
