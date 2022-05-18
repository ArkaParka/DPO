import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { FaRegFontAwesomeLogoFull } from "react-icons/fa";
import AuthorizationButton from "../Buttons/AuthorizationButton/AuthorizationButton";
import PersonalAccountButton from "../Buttons/PersonalAccountButton/PersonalAccountButton";
import cl from "classnames";
import './Header.scss';
import {getUserInfo} from "../../api/UserAPI";

export const Header = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    useEffect(async () => {
        let response = await getUserInfo()
        console.log(response);
        if (!response.status) {
            setIsAuthenticated(true);
        }
    }, [])

    return (
        <header className={cl('section-header')}>
            <div className={cl('section-inner', 'header')}>
                <div className={cl('header-logo')}>
                    <Link className={cl('logo')} to='/'>
                        <FaRegFontAwesomeLogoFull id='home'/>
                    </Link>
                </div>
                <div className={cl('header-controls')}>
                    <nav className={cl('header-controls-links')}>
                        <ul className={cl('menu')}>
                            <li className={cl('menu-item')}>
                                <Link
                                    id='home'
                                    className={cl('item')}
                                    to='/'
                                >
                                    Главная
                                </Link>
                            </li>
                            <li className={cl('menu-item')}>
                                <Link
                                    id='courses'
                                    className={cl('item')}
                                    to='/courses'
                                >
                                    Курсы
                                </Link>
                            </li>
                            <li className={cl('menu-item')}>
                                <Link
                                    id='faq'
                                    className={cl('item')}
                                    to='/faq'
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li className={cl('menu-item')}>
                                <Link
                                    id='contacts'
                                    className={cl('item')}
                                    to='/contacts'
                                >
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cl('header-operation')}>
                    {
                        isAuthenticated ?
                            <PersonalAccountButton/> :
                            <AuthorizationButton/>
                    }
                </div>
            </div>
        </header>
    );
}
