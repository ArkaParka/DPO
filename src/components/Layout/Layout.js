import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../NavMenu/NavMenu';
import cl from "classnames";
import {authModalData, regModalData} from "../../App.const";
import {onLogin, onRegister} from "../../App.utils";
import Modal from "../Modal/Modal";

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
        <div>
            <NavMenu onOpenAuthModal={handleAuthorization} />
            <Container className={cl('body-content')}>
                <div>
                    { isModalOpen && <Modal onOpenAuthModal={handleAuthorization} onSubmit={handleModalSubmit} data={modalData}/> }
                    <Provider value={{openModal: handleAuthorization}}>
                        { children }
                    </Provider>
                </div>
            </Container>
        </div>
    );
}

