import React, {useEffect, useState} from "react";
import cl from "classnames";
import './Course.scss';
import CardStats from "../Courses/CoursesCard/CardStats/CardStats";
import {course_3} from "../../App.const";
import {setSelectedOption} from "../../App.utils";


function Course({location}) {
    const [courseData, setCourseData] = useState(course_3);

    useEffect(() => {
        setSelectedOption(location, setCourseData);
    }, []);

    return (
        <section className={cl('section-outer')}>
            <div className={cl('course')}>
                <div className={cl('course-title')}>
                    <div className={cl('page-fragment')}>
                        <div className={cl('name')}>
                            {courseData.name}
                        </div>
                        <div className={cl('stats')}>
                            <CardStats courseStats={courseData.stats}/>
                        </div>
                    </div>
                </div>
                <div className={cl('course-description')}>
                    <div className={cl('page-fragment')}>
                        <div className={cl('content-block')}>
                            <h2>О курсе</h2>
                        </div>
                        <div className={cl('content-block')}>
                            {courseData.text}
                        </div>
                        <div className={cl('content-block')}>
                            {courseData.text}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Course;
