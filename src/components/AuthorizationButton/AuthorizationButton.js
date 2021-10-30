import './AuthorizationButton.scss';
import cl from "classnames";


function AuthorizationButton(props) {
    const openModal = (e) => {
        props.onAuthorization({isOpen: true, event: e.target.id})
    };

    return (
    <button className={cl('authorization-button')}>
        <div className={cl('authorization-button-icon')}>
            <svg>
                {/*<use xlink:href="/landing/img/main.svg#icon-user"></use>*/}
            </svg>
        </div>
        <div className={cl('authorization-btn-links')}>
            <a href="#" id="modal_auth" onClick={openModal}>Вход</a>
            <a href="#" id="modal_reg" onClick={openModal}>Регистрация</a>
        </div>
    </button>
    );
}

export default AuthorizationButton;
