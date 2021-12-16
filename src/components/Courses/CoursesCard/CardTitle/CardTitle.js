import cl from "classnames";
import './CardTitle.scss';

function CardTitle(props) {
    const {courseName} = props;

    return (
        <div className={cl('card-title')}>
            <h3>{courseName}</h3>
        </div>
    );
}

export default CardTitle;
