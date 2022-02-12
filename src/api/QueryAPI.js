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
            announcement: {},
            сourseCatalog: {
                get: 'api/CourseCatalog/Get',
            },
            module: {},
            task: {},
            test: {},
        };
    }

    authorizationHeader(method) {
        // if(!this.props.keycloak) return {};
        // console.log('this.props.keycloak.token', this.props.keycloak.token);
        return {
            method: method,
            headers: {
                // "Authorization": "Bearer " + this.props.keycloak.token,
                accept: 'text/plain',
            }
        };
    }

    handleClick = (url, method) => {
        fetch(url, this.authorizationHeader(method))
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
                <button onClick={() => this.handleClick(this.URL.сourseCatalog.get, 'GET')}>CourseCatalog Get</button>
                <button onClick={() => this.handleClick(this.URL.сourseCatalog.get, 'GET')}>Announcement Get</button>
                <APIResponse response={this.state.response}/>
            </div>
        );
    }
}

export default QueryAPI;