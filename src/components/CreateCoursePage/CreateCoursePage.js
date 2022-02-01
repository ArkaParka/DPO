import cl from "classnames";
import {courseName2, courseText, statCountValue, statHourValue} from "../../App.const";
import Profile from "../Profile/Profile";
import {Route} from "react-router";
import React, {useState} from "react";
import NewCourseTitle from "./NewCourseTitle/NewCourseTitle";
// import './CreateCoursePage.scss';

function CreateCoursePage({}) {
    const course = {
        name: '',
        stats: {
            hour: 0,
            count: 0,
        },
        text: '',
    };
    const [title, setTitle]  = useState('');

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    return (
        <div className={cl('create-course-page')}>
            Create YOUR Course!
            {!course.name && <NewCourseTitle title={title} setTitle={handleTitleChange}/>}
        </div>
    );
}

export default CreateCoursePage;
