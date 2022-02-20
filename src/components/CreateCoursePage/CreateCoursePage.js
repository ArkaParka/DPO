import cl from "classnames";
import React, {useState} from "react";
import NewCourseCreatePage from "./NewCourseTitle/NewCourseCreatePage";
import './CreateCoursePage.scss';
import NewCourseProgram from "./NewCourseProgram/NewCourseProgram";
import CourseEditingPage from "../CourseEditingPage/CourseEditingPage";
import {courseProgram} from "../../App.const";
import {useAuth} from "../../context/AuthContext";
import {createCourse, createCourseModules} from "../../api/CoursesAPI";

function CreateCoursePage({}) {
    // const {userInfo} = useAuth();
    const professorID = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

    const [createCourseState, setCreateCourseState] = useState(1);
    // 0 - create course
    // 1 - create program (modules + lessons)
    // 2 -

    // *** COURSE ***
    const [courseName, setCourseName]  = useState('');
    const [courseDescription, setCourseDescription]  = useState('');
    const [courseSpeciality, setCourseSpeciality]  = useState('');
    const [courseHours, setCourseHours]  = useState(0);
    const [courseContentImage, setCourseContentImage]  = useState(undefined);

    function handleCourseFieldsChange(e) {
        if (e === null) return;
        if (typeof e === 'number') {
            setCourseHours(e);
            return;
        }
        switch (e.target.id) {
            case 'name': {
                let newTitle = (e.target.value).slice(0, 64);
                setCourseName(newTitle);
                break;
            }
            case 'description': {
                let newDescription = (e.target.value).slice(0, 264);
                setCourseDescription(newDescription);
                break;
            }
            case 'speciality': {
                let newSpeciality = (e.target.value);
                setCourseSpeciality(newSpeciality);
                break;
            }
            case 'contentImage': {
                console.log('e', e.target.value)
                setCourseContentImage(e.target.value);
                break;
            }
        }
    }

    function handleSaveCourse() {
        let req = {
            "name": courseName,
            "description": courseDescription,
            "speciality": courseSpeciality,
            "professor": professorID,
            "hours": courseHours,
            "contentImage": courseContentImage
        }
        if (courseName) {
            // TODO: send request for create course
            console.log('course', req);
            // createCourse(req);
            // setCreateCourseState(createCourseState+1);
        } else {
            alert('Название курса не может быть пустой строкой');
        }
    }

    function handleSaveCourseProgram(modules) {
        console.log(modules);
        // TODO: send request for create modules in course
        createCourseModules(modules);
    }

    return (
        <div className={cl('create-course-page')}>
            {
                (createCourseState === 0) &&
                <NewCourseCreatePage
                    name={courseName}
                    description={courseDescription}
                    speciality={courseSpeciality}
                    hours={courseHours}
                    contentImage={courseContentImage}

                    courseFieldsChange={handleCourseFieldsChange}
                    saveCourse={handleSaveCourse}
                />
            }
            {
                (createCourseState === 1) &&
                <NewCourseProgram
                    // courseModules={modules}
                    // saveNewModule={handleModuleCreate}
                    saveCourseProgram={handleSaveCourseProgram}
                />
            }
            {
                // (createCourseState === 2) &&
                // <CourseEditingPage course={courseProgram}/>
            }
        </div>
    );
}

export default CreateCoursePage;
