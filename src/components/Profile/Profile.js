import './Profile.scss';
import cl from "classnames";
import React, {useEffect, useState} from "react";
import {useAuth} from "../../context/AuthContext";
import {AiOutlinePlus} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {BsFillJournalBookmarkFill} from "react-icons/bs";
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import userDefaultAvatar from '../../imgs/default-avatar.jpg';
import AvailableCourses from "./AvailableCourses/AvailableCourses";

const pageStates = {
    availableCourses: "AvailableCourses",
    profileSettings: "ProfileSettings"
};

function Profile() {
    const [userInfo, setUserInfo] = useState({name: 'Антон Антонов', email: 'default@mail.ru'});
    // const {keycloak} = useAuth();
    const [pageState, setPageState] = useState(pageStates.availableCourses);

    useEffect(() => {
        // if (keycloak) {
        //     keycloak.loadUserInfo().then(userInfo => {
        //         setUserInfo(userInfo);
        //     });
        // }
    }, [])

    function goToCreateCoursePage() {
        window.location.href = '/create-course-program';
    }

    return (
        <section className={cl('profile-page')}>
            <ProSidebar>
                <Menu iconShape="square">
                    <div className="profile-page_avatar">
                        <div className="avatar">
                            <img src={userDefaultAvatar} alt="user-avatar"/>
                        </div>
                        <div className="name">
                            {userInfo.name}
                        </div>
                        <div className="load-photo">
                            Загрузить фотографию
                        </div>
                    </div>
                    <MenuItem
                        className={cl('available-courses')}
                        icon={<BsFillJournalBookmarkFill/>}
                        onClick={() => setPageState(pageStates.availableCourses)}
                        title="Доступные курсы"
                    >
                        Доступные курсы
                    </MenuItem>
                    <MenuItem
                        className={cl('create-course')}
                        icon={<AiOutlinePlus/>}
                        onClick={() => goToCreateCoursePage()}
                        title="Создать новый курс"
                    >
                        Создать новый курс
                    </MenuItem>
                    <MenuItem
                        className={cl('profile-settings')}
                        icon={<FiSettings/>}
                        onClick={() => setPageState(pageStates.profileSettings)}
                        title="Настойки пользователя"
                    >
                        Настойки пользователя
                    </MenuItem>
                </Menu>
            </ProSidebar>
            <div className="profile-content">
                {
                    pageState === pageStates.availableCourses &&
                    <AvailableCourses/>
                }
                {
                    pageState === pageStates.profileSettings &&
                    "settings"
                }
            </div>
        </section>
    );
}

export default Profile;
