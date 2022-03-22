import './Task.scss';
import cl from "classnames";

function Task({task}) {
    return (
        <section className={cl('task')}>
            <div className="name">
                {task.name}
            </div>
            <div className="description">
                {task.description}
            </div>
        </section>
    );
}

export default Task;