import './NewCourseProgram.scss';
import cl from "classnames";
import course from "../../Course/Course";
import {useEffect, useState} from "react";
import NewCourseModule from "../NewCourseModule/NewCourseModule";
import Button from "@mui/material/Button";

function NewCourseProgram({saveCourseProgram}) {
    // *** MODULES ***
    const [modules, setModules] = useState([]);

    const [moduleName, setModuleName] = useState('Новый модуль');
    const [moduleDescription, setModuleDescription] = useState('');

    function handleModuleCreate(newModule) {
        // TODO: Сделать проверку наличия module в course

        setModules([...modules, newModule]);
        setModuleName('Новый модуль');
        setModuleDescription('');
    }

    function handleSaveCourseProgram() {
        saveCourseProgram(modules);
    }

    return (
        <div className={cl('new-course-program-page')}>
            <div className="new-course-program-title">
                <h2>Программа курса</h2>
            </div>
            <hr/>
            {!modules.length && <NoModules/>}
            {
                modules.map((module, i, modules) => (
                    <NewCourseModule
                        modules={modules}
                        setModules={setModules}
                        module={module}
                        key={i}
                        index={i}
                    />)
                )
            }
            <hr/>
            <NewCourseModule
                moduleName={moduleName}
                setModuleName={setModuleName}
                moduleDescription={moduleDescription}
                setModuleDescription={setModuleDescription}

                saveNewModule={handleModuleCreate}
            />
            <hr/>
            <Button
                className={cl('save-course-program', 'btn')}
                onClick={handleSaveCourseProgram}
                variant="contained"
            >
                Сохранить изменения
            </Button>
        </div>
    );
}

function NoModules() {
    return (
        <div className="no-course">
            В курсе пока нет ни одного урока.
            Создайте первый модуль, чтобы добавить уроки
        </div>
    )
}

export default NewCourseProgram;
