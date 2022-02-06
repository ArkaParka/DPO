import './NewCourseModule.scss';
import cl from "classnames";
import {useState} from "react";
import ModuleInfo from "../ModuleInfo/ModuleInfo";
import NewLesson from "../NewLesson/NewLesson";
import Lesson from "../Lesson/Lesson";

function NewCourseModule({saveNewModule}) {
    const [moduleName, setModuleName] = useState('Новый модуль');
    const [moduleDescription, setModuleDescription] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [stopDate, setStopDate] = useState(null);

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

    function handlerModuleSaveChanges() {
        if (!moduleName) {
            alert('Имя модуля не может быть пустой строкой');
            return;
        }
        let newModule = {};

        newModule.name = moduleName;
        newModule.description = moduleDescription;
        newModule.startDate = startDate;
        newModule.stopDate = stopDate;
        newModule.lessons = lessons;

        saveNewModule(newModule);
    }

    return (
        <div className={cl('new-course-module')}>
            <ModuleInfo
                moduleName={moduleName}
                setModuleName={setModuleName}
                moduleDescription={moduleDescription}
                setModuleDescription={setModuleDescription}
                startDate={startDate}
                setStartDate={setStartDate}
                stopDate={stopDate}
                setStopDate={setStopDate}
            />
            {
                lessons.map(lesson => <Lesson lesson={lesson} key={lesson.name} />)
            }
            <NewLesson
                lessonName={lessonName}
                setLessonName={setLessonName}
                addNewLesson={handleLessonCreate}
            />

            <button
                className={cl('save-module-changes')}
                onClick={handlerModuleSaveChanges}
            >
                Сохранить модуль
            </button>
        </div>
    );
}

export default NewCourseModule;
