import React, {useEffect, useState} from "react";
import cl from "classnames";
import './Course.scss';
import {getCourse} from "../../api/CoursesAPI";
import ModulePreview from "../ModulePreview/ModulePreview";
import courseImg from './../../imgs/brain.jpg';
import {GiDiploma} from "react-icons/gi";
import {BiTimeFive} from "react-icons/bi";
import {IoTime} from "react-icons/io5";

function Course({location}) {
    const [course, setCourse] = useState({});

    useEffect(() => {
        let courseId = localStorage.getItem('courseId');

        if (courseId) {
            getCourse(courseId).then(setCourse);
        }

        // setSelectedOption(location, setCourse);
    }, []);

    return (
        <section className={cl('section-outer')}>
            <div className={cl('courses-course')}>
                <div className={cl('course-title')}>
                    <div className={cl('page-fragment')}>
                        <div className={cl('course-title_name')}>
                            {course.name}
                        </div>
                        <div className={cl('course-title_certificate', 'icon')}>
                            <GiDiploma fontSize="2.3em" />
                            <span>Сертификат FontAwesome</span>
                        </div>
                        <div className={cl('course-title_time', 'icon')}>
                            <IoTime fontSize="2.3em" />
                            <span>5 - 15 часов в неделю</span>
                        </div>
                    </div>
                </div>
                <div className={cl('course-description')}>
                    <div className={cl('page-fragment')}>
                        <div className={cl('content-block')}>
                            <h2>О курсе</h2>
                        </div>
                        <div className={cl('content-block')}>
                            {course.description}
                        </div>
                        <div className={cl('content-block')}>
                            {course.content}
                        </div>
                        <div className={cl('content-block', 'modules-list')}>
                            {
                                course.modules ?
                                    <>
                                        <h2>Программа курса</h2>
                                        {
                                            course.modules
                                                .map(module => (
                                                    <ModulePreview
                                                        key={module.id}
                                                        module={module}
                                                    />
                                                ))
                                        }
                                    </> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Course;
