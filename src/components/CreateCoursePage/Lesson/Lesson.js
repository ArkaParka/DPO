import cl from "classnames";
import {Alert} from "react-bootstrap";
import './Lesson.scss';
import {useState} from "react";
import {FaCheck} from "react-icons/fa";
import {BsPencilFill} from "react-icons/bs";
import {IoTrashOutline} from "react-icons/io5";

function Lesson({lesson, lessons, setLessons, index}) {
    const [lessonName, setLessonName] = useState(lesson.name || '');
    const [isRedacting, setIsRedacting] = useState(false);

    function handleLessonDelete() {
        let newLessons = lessons.slice();
        newLessons.splice(index, 1);
        setLessons(newLessons);
    }

    function handleLessonRedact() {
        setIsRedacting(true);
    }

    function handleModuleAccept() {
        let newLessons = lessons.slice();
        newLessons[index] = {
            name: lessonName
        };
        setLessons(newLessons);
        setIsRedacting(false);
    }

    function handleFieldChange(e) {
        setLessonName(e.target.value);
    }

    return (
        <section className={cl('lesson')}>
            <Alert variant='primary' className={cl("lesson-name")}>
                <input
                    id='name'
                    type="text"
                    value={lessonName}
                    onChange={handleFieldChange}
                    disabled={!isRedacting}
                    className={cl({redact: isRedacting})}
                />
                <div className="course-redact-btns">
                    {
                        isRedacting ?
                            <FaCheck
                                className={cl('course-redact-btn', 'accept-btn', 'lesson-redact-btn')}
                                onClick={handleModuleAccept}
                            /> :
                            <BsPencilFill
                                className={cl('course-redact-btn', 'redact-btn', 'lesson-redact-btn')}
                                onClick={handleLessonRedact}
                            />
                    }
                    <IoTrashOutline
                        className={cl('course-redact-btn', 'delete-btn', 'lesson-redact-btn')}
                        onClick={handleLessonDelete}
                    />
                </div>
            </Alert>
        </section>
    );
}

export default Lesson;
