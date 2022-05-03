import './Profile.scss';
import cl from "classnames";
import React, {useEffect, useState} from "react";
import {AuthProvider, useAuth} from "../../context/AuthContext";
import {AiOutlinePlus} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {BsFillJournalBookmarkFill} from "react-icons/bs";
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import userDefaultAvatar from '../../imgs/default-avatar.jpg';
import AvailableCourses from "./AvailableCourses/AvailableCourses";
import {Card} from "react-bootstrap";
import courseImg from "../../imgs/brain.jpg";
import {Link} from "react-router-dom";

const page = {
    availableCourses: "AvailableCourses",
    profileSettings: "ProfileSettings"
};

const user = {
    student: "student",
    teacher: "teacher"
}

function Profile() {
    const [userInfo, setUserInfo] = useState({name: 'Антон Антонов', email: 'default@mail.ru'});
    const {keycloak} = useAuth();
    const [pageState, setPageState] = useState(page.availableCourses);
    const [userState, setUserState] = useState(user.teacher);

    useEffect(() => {
        if (keycloak) {
            keycloak.loadUserInfo().then(userInfo => {
                setUserInfo(userInfo);
            });
        }
    }, [])

    return (
        // <AuthProvider>
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
                            onClick={() => setPageState(page.availableCourses)}
                            title="Мои курсы"
                        >
                            Мои курсы
                        </MenuItem>
                        {
                            userState === user.teacher &&
                            <>
                                <MenuItem
                                    className={cl('create-course')}
                                    icon={<AiOutlinePlus/>}
                                    title="Создать новый курс"
                                >
                                    <Link
                                        id='new-course'
                                        to='/create-course-program'
                                    >
                                        Создать новый курс
                                    </Link>
                                </MenuItem>
                            </>
                        }
                        <MenuItem
                            className={cl('profile-settings')}
                            icon={<FiSettings/>}
                            onClick={() => setPageState(page.profileSettings)}
                            title="Настойки пользователя"
                        >
                            Настойки пользователя
                        </MenuItem>
                    </Menu>
                </ProSidebar>
                <div className="profile-content">
                    {
                        pageState === page.availableCourses &&
                        <AvailableCourses isTeacher={userState === user.teacher}/>
                    }
                    {
                        pageState === page.profileSettings &&
                        "settings"
                    }
                </div>
            </section>
        // </AuthProvider>
    );
}

export default Profile;
