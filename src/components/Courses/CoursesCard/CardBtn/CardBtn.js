import cl from "classnames";
import './CardBtn.scss';

function CardBtn() {
    return (
        <div className={cl('card-btn')}>
            <button
                className={cl('btn', 'blue')}
            >
                Записаться
            </button>
        </div>
    );
}

export default CardBtn;
