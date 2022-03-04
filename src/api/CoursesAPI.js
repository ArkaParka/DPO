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
    "id": "6218b1a528160b846e6f30e9",
    "name": "NEW COURSE",
    "description": "NEW DESCRIPTION",
    "order": 0
};

const task = {
    "moduleId": "6218b1a528160b846e6f30e9",
    "id": "6221c44e28160b846e6f3117",
    "name": "new task",
    "shortDescription": "string",
    "order": 0
};

const test = {
    "moduleId": "6218b1a528160b846e6f30e9",
    "id": "6221c4ec28160b846e6f3118",
    "name": "newTest",
    "description": "string",
    "order": 0
};

const testQuestions = {
    "testId": "6221c4ec28160b846e6f3118",
    "questions": [
        {
            "question": "string",
            "anwsers": [
                {
                    "anwser": "string",
                    "isCorrect": true
                }
            ],
            "multipleAnwsers": true
        }
    ]
};

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
        get: '/api/Module/Get/',
        update: '/api/Module/Update',
        delete: '/api/Module/Delete/'
    },
    task: {
        create: '/api/Task/Create',
        get: '/api/Task/Get/',
        update: '/api/Task/Update',
        delete: '/api/Task/Delete/'
    },
    test: {
        create: '/api/Test/Create',
        get: '/api/Test/Get/',
        update: '/api/Test/Update',
        delete: '/api/Test/Delete/',
        setQuestions: '/api/Test/SetQuestions',
        getQuestionsWithAnswers: '/api/Test/GetQuestionsWithAnwsers?testId='
    },
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
    return fetch(url, requestHeader(method, data))
        .then(response => {
            console.log('respppp', response.clone());
            if (response.status === 200 || response.status === 201) {
                console.log('respppp 2222', response.clone().json());
                return response.clone().json();
            }
            else
                return { status: response.status, message: response.statusText }
        })
        .then(json => {
            return {response: json};
        })
        .catch(err => {
            let isDeleteApi = err.toString() === "SyntaxError: Unexpected end of JSON input";
            return {response: isDeleteApi ? "the deletion was successful" : err.toString()}
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

export async function createModule(module) {
    let response = (await sendRequest(APIs.module.create, 'POST', module)).response;
    return response;
}

export async function getModule(id) {
    let response = (await sendRequest(APIs.module.get + id, 'GET')).response;
    return response;
}

export async function updateModule(module) {
    let response = (await sendRequest(APIs.module.update, 'POST', module)).response;
    return response;
}

export async function deleteModule(id) {
    let response = (await sendRequest(APIs.module.delete + id, 'DELETE')).response;
    return response;
}

export async function createTask(task) {
    let response = (await sendRequest(APIs.task.create, 'POST', task)).response;
    return response;
}

export async function getTask(id) {
    let response = (await sendRequest(APIs.task.get + id, 'GET')).response;
    return response;
}

export async function updateTask(task) {
    let response = (await sendRequest(APIs.task.update, 'POST', task)).response;
    return response;
}

export async function deleteTask(id) {
    let response = (await sendRequest(APIs.task.delete + id, 'DELETE')).response;
    return response;
}

export async function createTest(test) {
    let response = (await sendRequest(APIs.test.create, 'POST', test)).response;
    return response;
}

export async function getTest(id) {
    let response = (await sendRequest(APIs.test.get + id, 'GET')).response;
    return response;
}

export async function updateTest(test) {
    let response = (await sendRequest(APIs.test.update, 'POST', test)).response;
    return response;
}

export async function deleteTest(id) {
    let response = (await sendRequest(APIs.test.delete + id, 'DELETE')).response;
    return response;
}

export async function setQuestionsTest(obj) {
    let response = (await sendRequest(APIs.test.setQuestions, 'POST', obj)).response;
    return response;
}

export async function getQuestionsWithAnswers(id) {
    let response = (await sendRequest(APIs.test.getQuestionsWithAnswers + id, 'POST')).response;
    return response;
}

// --------------
export async function getCourseModules(courseId = '6221d05728160b846e6f3120') {
    let response = await getCourse(courseId);
    console.log('resp', response)
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
        // *** COURSE ***
        this.handleCourseCreate = this.handleCourseCreate.bind(this);
        this.handleCourseGet = this.handleCourseGet.bind(this);
        this.handleCourseUpdate = this.handleCourseUpdate.bind(this);
        this.handleCourseDelete = this.handleCourseDelete.bind(this);
        // *** COURSE CATALOG ***
        this.handleCourseCatalogGetAll = this.handleCourseCatalogGetAll.bind(this);
        this.handleCourseCatalogGet = this.handleCourseCatalogGet.bind(this);
        // *** MODULE ***
        this.handleModuleCreate = this.handleModuleCreate.bind(this);
        this.handleModuleGet = this.handleModuleGet.bind(this);
        this.handleModuleUpdate = this.handleModuleUpdate.bind(this);
        this.handleModuleDelete = this.handleModuleDelete.bind(this);
        // *** TASK ***
        this.handleTaskCreate = this.handleTaskCreate.bind(this);
        this.handleTaskGet = this.handleTaskGet.bind(this);
        this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        // *** TEST ***
        this.handleTestCreate = this.handleTestCreate.bind(this);
        this.handleTestGet = this.handleTestGet.bind(this);
        this.handleTestUpdate = this.handleTestUpdate.bind(this);
        this.handleTestDelete = this.handleTestDelete.bind(this);
        this.handleTestSetQuestions = this.handleTestSetQuestions.bind(this);
        this.handleTestGetQuestionsWithAnswers = this.handleTestGetQuestionsWithAnswers.bind(this);

        this.handleGetCourseModules = this.handleGetCourseModules.bind(this);
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

    async handleModuleCreate() {
        let response = await createModule(module);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleModuleGet() {
        let response = await getModule(module.id);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleModuleUpdate() {
        let response = await updateModule(module);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleModuleDelete() {
        let response = await deleteModule('6221c10728160b846e6f3114');
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTaskCreate() {
        let response = await createTask(task);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTaskGet() {
        let response = await getTask(task.id);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTaskUpdate() {
        let response = await updateTask(task);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTaskDelete() {
        let response = await deleteTask('6221c36a28160b846e6f3115');
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTestCreate() {
        let response = await createTest(test);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTestGet() {
        let response = await getTest(test.id);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTestUpdate() {
        let response = await updateTest(test);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTestDelete() {
        let response = await deleteTest('6221c69328160b846e6f311a');
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTestSetQuestions() {
        let response = await setQuestionsTest(testQuestions);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleTestGetQuestionsWithAnswers() {
        let response = await getQuestionsWithAnswers(test.id);
        this.setState({
            response: JSON.stringify(response)
        });
    }

    async handleGetCourseModules() {
        let response = await getCourseModules();
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
                <hr/>
                <button onClick={this.handleCourseCreate}>course create</button>
                <button onClick={this.handleCourseGet}>course get</button>
                <button onClick={this.handleCourseUpdate}>course update</button>
                <button onClick={this.handleCourseDelete}>course delete</button>
                <hr/>
                <button onClick={this.handleCourseCatalogGetAll}>course catalog get all</button>
                <button onClick={this.handleCourseCatalogGet}>course catalog get by ID</button>
                <hr/>
                <button onClick={this.handleModuleCreate}>module create</button>
                <button onClick={this.handleModuleGet}>module get</button>
                <button onClick={this.handleModuleUpdate}>module update</button>
                <button onClick={this.handleModuleDelete}>module delete</button>
                <hr/>
                <button onClick={this.handleTaskCreate}>task create</button>
                <button onClick={this.handleTaskGet}>task get</button>
                <button onClick={this.handleTaskUpdate}>task update</button>
                <button onClick={this.handleTaskDelete}>task delete</button>
                <hr/>
                <button onClick={this.handleTestCreate}>test create</button>
                <button onClick={this.handleTestGet}>test get</button>
                <button onClick={this.handleTestUpdate}>test update</button>
                <button onClick={this.handleTestDelete}>test delete</button>
                <button onClick={this.handleTestSetQuestions}>test set questions</button>
                <button onClick={this.handleTestGetQuestionsWithAnswers}>test get questions with answers</button>
                <hr/>
                <button onClick={this.handleGetCourseModules}>get modules array</button>
                <hr/>
                <APIResponse response={this.state.response}/>
            </div>
        );
    }
}

export default CoursesAPI;