import './NewCourseModule.scss';
import cl from "classnames";
import {useState} from "react";
import ModuleInfo from "../ModuleInfo/ModuleInfo";
import NewLesson from "../NewLesson/NewLesson";
import Lesson from "../Lesson/Lesson";

function NewCourseModule({saveModuleChanges}) {
    const newModule = {
        name: '',
        startDate: null,
        stopDate: null,
        lessons: []
    }

    const [moduleName, setModuleName] = useState('Новый модуль');
    const [startDate, setStartDate] = useState(null);
    const [stopDate, setStopDate] = useState(null);

    const [lessonName, setLessonName] = useState('');

    function handleLessonCreate(newLesson) {
        newModule.lessons.push(newLesson);
    }

    function handlerModuleChanges() {
        if (!moduleName) {
            alert('Имя модуля не может быть пустой строкой');
            return;
        }

        newModule.name = moduleName;
        newModule.startDate = startDate;
        newModule.stopDate = stopDate;

        saveModuleChanges(newModule);
    }

    return (
        <div className={cl('new-course-module')}>
            <ModuleInfo
                moduleName={moduleName}
                setModuleName={setModuleName}
                startDate={startDate}
                setStartDate={setStartDate}
                stopDate={stopDate}
                setStopDate={setStopDate}
            />
            {
                newModule.lessons.map(lesson => <Lesson lesson={lesson}/>)
            }
            <NewLesson
                lessonName={lessonName}
                setLessonName={setLessonName}
                addNewLesson={handleLessonCreate}
            />

            <button
                className={cl('save-module-changes')}
                onClick={handlerModuleChanges}
                disabled={!lessonName.length}
            >
                Сохранить
            </button>
        </div>
    );
}

export default NewCourseModule;
