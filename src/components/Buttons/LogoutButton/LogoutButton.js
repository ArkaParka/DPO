import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import cl from "classnames";
import './LogoutButton.scss';
import Button from "@mui/material/Button";

class LogoutButton extends Component {

    logout() {
        this.props.history.push('/');
        this.props.keycloak.logout();
    }

    render() {
        return (
            <Button
                className={cl('logout-btn', 'btn')}
                onClick={() => this.logout()}
                variant="contained"
            >
                Выйти
            </Button>
        );
    }
}

export default withRouter(LogoutButton);