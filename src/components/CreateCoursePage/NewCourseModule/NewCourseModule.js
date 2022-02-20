import './NewCourseModule.scss';
import cl from "classnames";
import {useEffect, useState} from "react";
import ModuleInfo from "../ModuleInfo/ModuleInfo";
import NewLesson from "../NewLesson/NewLesson";
import Lesson from "../Lesson/Lesson";
import Button from "@mui/material/Button";
import {IoTrashOutline} from "react-icons/io5";
import {BsPencilFill} from "react-icons/bs";
import {FaCheck} from "react-icons/fa";

function NewCourseModule(
    {
        module = null,
        index = 0,
        modules,
        setModules,
        moduleName,
        setModuleName,
        moduleDescription,
        setModuleDescription,
        saveNewModule
    }) {

    const [lessonName, setLessonName] = useState('');
    const [lessons, setLessons] = useState(module?.lessons || []);

    const [isInputDisable, setIsInputDisable] = useState(Boolean(module));
    const [isRedacting, setIsRedacting] = useState(false);

    const [name, setName] = useState(module?.name || null);
    const [description, setDescription] = useState(module?.description || null);


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
            shortDescription: moduleDescription,
            order: index,
            lessons: lessons
        };
        // {
        //     "courseId": "string",
        //     "name": "string",
        //     "shortDescription": "string",
        //     "order": 0
        // }

        saveNewModule(newModule);
        setLessons([]);
    }

    function handleModuleRedact() {
        // TODO: Redact module
        setIsInputDisable(false);
        setIsRedacting(true);
    }

    function handleModuleAccept() {
        let redactModule = Object.assign(module, {
            name: name,
            shortDescription: description
        });

        let newModules = modules;
        newModules[index] = redactModule;

        setModules(newModules);
        setIsInputDisable(true);
        setIsRedacting(false);
    }

    function handleModuleDelete() {
        // if (modules.length === 1) {
        //     setModules([]);
        //     return;
        // }
        // TODO: Delete module
        // let newModules = modules.slice().splice(index, 1);
        //
        // console.log('delete', modules, newModules, index);
        // setModules(newModules);
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
                        {
                            isRedacting ?
                                <FaCheck
                                    className={cl('course-redact-btn', 'accept-btn')}
                                    onClick={handleModuleAccept}
                                /> :
                                <BsPencilFill
                                    className={cl('course-redact-btn', 'redact-btn')}
                                    onClick={handleModuleRedact}
                                />
                        }
                        <IoTrashOutline
                            className={cl('course-redact-btn', 'delete-btn')}
                            onClick={handleModuleDelete}
                        />
                    </div>
                }
            </div>
            <ModuleInfo
                isInputDisable={isInputDisable}
                moduleName={name || moduleName}
                setModuleName={setModuleName || setName}
                moduleDescription={description || moduleDescription}
                setModuleDescription={setModuleDescription || setDescription}
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
