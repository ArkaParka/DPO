import './NewCourseModule.scss';
import cl from "classnames";
import {useState} from "react";
import ModuleInfo from "../ModuleInfo/ModuleInfo";
import NewLesson from "../NewLesson/NewLesson";
import Lesson from "../Lesson/Lesson";
import Button from "@mui/material/Button";

function NewCourseModule(
    {
        moduleName,
        setModuleName,
        moduleDescription,
        setModuleDescription,
        saveNewModule
    }) {

    const [lessonName, setLessonName] = useState('');
    const [lessons, setLessons] = useState([]);

    function handleLessonCreate() {
        // TODO: Сделать проверку наличия урока в модуле
        let newLesson = {
            name: lessonName
        }

        setLessons([...lessons, newLesson]);
        setLessonName('');
    }

    function handleModuleSaveChanges() {
        if (!moduleName) {
            alert('Имя модуля не может быть пустой строкой');
            return;
        }
        let newModule = {};

        newModule.name = moduleName;
        newModule.description = moduleDescription;
        newModule.lessons = lessons;

        saveNewModule(newModule);
    }

    return (
        <div className={cl('new-course-module')}>
            <h2>Создание нового модуля</h2>

            <ModuleInfo
                moduleName={moduleName}
                setModuleName={setModuleName}
                moduleDescription={moduleDescription}
                setModuleDescription={setModuleDescription}
            />
            {
                lessons.map(lesson => <Lesson lesson={lesson} key={lesson.name}/>)
            }

            <NewLesson
                lessonName={lessonName}
                setLessonName={setLessonName}
                addNewLesson={handleLessonCreate}
            />

            <Button
                className={cl('save-module-changes', 'btn')}
                onClick={handleModuleSaveChanges}
                variant="contained"
            >
                Сохранить модуль
            </Button>
        </div>
    );
}

export default NewCourseModule;
