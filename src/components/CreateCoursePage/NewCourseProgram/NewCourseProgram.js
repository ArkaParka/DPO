import './NewCourseProgram.scss';
import cl from "classnames";
import course from "../../Course/Course";
import {useState} from "react";
import NewCourseModule from "../NewCourseModule/NewCourseModule";

function NewCourseProgram({courseModules, saveNewModule, saveCourseProgram}) {
    const [newModules, setNewModules] = useState(courseModules);

    function handleNewModuleCreate() {
        setNewModules([...newModules, {}]);
    }

    return (
        <div className={cl('new-course-program-page')}>
            <h2>Программа курса</h2>
            { !courseModules.length && <NoModules /> }
            {
                newModules
                    .map((module, i) => (
                        <NewCourseModule
                            saveNewModule={saveNewModule}
                            key={i}
                        />)
                    )
            }
            <button className={cl('create-module')} onClick={handleNewModuleCreate}>+ Новый модуль</button>
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
