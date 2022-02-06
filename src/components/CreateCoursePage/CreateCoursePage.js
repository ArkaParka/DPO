import cl from "classnames";
import React, {useState} from "react";
import NewCourseTitle from "./NewCourseTitle/NewCourseTitle";
import './CreateCoursePage.scss';
import NewCourseProgram from "./NewCourseProgram/NewCourseProgram";
import CourseEditingPage from "../CourseEditingPage/CourseEditingPage";
import {courseProgram} from "../../App.const";

function CreateCoursePage({}) {
    const course = {
        name: '',
        modules: [
            // {
            //     name: '',
            //     description: '',
            //     startDate: null,
            //     stopDate: null,
            //     lessons: []
            // }
        ],
        stats: {
            hour: 0,
            count: 0,
        },
        description: '',
    };

    const [createCourseState, setCreateCourseState] = useState(2);
    // 0 - title
    // 1 - create program (modules name + lessons name)
    // 2 - redact course

    const [courseTitle, setCourseTitle]  = useState('');
    const [courseModules, setCourseModules]  = useState([]);

    function handleCourseTitleChange(e) {
        let newTitle = (e.target.value).slice(0, 64);
        setCourseTitle(newTitle);
    }

    function handleConfirmCourseTitle() {
        if (courseTitle) {
            course.name = courseTitle;
            setCreateCourseState(createCourseState+1);
        } else {
            alert('Название курса не может быть пустой строкой');
        }
    }

    function handleModuleCreate(newModule) {
        // TODO: Сделать проверку на наличие курса и изменение полей уже существующего
        setCourseModules([...courseModules, newModule]);
    }

    function handleSaveCourseProgram() {
        course.modules = courseModules;
        setCreateCourseState(2);
    }

    return (
        <div className={cl('create-course-page')}>
            {
                (createCourseState === 0) &&
                <NewCourseTitle
                    title={courseTitle}
                    setTitle={handleCourseTitleChange}
                    confirmTitle={handleConfirmCourseTitle}
                />
            }
            {
                (createCourseState === 1) &&
                <NewCourseProgram
                    courseModules={courseModules}
                    saveNewModule={handleModuleCreate}
                    saveCourseProgram={handleSaveCourseProgram}
                />
            }
            {
                (createCourseState === 2) &&
                <CourseEditingPage course={courseProgram}/>
            }
        </div>
    );
}

export default CreateCoursePage;
