import './AuthorizationButton.scss';
import cl from "classnames";
import {BsFillPersonFill} from "react-icons/all";


function AuthorizationButton(props) {
    const openModal = (e) => {
        props.onAuthorization({isOpen: true, event: e.target.id})
    };

    return (
    <button className={cl('authorization-button')}>
        <div className={cl('authorization-button-icon')}>
            <BsFillPersonFill />
        </div>
        <div className={cl('authorization-btn-links')}>
            <a href="#" id="modal_auth" onClick={openModal}>Вход</a>
            <a href="#" id="modal_reg" onClick={openModal}>Регистрация</a>
        </div>
    </button>
    );
}

export default AuthorizationButton;
