import './NewLesson.scss';
import cl from "classnames";

function NewLesson({lessonName, setLessonName, addNewLesson}) {
    function handlerLessonNameChange(e) {
        let newLessonName = e.target.value.trim().slice(0, 64);

        setLessonName(newLessonName);
    }

    return (
        <section className={cl('new-lesson-info')}>
            <div className={cl("lesson-name")}>
                <input
                    placeholder='Введите название нового урока'
                    type="text"
                    value={lessonName}
                    onChange={handlerLessonNameChange}
                />
            </div>
            <button
                className={cl('create-lesson')}
                onClick={addNewLesson}
                disabled={!lessonName.length}
            >
                + Создать урок
            </button>
        </section>
    );
}

export default NewLesson;
