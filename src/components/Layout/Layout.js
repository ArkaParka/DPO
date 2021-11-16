import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../NavMenu/NavMenu';
import cl from "classnames";
import {authModalData, regModalData} from "../../App.const";
import {onLogin, onRegister} from "../../App.utils";
import Modal from "../Modal/Modal";

export const Layout = (props) => {
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
                })
                .then(() => {
                    console.log('you are logged in');
                });
        }
        if (!isRegistration && userData) {
            onLogin(userData)
                .catch((e) => {
                    console.log('ERROR', e);
                })
                .then(() => {
                    console.log('you are logged in');
                });
        }
    }

    return (
        <div>
            <NavMenu onOpenAuthModal={handleAuthorization} />
            <Container className={cl('body-content')}>
                <div>
                    { isModalOpen && <Modal onOpenAuthModal={handleAuthorization} onSubmit={handleModalSubmit} data={modalData}/> }
                    { props.children }
                </div>
            </Container>
        </div>
    );
}
