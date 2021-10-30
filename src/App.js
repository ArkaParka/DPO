import './App.css';

import React, {useState} from "react";
import UnauthorizedUserHomePage from "./components/UnauthorizedUserHomePage/UnauthorizedUserHomePage";
import {onLogin} from "./App.utils";

function App() {
    const [isLogged, setIsLogged] = useState(false);

    const handleAuthorizationUser = (isAuthorize) => {
        setIsLogged(isAuthorize);
    }

    onLogin();

  return (
    <div className="App">
      { !isLogged && <UnauthorizedUserHomePage onAuthorize={handleAuthorizationUser} /> }
    </div>
  );
}

export default App;
