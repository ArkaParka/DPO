import './NewCourseModule.scss';
import cl from "classnames";
import {useState} from "react";
import ModuleInfo from "../ModuleInfo/ModuleInfo";
import NewLesson from "../NewLesson/NewLesson";
import Lesson from "../Lesson/Lesson";
import Button from "@mui/material/Button";
import {IoTrashOutline} from "react-icons/io5";
import {BsPencilFill} from "react-icons/bs";

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

    function handleModuleRedact() {
        // TODO: Redact module
    }

    function handleModuleDelete() {
        // TODO: Delete module
    }

    return (
        <div className={cl('new-course-module')}>
            <div className="new-course-title">
                {
                    module ? <h2>{index + 1} Модуль</h2> : <h2>Создание нового модуля</h2>
                }
                {
                    module &&
                    <div className="course-redact-btns">
                        <BsPencilFill
                            className={cl('course-redact-btn', 'redact-btn')}
                            onClick={handleModuleRedact}
                        />
                        <IoTrashOutline
                            className={cl('course-redact-btn', 'delete-btn')}
                            onClick={handleModuleDelete}
                        />
                    </div>
                }
            </div>
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
