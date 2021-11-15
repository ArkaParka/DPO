import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AuthProvider} from "./context/AuthContext";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>,
  document.getElementById('root')
);

registerServiceWorker();
