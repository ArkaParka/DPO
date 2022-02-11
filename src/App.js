import React from "react";
import { Route } from 'react-router';
import Home from "./components/Home/Home";
import {Layout} from "./components/Layout/Layout";
import Courses from "./components/Courses/Courses";
import Course from "./components/Course/Course";
import Profile from "./components/Profile/Profile";
import CreateCoursePage from "./components/CreateCoursePage/CreateCoursePage";
import QueryAPI from "./api/QueryAPI";
import './App.scss';

function App() {

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/courses/course' component={Course} />
            <Route exact path='/create-course-page' component={CreateCoursePage} />
            <Route exact path='/account' component={Profile} />
            <Route exact path='/api' component={QueryAPI} />
        </Layout>
    );
}

export default App;
