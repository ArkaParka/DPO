import './ProfileHeader.scss';
import cl from "classnames";
import React, {useEffect, useState} from "react";
import logo from '../../../imgs/user-avatar.png';

function ProfileHeader({userInfo}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name);
            setEmail(userInfo.email);
        }
        console.log('userInfo', userInfo);
    });

    return (
        <div className={cl('header')}>
            <div className={cl('user-avatar')}>
                <img src={logo}/>
            </div>
            <div className={cl('user-info')}>
                <div className={cl('name')}>
                    {name}
                </div>
                <div className={cl('login')}>
                    {email}
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;
