// import './CreateCourseButton.scss';
import cl from "classnames";
import {Link} from 'react-router-dom';

function CreateCourseButton() {
    return (
        <Link to='/create-course-page'>
            <button className={cl('create-course-btn', 'btn', 'blue')}>
                Create Course
            </button>
        </Link>
    );
}

export default CreateCourseButton;
