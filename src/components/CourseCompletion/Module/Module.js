import cl from "classnames";
import './Module.scss';

function Module({module = {name: '', description: ''}}) {
    return (
        <section className={cl('module')}>
            <div className="name">
                {module.name}
            </div>
            <div className="description">
                {module.description}
            </div>
        </section>
    );
}

export default Module;