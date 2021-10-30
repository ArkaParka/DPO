import './Modal.scss';
import ModalContentGroup from "./ModalContentGroup/ModalContentGroup";
import React, {useState} from "react";


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
        emailConfirmed: false,
    });
    const [password2, changePassword2] = useState();

    const onChangeName = (event) => {
        changeUserState({...user, firstName: event.target.value});
    }

    const onChangeLastName = (event) => {
        changeUserState({...user, lastName: event.target.value});
    }

    const onChangeUsername = (event) => {
        changeUserState({...user, username: event.target.value});
    }

    const onChangeEmail = (event) => {
        changeUserState({...user, email: event.target.value});
    }

    const onChangePassword = (event) => {
        changeUserState({...user, password: event.target.value});
    }

    const onChangePassword2 = (event) => {
        changePassword2(event.target.value);
    }

    const handleCloseModal = () => {
        props.onSubmit({isOpen: false, userData: null, isRegistration: isRegistration});
    }

    const handleSubmitForm = () => {
        props.onSubmit({isOpen: false, userData: user, isRegistration: isRegistration});
    }

    const confirmPassword = () => {
        // user.password;
    }

    return (
        <div className="modal">
            <div className="modal-overlay" onClick={handleCloseModal}></div>
            <div className="modal-container">
                <div className="modal modal-header">
                    <h2>{title}</h2>
                </div>
                <form
                    className="modal-content"
                    method="post"
                    action="https://ocelot.local.dev/api/Users/register"
                    id="registerForm"
                    onSubmit={handleSubmitForm}
                >
                    {
                        isRegistration && (
                            <>
                                <ModalContentGroup
                                    label={fields.firstName.label}
                                    input={fields.firstName.input}
                                    value={user.firstName}
                                    onInputChange={onChangeName}
                                    message={fields.firstName.message}
                                />

                                <ModalContentGroup
                                    label={fields.lastName.label}
                                    input={fields.lastName.input}
                                    value={user.lastName}
                                    onInputChange={onChangeLastName}
                                    message={fields.lastName.message}
                                />

                                <ModalContentGroup
                                    label={fields.email.label}
                                    input={fields.email.input}
                                    value={user.email}
                                    onInputChange={onChangeEmail}
                                    message={fields.email.message}
                                />
                            </>
                        )
                    }

                    <ModalContentGroup
                        label={fields.username.label}
                        input={fields.username.input}
                        value={user.username}
                        onInputChange={onChangeUsername}
                        message={fields.username.message}
                    />

                    <ModalContentGroup
                        label={fields.password.label}
                        input={fields.password.input}
                        value={user.password}
                        onInputChange={onChangePassword}
                        message={fields.password.message}
                    />

                    {
                        isRegistration && (
                            <ModalContentGroup
                                label={fields.password2.label}
                                input={fields.password2.input}
                                value={password2}
                                onInputChange={onChangePassword2}
                                message={fields.password2.message}
                            />
                        )
                    }


                    <ModalContentGroup isError={true} />

                    <div className="modal-content-btn">
                        <button className="btn btn_blue">{btnText}</button>
                    </div>
                    {
                        isRegistration && (
                            <div className="modal-content-link">
                                <span>Уже есть аккаунт? <strong data-changemodal="modal_auth">Авторизироваться</strong></span>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    );
}

export default Modal;

