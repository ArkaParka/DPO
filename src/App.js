import React from "react";
import { Route } from 'react-router';
import Home from "./components/Home/Home";
import {Layout} from "./components/Layout/Layout";
import Courses from "./components/Courses/Courses";
import Course from "./components/Course/Course";
import Profile from "./components/Profile/Profile";
import CreateCoursePage from "./components/CreateCoursePage/CreateCoursePage";
import CoursesAPI from "./api/CoursesAPI";
import './App.scss';
// web.local.dev/bff/auth/getuser

function App() {

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/courses/course' component={Course} />
            <Route exact path='/create-course-page' component={CreateCoursePage} />
            <Route exact path='/account' component={Profile} />
            <Route exact path='/api' component={CoursesAPI} />
        </Layout>
    );
}

export default App;
