import './PersonalAccountButton.scss';
import cl from "classnames";
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import {DropdownButton, Dropdown} from "react-bootstrap";

function PersonalAccountButton({keycloak}) {
    return (
        <DropdownButton
            className={cl('personal-account-btn', 'btn')}
            id="dropdown-basic-button"
            title=""
        >
            <Link to='/account'>
                <Dropdown.Item href="#/action-1">Профиль</Dropdown.Item>
            </Link>
            <Link to='/'>
                <Dropdown.Item
                    onClick={() => {keycloak.logout()}}
                    href="#/action-2"
                >
                    Выйти
                </Dropdown.Item>
            </Link>
        </DropdownButton>
    );
}

export default PersonalAccountButton;
