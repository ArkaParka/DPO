import cl from "classnames";
import React, {useState} from "react";
import './CourseEditingPage.scss';

function CourseEditingPage({course}) {
    return (
        <div className={cl('edit-course-page')}>
            {JSON.stringify(course)}
        </div>
    );
}

export default CourseEditingPage;
