import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import cl from "classnames";
import './LogoutButton.scss';

class LogoutButton extends Component {

    logout() {
        this.props.history.push('/');
        this.props.keycloak.logout();
    }

    render() {
        return (
            <button
                className={cl('logout-btn', 'btn', 'blue')}
                onClick={ () => this.logout() }
            >
                Выйти
            </button>
        );
    }
}

export default withRouter(LogoutButton);