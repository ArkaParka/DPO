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
                    <div className={cl('name')}>
                        {courseData.name}
                    </div>
                    <div className={cl('stats')}>
                        <CardStats courseStats={courseData.stats}/>
                    </div>
                </div>
                <div className={cl('course-description')}>
                    <div className={cl('section')}>
                        {courseData.text}
                    </div>
                    <div className={cl('section')}>
                        {courseData.text}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Course;
