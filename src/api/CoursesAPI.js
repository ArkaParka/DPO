import React, {Component, useState} from 'react';
import cl from "classnames";

export const APIs = {
    announcement: {},
    course: {
        create: '/api/Course/Create',
        get: 'api/Course/Get/'
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
    console.log(requestHeader(method, data));
    return fetch(url, requestHeader(method, data))
        .then(response => {
            if (response.status === 200)
                return response.json();
            else
                return { status: response.status, message: response.statusText }
        })
        .then(json => {
            return {response: json};
        })
        .catch(err => {
            return {response: err.toString()}
        });
}

export function createCourse(course) {
    sendRequest(APIs.course.create, 'POST', course);
}

export function createCourseModules(modules) {
    modules.forEach(module => {
        sendRequest(APIs.module.create, 'POST', module);
    })
}

export async function createModule(courseId, module) {
    let response = (await sendRequest(APIs.course.create, 'POST', module)).response;
    return response;
}

export async function getCourseModules(courseId) {
    let response = (await sendRequest(APIs.course.get + courseId, 'GET')).response;
    return response?.modules ? response.modules : [];
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