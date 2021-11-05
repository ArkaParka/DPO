import AuthorizationButton from "../AuthorizationButton/AuthorizationButton";
import Modal from "../Modal/Modal";
import React, {useState} from "react";
import {authModalData, regModalData} from "../../App.const";
import {onLogin, onRegister} from "../../App.utils";
import cl from "classnames";
import Home from './Home/Home';
import Courses from './Courses/Courses';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
        console.log('userData', userData);
        setIsModalOpen(isOpen);
        if (isRegistration && userData) {
            onRegister(userData)
                .catch(() => {
                    console.log('ERROR');
                })
                .then(() => {
                    props.onAuthorize(true);
                });
        }
        if (!isRegistration && userData) {
            onLogin(userData)
                .catch(() => {
                    console.log('ERROR');
                })
                .then(() => {
                    props.onAuthorize(true);
                });
        }
    }

    return (
        <div className={cl('home-page')}>
            <Router>
                <div>
                    <header className={cl('section-header')}>
                        <Link className={cl('item')} to='/'>Home</Link>
                        <Link className={cl('item')} to='/courses'>Courses</Link>
                        <AuthorizationButton onAuthorization={handleAuthorization}/>
                    </header>
                    {isModalOpen &&
                    <Modal onOpenAuthModal={handleAuthorization} onSubmit={handleModalSubmit} data={modalData}/>}

                    <Switch>
                        <Route path="/courses">
                            <Courses/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default UnauthorizedUserHomePage;
