// import './CreateCourseButton.scss';
import cl from "classnames";

function NewCourseTitle({setTitle, title}) {
    return (
        <div className={cl('new-course-title')}>
            <input type="text" onChange={setTitle} value={title}/>
        </div>
    );
}

export default NewCourseTitle;
