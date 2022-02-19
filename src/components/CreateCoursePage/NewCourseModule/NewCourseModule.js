import './NewCourseModule.scss';
import cl from "classnames";
import {useState} from "react";
import ModuleInfo from "../ModuleInfo/ModuleInfo";
import NewLesson from "../NewLesson/NewLesson";
import Lesson from "../Lesson/Lesson";
import Button from "@mui/material/Button";

function NewCourseModule(
    {
        module = null,
        index = 0,
        moduleName,
        setModuleName,
        moduleDescription,
        setModuleDescription,
        saveNewModule
    }) {

    const [lessonName, setLessonName] = useState('');
    const [lessons, setLessons] = useState(module?.lessons || []);

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
        let newModule = {
            name: moduleName,
            description: moduleDescription,
            lessons: lessons
        };

        saveNewModule(newModule);
        setLessons([]);
    }

    return (
        <div className={cl('new-course-module')}>
            {
                module ? <h2>{index+1} Модуль</h2> : <h2>Создание нового модуля</h2>
            }

            <ModuleInfo
                module={module}
                moduleName={module ? module?.name : moduleName}
                setModuleName={setModuleName}
                moduleDescription={module ? module?.description : moduleDescription}
                setModuleDescription={setModuleDescription}
            />
            {
                lessons.map(lesson => <Lesson lesson={lesson} key={lesson.name}/>)
            }

            {
                !module && <NewLesson
                    lessonName={lessonName}
                    setLessonName={setLessonName}
                    addNewLesson={handleLessonCreate}
                />
            }

            {
                !module && <Button
                    className={cl('save-module-changes', 'btn')}
                    onClick={handleModuleSaveChanges}
                    variant="contained"
                >
                    Сохранить модуль
                </Button>
            }
        </div>
    );
}

export default NewCourseModule;
