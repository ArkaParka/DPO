import './ProfileContent.scss';
import cl from "classnames";
import React from "react";
import CreateCourseButton from "../../Buttons/CreateCourseButton/CreateCourseButton";

function ProfileContent() {
    return (
        <div className={cl('profile-content')}>
            <CreateCourseButton />
        </div>
    );
}

export default ProfileContent;
