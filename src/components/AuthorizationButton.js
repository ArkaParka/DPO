function AuthorizationButton() {
    return (
    <button className="authorization-button">
        <div className="authorization-button-icon">
            <svg>
                {/*<use xlink:href="/landing/img/main.svg#icon-user"></use>*/}
            </svg>
        </div>
        <div className="authorization-btn-links">
            <a href="#" data-modal="modal_auth">Вход</a>
            <a href="#" data-modal="modal_reg">Регистрация</a>
        </div>
    </button>
    );
}

export default AuthorizationButton;
