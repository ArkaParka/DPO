import './App.scss';

import React, { useEffect } from "react";
import { Route } from 'react-router';
import Home from "./components/Home/Home";
import { useAuth } from "./context/AuthContext";
import { Layout } from "./components/Layout/Layout";
import Courses from "./components/Courses/Courses";
import Course from "./components/Course/Course";

function App() {
    const { isAuthenticated, login, logout } = useAuth();

    useEffect(() => {
        console.log('isAuthenticated', isAuthenticated);
    });

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/courses/course' component={Course} />
            {/*<Route path='/user' component={isAuthenticated ? () => { return <User /> } : () => { login(); return null; }} />*/}
            <Route path='/login' component={() => { login(); return null }} />
            <Route path='/logout' component={() => { logout(); return null }}></Route>
        </Layout>
    );
}

export default App;
