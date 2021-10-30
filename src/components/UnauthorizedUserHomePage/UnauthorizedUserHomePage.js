import AuthorizationButton from "../AuthorizationButton/AuthorizationButton";
import Modal from "../Modal/Modal";
import React, {useState} from "react";
import {authModalData, regModalData} from "../../App.const";
import {onLogin, onRegister} from "../../App.utils";

function UnauthorizedUserHomePage(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(regModalData);

    const handleAuthorization = ({isOpen, event}) => {
        setIsModalOpen(isOpen);
        switch (event) {
            case 'modal_reg':
                setModalData(regModalData);
                break;
            case 'modal_auth':
                setModalData(authModalData);
                break;
        }
    }

    const handleModalSubmit = ({isOpen, userData, isRegistration}) => {
        setIsModalOpen(isOpen);
        if (isRegistration && userData) {
            onRegister(userData)
                .catch(() => { console.log('ERROR'); })
                .then(() => {
                    props.onAuthorize(true);
                });
        }
        if (!isRegistration && userData) {
            onLogin(userData)
                .catch(() => { console.log('ERROR'); })
                .then(() => {
                    props.onAuthorize(true);
                });
        }
    }

    return (
        <div className='home-page'>
            <header className='section-header'>
                <AuthorizationButton onAuthorization={handleAuthorization} />
            </header>
            { isModalOpen && <Modal onSubmit={handleModalSubmit} data={modalData} /> }
        </div>
    )
}

export default UnauthorizedUserHomePage;
