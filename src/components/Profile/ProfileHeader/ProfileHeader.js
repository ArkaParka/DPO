import './ProfileHeader.scss';
import cl from "classnames";
import React from "react";
import logo from '../../../imgs/user-avatar.png';

function ProfileHeader() {
    return (
        <div className={cl('header')}>
            <div className={cl('user-avatar')}>
                <img src={logo}/>
            </div>
            <div className={cl('user-info')}>
                <div className={cl('name')}>
                    Иван Иванов
                </div>
                <div className={cl('login')}>
                    @IvanIvanov
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;
