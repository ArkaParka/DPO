import './App.scss';

import React, { useEffect } from "react";
import { Route } from 'react-router';
import Home from "./components/Home/Home";
import { useAuth } from "./context/AuthContext";
import { Layout } from "./components/Layout/Layout";
import Courses from "./components/Courses/Courses";
import Course from "./components/Course/Course";
import Profile from "./components/Profile/Profile";
import CreateCoursePage from "./components/CreateCoursePage/CreateCoursePage";
import {BrowserRouter, Link} from "react-router-dom";
import Welcome from "./Welcome";
import Secured from "./Secured";

function App() {
    // const { isAuthenticated, login, logout } = useAuth();

    useEffect(() => {
        // console.log('isAuthenticated', isAuthenticated);
    });

    return (
        <BrowserRouter>
            <div className="container">
                <ul>
                    <li><Link to="/">public component</Link></li>
                    <li><Link to="/secured">secured component</Link></li>
                </ul>
                <Route exact path="/" component={Welcome} />
                <Route path="/secured" component={Secured} />
            </div>
        </BrowserRouter>
    );

    // return (
    //     <Layout>
    //         <Route exact path='/' component={Home} />
    //         <Route exact path='/courses' component={Courses} />
    //         <Route exact path='/courses/course' component={Course} />
    //         <Route exact path='/create-course-page' component={CreateCoursePage} />
    //         <Route exact path='/account' component={Profile} />
    //         {/*<Route path='/user' component={isAuthenticated ? () => { return <User /> } : () => { login(); return null; }} />*/}
    //         {/*<Route path='/login' component={() => { login(); return null }} />*/}
    //         {/*<Route path='/logout' component={() => { logout(); return null }}></Route>*/}
    //     </Layout>
    // );
}

export default App;
