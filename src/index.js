import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import CoursesAPI from "./api/CoursesAPI";

ReactDOM.render(
    // <CoursesAPI />,
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </AuthProvider>,
  document.getElementById('root')
);

registerServiceWorker();
