import './NewCourseProgram.scss';
import cl from "classnames";
import course from "../../Course/Course";
import {useState} from "react";
import NewCourseModule from "../NewCourseModule/NewCourseModule";

function NewCourseProgram({modules, saveModuleChanges}) {
    const [isNewModuleCreating, setIsNewModuleCreating] = useState(false);

    function handlerModuleCreate() {
        setIsNewModuleCreating(true);
    }

    return (
        <div className={cl('new-course-program-page')}>
            <h2>Программа курса</h2>
            { !isNewModuleCreating && !modules.length && <NoModules /> }
            {
                !isNewModuleCreating &&
                <button className={cl('create-module')} onClick={handlerModuleCreate}>+ Новый модуль</button>
            }
            {
                isNewModuleCreating && <NewCourseModule saveModuleChanges={saveModuleChanges}/>
            }
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
