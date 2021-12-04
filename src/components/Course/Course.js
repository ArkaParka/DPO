import React from "react";
import cl from "classnames";
import './Course.scss';
import CardStats from "../Courses/CoursesCard/CardStats/CardStats";

function Course({location}) {
    const {name, stats, text, year} = location.data;

    return (
        <section className={cl('section-outer')}>
            <div className={cl('course')}>
                <div className={cl('course-title')}>
                    <div className={cl('name')}>
                        {name}
                    </div>
                    <div className={cl('year')}>
                        ({year} курс)
                    </div>
                    <div className={cl('stats')}>
                        <CardStats courseStats={stats}/>
                    </div>
                </div>
                <div className={cl('course-description')}>
                    <div className={cl('section')}>
                        {text}
                    </div>
                    <div className={cl('section')}>
                        {text}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Course;
