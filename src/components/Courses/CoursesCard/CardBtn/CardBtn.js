import cl from "classnames";
import { Consumer } from '../../../Layout/Layout.js'

function CardBtn() {
    const onOpenModal = (value) => {
        value.openModal({isOpen: true, event: "modal_auth"});
    };

    return (
        <div className={cl('card-btn')}>
            <Consumer>
                {
                    value =>
                        <button
                            onClick={() => {onOpenModal(value)}}
                            className="btn btn_courses active"
                        >
                            Записаться
                        </button>}
            </Consumer>
        </div>
    );
}

export default CardBtn;
