import React, { Component } from 'react';
import cl from "classnames";

export const APIs = {
    announcement: {},
    course: {
        create: '/api/Course/Create',
    },
    сourseCatalog: {
        get: 'api/CourseCatalog/Get',
    },
    module: {
        create: '/api/Module/Create',
    },
    task: {},
    test: {},
};

export function requestHeader(method, data = {}) {
    // if(!this.props.keycloak) return {};
    // console.log('this.props.keycloak.token', this.props.keycloak.token);
    switch (method) {
        case 'GET': return {
            method: method,
            headers: {
                // "Authorization": "Bearer " + this.props.keycloak.token,
                accept: 'text/plain',
            }
        };
        case 'POST': return {
            method: method,
            headers: {
                accept: '*/*' ,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
    }
}

export function sendRequest(url, method, data) {
    fetch(url, this.requestHeader(method, data))
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

export function createCourse(course) {
    sendRequest(APIs.course.create, 'POST', course);
}

export function createCourseModules(modules) {
    modules.forEach(module => {
        sendRequest(APIs.module.create, 'POST', module);
    })
}

class APIResponse extends Component {
    render() {
        if(!this.props.response)
            return (<div/>);
        else
            return ( <pre>{this.props.response}</pre> );
    }
}

class CoursesAPI extends Component {

    constructor(props) {
        super(props);
        this.state = { response: null };
        this.URL = APIs;
    }

    handleClick = (url, method) => {
        try {
            sendRequest(url, method);
        } catch (e) {
            console.log('ERROR to send request: ', e);
        }
    }

    render() {
        return (
            <div className={cl('CoursesAPI')}>
                <button onClick={() => this.handleClick(this.URL.сourseCatalog.get, 'GET')}>CourseCatalog Get</button>
                <APIResponse response={this.state.response}/>
            </div>
        );
    }
}

export default CoursesAPI;