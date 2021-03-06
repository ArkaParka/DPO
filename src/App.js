import React from "react";
import {Route} from 'react-router';
import Home from "./components/Home/Home";
import {Layout} from "./components/Layout/Layout";
import Courses from "./components/Courses/Courses";
import Course from "./components/Course/Course";
import Profile from "./components/Profile/Profile";
import CoursesAPI from "./api/CoursesAPI";
import './App.scss';
import CourseProgram from "./components/CourseProgram/CourseProgram";
import CourseCompletion from "./components/CourseCompletion/CourseCompletion";
import Contacts from "./components/Contacts/Contacts";

// web.local.dev/bff/auth/getuser
// web.local.dev/bff/auth/login

function App() {

    return (
        <Layout>
            <Route exact path='/' component={Home}/>
            <Route exact path='/courses' component={Courses}/>
            <Route exact path='/courses/course' component={Course}/>
            <Route exact path='/create-course-program' component={CourseProgram}/>
            <Route exact path='/course-completion' component={CourseCompletion}/>
            <Route exact path='/account' component={Profile}/>
            <Route exact path='/contacts' component={Contacts}/>
            <Route exact path='/courses-api' component={CoursesAPI}/>
        </Layout>
    );
}

export default App;
