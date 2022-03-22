import cl from "classnames";
import './Module.scss';

function Module({module = {name: '', description: ''}}) {
    return (
        <section className={cl('module')}>
            {
                !module.content &&
                <div className="name">
                    {module.name}
                </div>
            }
            {
                module.description &&
                <div className="description">
                    {module.description}
                </div>
            }
            {
                module.content &&
                <div className="default-styles" dangerouslySetInnerHTML={{__html: module.content}}>
                    {/*{module.content}*/}
                </div>
            }
        </section>
    );
}

export default Module;