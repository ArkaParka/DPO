import cl from "classnames";

function CardBtn(props) {

    return (
        <div className={cl('card-btn')}>
            <button data-modal="modal_reg" className="btn btn_courses active">Записаться</button>
        </div>
    );
}

export default CardBtn;
