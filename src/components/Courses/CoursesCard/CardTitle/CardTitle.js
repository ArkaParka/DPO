import cl from "classnames";

function CardTitle(props) {
    const {courseName} = props;

    return (
        <div className={cl('card-header')}>
            <h3>{courseName}</h3>
        </div>
    );
}

export default CardTitle;
