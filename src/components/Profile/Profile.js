import './Profile.scss';
import cl from "classnames";
import React, {useEffect, useState} from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import ProfileContent from "./ProfileContent/ProfileContent";
import {useAuth} from "../../context/AuthContext";

function Profile() {
    const [userInfo, setUserInfo] = useState(null);
    const {keycloak} = useAuth();

    useEffect(() => {
        keycloak.loadUserInfo().then(userInfo => {
            setUserInfo(userInfo);
        });
    }, [])

    return (
        <section className={cl('section-outer')}>
            <div className={cl('profile-page')}>
                <div className={cl('profile-page-header')}>
                    <div className={cl('page-fragment', 'limited')}>
                        <ProfileHeader userInfo={userInfo}/>
                    </div>
                </div>
                <div className={cl('profile-page-content')}>
                    <div className={cl('page-fragment', 'limited')}>
                        <div className={cl('content')}>
                            <ProfileMenu />
                            <ProfileContent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
