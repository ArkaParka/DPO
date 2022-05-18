import './AuthorizationButton.scss';
import cl from "classnames";
import {IconButton} from "@mui/material";
import {BsDoorOpen} from "react-icons/bs";

function AuthorizationButton() {

    function onLogin() {
        window.location = 'https://web.local.dev/bff/auth/logout';
        window.location = 'https://web.local.dev/bff/auth/login';
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
