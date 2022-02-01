import './NewCourseTitle.scss';
import cl from "classnames";

function NewCourseTitle({setTitle, title, confirmTitle}) {
    return (
        <div className={cl('new-course-title-page')}>
            <h2>Создание нового курса</h2>
            Название курса
            <input type="text" onChange={setTitle} value={title}/>
            Максимум 64 символа
            <button className={cl('title-confirmation')} onClick={() => confirmTitle()}>Создать курс</button>
        </div>
    );
}

export default NewCourseTitle;
