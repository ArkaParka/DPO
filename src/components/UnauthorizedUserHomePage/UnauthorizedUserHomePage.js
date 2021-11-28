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
import {FaRegFontAwesomeLogoFull} from "react-icons/all";

function UnauthorizedUserHomePage(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(regModalData);
    const [activeHomeClass, setActiveHomeClass] = useState(true);
    const [activeCoursesClass, setActiveCoursesClass] = useState(false);

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

    const handleMenuItemClick = (e) => {
        switch (e.target.id){
            case 'home':
                setActiveHomeClass(true);
                setActiveCoursesClass(false);
                break;
            case 'courses':
                setActiveCoursesClass(true);
                setActiveHomeClass(false);
                break;

        }
    }

    return (
        <div className={cl('home-page')}>
            <Router>
                <div>
                    <header className={cl('section-outer', 'section-header')}>
                        <div className={cl('section-inner', 'header')}>
                            <div className={cl('header-logo')}>
                                <a className={cl('logo')} href='/'>
                                    <FaRegFontAwesomeLogoFull />
                                </a>
                            </div>
                            <div className={cl('header-controls')}>
                                <nav className={cl('header-controls-links')}>
                                    <ul className={cl('menu')}>
                                        <li className={cl('menu-item', {active: activeHomeClass})}>
                                            <Link id='home' className={cl('item')} to='/' onClick={handleMenuItemClick}>Главная</Link>
                                        </li>
                                        <li className={cl('menu-item', {active: activeCoursesClass})}>
                                            <Link id='courses' className={cl('item')} to='/courses' onClick={handleMenuItemClick}>Курсы</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className={cl('header-operation')}>
                                <AuthorizationButton onAuthorization={handleAuthorization}/>
                            </div>
                        </div>
                    </header>
                    <section className={cl('section-outer')}>
                        {isModalOpen &&
                        <Modal onOpenAuthModal={handleAuthorization} onSubmit={handleModalSubmit} data={modalData}/>}

                        <div className={cl('body-content')}>
                            <Switch>
                                <Route path="/courses">
                                    <Courses/>
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </div>
                    </section>
                </div>
            </Router>
        </div>
    )
}

export default UnauthorizedUserHomePage;
