import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import QueryAPI from "./api/QueryAPI";

ReactDOM.render(
    <QueryAPI />,
    // <AuthProvider>
    //     <BrowserRouter>
    //         <App />
    //     </BrowserRouter>
    // </AuthProvider>,
  document.getElementById('root')
);

registerServiceWorker();
