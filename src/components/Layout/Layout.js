import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Header } from '../Header/Header';
import cl from "classnames";
import { authModalData, regModalData } from "../../App.const";
import { onLogin, onRegister } from "../../App.utils";
import Modal from "../Modal/Modal";
import './Layout.scss';

export const { Provider, Consumer } = React.createContext({ openModal: null });

export const Layout = ({children}) => {
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
                let href = window.location.href + '/auth/login';
                window.history.pushState(null, null, href);
                break;
        }
    }

    const handleModalSubmit = ({isOpen, userData, isRegistration}) => {
        setIsModalOpen(isOpen);
        if (isRegistration && userData) {
            onRegister(userData)
                .catch((e) => {
                    console.log('ERROR', e);
                });
        }
        if (!isRegistration && userData) {
            onLogin(userData)
                .catch((e) => {
                    console.log('ERROR', e);
                });
        }
    }

    return (
        <>
            <Header onOpenAuthModal={handleAuthorization} />
            <Container className={cl('body-content')}>
                <>
                    { isModalOpen && <Modal onOpenAuthModal={handleAuthorization} onSubmit={handleModalSubmit} data={modalData}/> }
                    <Provider value={{openModal: handleAuthorization}}>
                        { children }
                    </Provider>
                </>
            </Container>
        </>
    );
}

