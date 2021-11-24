import React from 'react';
import cl from "classnames";
import {colours, courses} from "../../../App.const";
import {randomInteger} from "../../../App.utils";
import CoursesCard from "../CoursesCard/CoursesCard";

function CoursesCards() {
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
