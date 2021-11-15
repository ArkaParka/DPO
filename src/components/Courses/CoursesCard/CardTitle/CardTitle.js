import cl from "classnames";

function CardTitle(props) {
    const {coursName} = props;

    return (
        <div className={cl('card-header')}>
            <h3>{coursName}</h3>
        </div>
    );
}

export default CardTitle;
