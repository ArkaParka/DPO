import './Lesson.scss';
import cl from "classnames";

function Lesson({lesson}) {
    return (
        <section className={cl('lesson')}>
            <div className={cl("lesson-name")}>
                {lesson.name}
            </div>
        </section>
    );
}

export default Lesson;
