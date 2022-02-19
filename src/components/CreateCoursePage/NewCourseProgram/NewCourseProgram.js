import './NewCourseProgram.scss';
import cl from "classnames";
import course from "../../Course/Course";
import {useState} from "react";
import NewCourseModule from "../NewCourseModule/NewCourseModule";

function NewCourseProgram({courseModules, saveNewModule, saveCourseProgram}) {
    // *** MODULES ***
    const [modules, setModules]  = useState([]);

    const [moduleName, setModuleName] = useState('Новый модуль');
    const [moduleDescription, setModuleDescription] = useState('');


    function handleModuleCreate(newModule) {
        // TODO: Сделать проверку наличия module в course

        setModules([...modules, newModule]);
        setModuleName('Новый модуль');
        setModuleDescription('');
    }

    return (
        <div className={cl('new-course-program-page')}>
            <h2>Программа курса</h2>
            { !modules.length && <NoModules /> }
            {
                // TODO: Вынести стэйты модуля в программу курса и сделать по примеру уроков
                modules.map((module, i) => (
                    JSON.stringify(module)
                    )
                        // <NewCourseModule
                        //     saveNewModule={saveNewModule}
                        //     key={i}
                        // />)
                    )
            }

            <NewCourseModule
                moduleName={moduleName}
                setModuleName={setModuleName}
                moduleDescription={moduleDescription}
                setModuleDescription={setModuleDescription}

                saveNewModule={handleModuleCreate}
            />
            {/*<button className={cl('create-module')} onClick={handleModuleCreate}>+ Новый модуль</button>*/}
            <hr/>
            <button className={cl('save-course-program')} onClick={saveCourseProgram}>Сохранить изменения</button>
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
