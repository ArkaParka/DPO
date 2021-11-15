import './Modal.scss';
import ModalContentGroup from "./ModalContentGroup/ModalContentGroup";
import React, {useState, useEffect} from "react";
import cl from 'classnames';

function Modal(props) {
    const title = props.data.title;
    const btnText = props.data.btnText;
    const fields = props.data.fields;
    const isRegistration = title === 'Регистрация';
    const [user, changeUserState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        emailConfirmed: false,
    });
    const [password_has_error, isPasswordHasError] = useState(true);
    const [isError, setIsError] = useState(false);

    const onFieldChange = (event) => {
        switch(event.target.name){
            case 'firstName':
                changeUserState({...user, firstName: event.target.value});
                break;
            case 'lastName':
                changeUserState({...user, lastName: event.target.value});
                break;
            case 'username':
                changeUserState({...user, username: event.target.value});
                break;
            case 'email':
                changeUserState({...user, email: event.target.value});
                break;
            case 'password':
                changeUserState({...user, password: event.target.value});
                break;
            case 'password_confirmation':
                changeUserState({...user, password_confirmation: event.target.value});
                break;
        }

    }

    const handleCloseModal = () => {
        props.onSubmit({isOpen: false, userData: null, isRegistration: null});
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        let emptyFieldOnReg = Object.keys(user).find(field => (user[field]).toString().trim() === "");
        let emptyFieldOnAuth = (user.username === '' || user.password === '');

        if (isRegistration) {
            if (!emptyFieldOnReg && !password_has_error) {
                setIsError(false);
                props.onSubmit({isOpen: false, userData: user, isRegistration: isRegistration});
                setTimeout(showMessage, 1000);
            }
            else {
                setIsError(true);
            }
        }
        else if (!emptyFieldOnAuth) {
            props.onSubmit({isOpen: false, userData: user, isRegistration: isRegistration});
        }
        else {
            setIsError(true);
        }
    }

    const showMessage = () => {
        alert(`На ${user.email} мы отправили письмо с подтверждением.`);
    }

    const confirmPassword = () => {
        if(!user.password || user.password.length < 6 || user.password !== user.password_confirmation) {
            isPasswordHasError(true);
        }
        else {
            isPasswordHasError(false);
        }
    }

    const handleOpenAuthModal = () => {
        props.onOpenAuthModal({isOpen: true, event: 'modal_auth'});
    }

    useEffect(() => {
        confirmPassword();
    }, [user.password, user.password_confirmation]);

    return (
        <div className="modal">
            <div className={cl('modal-overlay')} onClick={handleCloseModal}></div>
            <div
                className={cl( 'modal-container')}
            >
                <div className={cl('modal modal-header')}>
                    <h2>{title}</h2>
                </div>
                <form
                    className={cl( 'modal-content', { error: isError})}
                    id="registerForm"
                    onSubmit={handleSubmitForm}
                >
                    {
                        fields.map((field, i) =>
                            <ModalContentGroup
                                key={i}
                                label={field.label}
                                input={field.input}
                                value={user[field.input.name]}
                                onInputChange={onFieldChange}
                                message={field.message}
                            />
                        )
                    }

                    <ModalContentGroup isError={true} />

                    <div className={cl('modal-content-btn')}>
                        <button className={cl('btn btn_blue')}>{btnText}</button>
                    </div>
                    {
                        isRegistration && (
                            <div className={cl('modal-content-link')}>
                                <span>
                                    Уже есть аккаунт?
                                    <strong
                                        data-changemodal="modal_auth"
                                        onClick={handleOpenAuthModal}
                                    >
                                        Авторизироваться
                                    </strong>
                                </span>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    );
}

export default Modal;

