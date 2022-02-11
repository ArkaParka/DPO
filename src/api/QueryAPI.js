import React, { Component } from 'react';
import cl from "classnames";

class APIResponse extends Component {
    render() {
        if(!this.props.response)
            return (<div/>);
        else
            return ( <pre>{this.props.response}</pre> );
    }
}

class QueryAPI extends Component {

    constructor(props) {
        super(props);
        this.state = { response: null };
        this.URL = {
            getUserSettings: 'http://localhost:65100/api/v1/User/GetUserSettings',
            getAll: 'http://localhost:65100/api/v1/User/GetUserSettings',
        };
    }

    authorizationHeader(method) {
        if(!this.props.keycloak) return {};
        console.log('this.props.keycloak.token', this.props.keycloak.token);
        return {
            method: method,
            headers: {
                "Authorization": "Bearer " + this.props.keycloak.token,
                accept: 'text/plain',
                mode: "no-cors"
            }
        };
    }

    handleClick = (url, method) => {
        fetch(url, this.authorizationHeader(method))
        // fetch('http://localhost:9000/users', this.authorizationHeader())
            .then(response => {
                if (response.status === 200)
                    return response.json();
                else
                    return { status: response.status, message: response.statusText }
            })
            .then(json => this.setState((state, props) => ({
                response: JSON.stringify(json, null, 2)
            })))
            .catch(err => {
                this.setState((state, props) => ({ response: err.toString() }))
            })
    }

    render() {
        return (
            <div className={cl('QueryAPI')}>
                <button onClick={() => this.handleClick(this.URL.getUserSettings, 'GET')}>GetUserSettings</button>
                <button onClick={() => this.handleClick(this.URL.getAll, 'GET')}>GetAll</button>
                <APIResponse response={this.state.response}/>
            </div>
        );
    }
}

export default QueryAPI;