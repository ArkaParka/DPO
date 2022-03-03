import React, {Component, useState} from 'react';
import cl from "classnames";

const course = {
    "name": "Новый курс",
    "description": "Описание нового курса",
    "speciality": "string",
    "professor": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "hours": 0,
    "contentImage": ""
};

const updatedCourse = {
    "id": "6220a96e28160b846e6f3108",
    "name": "string",
    "description": "string",
    "speciality": "string",
    "professor": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "hours": 0,
    "contentImage": ""
};

const module = {
    "courseId": "6220a96e28160b846e6f3108",
    "name": "NEW COURSE",
    "description": "NEW DESCRIPTION",
    "order": 0
}

export const APIs = {
    announcement: {},
    course: {
        create: '/api/Course/Create',
        get: 'api/Course/Get/',
        update: 'api/Course/Update',
        delete: 'api/Course/Delete/'
    },
    сourseCatalog: {
        getAll: 'api/CourseCatalog/GetAll',
        get: 'api/CourseCatalog/Get?id='
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
        case 'DELETE': return {
            method: method,
            headers: {
                accept: '*/*' ,
            }
        };
    }
}

export function sendRequest(url, method, data) {
    console.log(requestHeader(method, data));
    return fetch(url, requestHeader(method, data))
        .then(response => {
            if (response.status === 200 || response.status === 201) {
                return response.json();
            }
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

export async function createCourse(course) {
    let response = (await sendRequest(APIs.course.create, 'POST', course)).response;
    return response;
}

export async function getCourse(id = '6220a96e28160b846e6f3108') {
    let response = (await sendRequest(APIs.course.get + id, 'GET')).response;
    return response;
}

export async function updateCourse(course) {
    let response = (await sendRequest(APIs.course.update, 'POST', course)).response;
    return response;
}

export async function deleteCourse(id = '6220a50228160b846e6f30fe') {
    let response = (await sendRequest(APIs.course.delete + id, 'DELETE')).response;
    return response;
}

export async function getCourseCatalogAll() {
    let response = (await sendRequest(APIs.сourseCatalog.getAll, 'GET')).response;
    return response;
}

export async function getCourseCatalogById(id = '6220a96e28160b846e6f3108') {
    let response = (await sendRequest(APIs.сourseCatalog.get + id, 'GET')).response;
    return response;
}

export async function createModule(courseId, module) {
    let response = (await sendRequest(APIs.course.create, 'POST', module)).response;
    return response;
}

export async function getCourseModules(courseId) {
    let response = (await getCourse(courseId)).response;
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
        this.handleCleanState = this.handleCleanState.bind(this);
        this.handleCourseCreate = this.handleCourseCreate.bind(this);
        this.handleCourseGet = this.handleCourseGet.bind(this);
        this.handleCourseUpdate = this.handleCourseUpdate.bind(this);
        this.handleCourseDelete = this.handleCourseDelete.bind(this);
        this.handleCourseCatalogGetAll = this.handleCourseCatalogGetAll.bind(this);
        this.handleCourseCatalogGet = this.handleCourseCatalogGet.bind(this);
    }

    async handleCourseCreate() {
        let response = await createCourse(course);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleCourseGet() {
        let response = await getCourse();
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleCourseUpdate() {
        let response = await updateCourse(Object.assign(updatedCourse, {description: 'course is up date'}));
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleCourseDelete() {
        let response = await deleteCourse();
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleCourseCatalogGetAll() {
        let response = await getCourseCatalogAll();
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleCourseCatalogGet() {
        let response = await getCourseCatalogById();
        this.setState({
            response: JSON.stringify(response)
        });
    }

    handleCleanState() {
        this.setState({
            response: ''
        });
    }

    render() {
        return (
            <div className={cl('CoursesAPI')}>
                <button onClick={this.handleCleanState}>clean</button>
                <button onClick={this.handleCourseCreate}>course create</button>
                <button onClick={this.handleCourseGet}>course get</button>
                <button onClick={this.handleCourseUpdate}>course update</button>
                <button onClick={this.handleCourseDelete}>course delete</button>
                <button onClick={this.handleCourseCatalogGetAll}>course catalog get all</button>
                <button onClick={this.handleCourseCatalogGet}>course catalog get by ID</button>
                <APIResponse response={this.state.response}/>
            </div>
        );
    }
}

export default CoursesAPI;