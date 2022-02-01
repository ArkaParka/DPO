import cl from "classnames";
import React, {useState} from "react";
import NewCourseTitle from "./NewCourseTitle/NewCourseTitle";
import './CreateCoursePage.scss';
import NewCourseProgram from "./NewCourseProgram/NewCourseProgram";

function CreateCoursePage({}) {
    const pageTitle = ['Создание нового курса', 'Программа курса'];
    const course = {
        name: '',
        modules: [
            // {
            //     name: '',
            //     startDate: null,
            //     stopDate: null,
            //     lessons: []
            // }
        ],
        stats: {
            hour: 0,
            count: 0,
        },
        text: '',
    };
    const [createCourseState, setCreateCourseState] = useState(0);
    // 0 - title
    // 1 - program
    // 2 - create module
    const [title, setTitle]  = useState('');

    function handleCourseTitleChange(e) {
        let newTitle = (e.target.value).trim().slice(0, 64);

        setTitle(newTitle);
    }

    function handleConfirmCourseTitle() {
        if (title) {
            course.name = title;
            setCreateCourseState(createCourseState+1);
        } else {
            alert('Название курса не может быть пустой строкой');
        }
        console.log(course, createCourseState);
    }

    function handlerModuleChanges(newModule) {
        console.log('newModule', newModule);
        // setCreateCourseState(2);
    }

    return (
        <div className={cl('create-course-page')}>
            {
                (createCourseState === 0) &&
                <NewCourseTitle
                    title={title}
                    setTitle={handleCourseTitleChange}
                    confirmTitle={handleConfirmCourseTitle}
                />
            }
            {
                (createCourseState === 1) &&
                <NewCourseProgram
                    modules={course.modules}
                    saveModuleChanges={handlerModuleChanges}
                />
            }
        </div>
    );
}

export default CreateCoursePage;
