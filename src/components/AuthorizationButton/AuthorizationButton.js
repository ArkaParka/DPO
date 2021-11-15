import './AuthorizationButton.scss';
import cl from "classnames";
import {BsFillPersonFill} from "react-icons/all";


function AuthorizationButton(props) {
    const openModal = (e) => {
        e.preventDefault();
        props.onAuthorization({isOpen: true, event: e.target.id})
    };

    return (
    <button className={cl('authorization-btn')}>
        <div className={cl('authorization-btn-icon')}>
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
