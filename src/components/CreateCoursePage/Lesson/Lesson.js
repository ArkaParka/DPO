import cl from "classnames";
import {Alert} from "react-bootstrap";
import './Lesson.scss';

function Lesson({lesson, key}) {
    return (
        <section className={cl('lesson')}>
            <Alert key={key} variant='primary' className={cl("lesson-name")}>
                {lesson.name}
            </Alert>
        </section>
    );
}

export default Lesson;
