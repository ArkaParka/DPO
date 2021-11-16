import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import cl from "classnames";
import {FaRegFontAwesomeLogoFull} from "react-icons/all";
import AuthorizationButton from "../AuthorizationButton/AuthorizationButton";
// import './NavMenu.css';

export const NavMenu = (props) => {
    const { isAuthenticated } = useAuth();

    return (
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
                            <li className={cl('menu-item', {active: false})}>
                                <Link id='home' className={cl('item')} to='/' >Главная</Link>
                            </li>
                            <li className={cl('menu-item', {active: false})}>
                                <Link id='courses' className={cl('item')} to='/courses' >Курсы</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cl('header-operation')}>
                    { !isAuthenticated && <AuthorizationButton  onAuthorization={props.onOpenAuthModal}/> }
                </div>
            </div>
        </header>
    );
}
