import './AuthorizationButton.scss';
import cl from "classnames";
import {IconButton} from "@mui/material";
import {BsDoorOpen} from "react-icons/bs";
import Keycloak from "keycloak-js";
import {useState} from "react";

function AuthorizationButton({}) {
    // const {isAuthenticated, keycloak} = useAuth();

    function onLogin() {
    }

    return (
        <IconButton
            className={cl('authorization-btn')}
            onClick={() => onLogin()}
            color="primary"
            aria-label="upload picture"
            component="span"
        >
            <BsDoorOpen />
        </IconButton>
    );
}

export default AuthorizationButton;
