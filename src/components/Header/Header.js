import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from "../../context/AuthContext";
import cl from "classnames";
import {FaRegFontAwesomeLogoFull} from "react-icons/fa";
import AuthorizationButton from "../Buttons/AuthorizationButton/AuthorizationButton";
import PersonalAccountButton from "../Buttons/PersonalAccountButton/PersonalAccountButton";
import './Header.scss';

export const Header = ({}) => {
    const {isAuthenticated} = useAuth();

    const [isActive, setIsActive] = useState({
        home: false,
        courses: false,
    });

    function handleLinkClick(e) {
        const homeActive = {
            home: true,
            courses: false,
        };
        const coursesActive = {
            home: false,
            courses: true,
        };

        switch (e.target.id) {
            case 'home':
                setIsActive(homeActive);
                localStorage.setItem('isActive', JSON.stringify(homeActive));
                break;
            case 'courses':
                setIsActive(coursesActive);
                localStorage.setItem('isActive', JSON.stringify(coursesActive));
                break;
        }
    }

    useEffect(() => {
        if (localStorage.getItem('isActive'))
            setIsActive(JSON.parse(localStorage.getItem('isActive')));
    }, []);

    return (
        <header className={cl('section-outer', 'section-header')}>
            <div className={cl('section-inner', 'header')}>
                <div className={cl('header-logo')}>
                    <Link className={cl('logo')} to='/' onClick={handleLinkClick}>
                        <FaRegFontAwesomeLogoFull id='home'/>
                    </Link>
                </div>
                <div className={cl('header-controls')}>
                    <nav className={cl('header-controls-links')}>
                        <ul className={cl('menu')}>
                            <li className={cl('menu-item', {active: isActive.home})}>
                                <Link
                                    id='home'
                                    className={cl('item')}
                                    to='/'
                                    onClick={handleLinkClick}
                                >
                                    Главная
                                </Link>
                            </li>
                            <li className={cl('menu-item', {active: isActive.courses})}>
                                <Link
                                    id='courses'
                                    className={cl('item')}
                                    to='/courses'
                                    onClick={handleLinkClick}
                                >
                                    Курсы
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cl('header-operation')}>
                    {
                        isAuthenticated ?
                            <PersonalAccountButton/> :
                            <AuthorizationButton />
                    }
                </div>
            </div>
        </header>
    );
}
