import './ProfileMenu.scss';
import cl from "classnames";
import React from "react";

function ProfileMenu() {
    return (
        <div className={cl('profile-menu')}>
            <ul>
                <li className={cl('profile-menu-item')}>
                    <a>
                        Расписание
                    </a>
                </li>
                <li className={cl('profile-menu-item')}>
                    <a>
                        Курсы
                    </a>
                </li>

            </ul>
        </div>
    );
}

export default ProfileMenu;
