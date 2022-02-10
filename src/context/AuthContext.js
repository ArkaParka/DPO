import React, { useState, useEffect, useContext } from "react";
import Keycloak from "keycloak-js";

export const AuthContext = React.createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({
    children
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [keycloak, setKeycloak] = useState(null);

    const getUser = async () => {
        const keycloak = Keycloak('/keycloak.json');

        keycloak.init({onLoad: 'login-required'})
            .then(authenticated => {
                setIsAuthenticated(authenticated);
                setKeycloak(keycloak);
            });

        keycloak.loadUserInfo()
            .then(userInfo => {
                setUserInfo(userInfo);
            });
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                userInfo,
                keycloak
            }}
        >
            {
                keycloak ?
                    (isAuthenticated ? children : <div>Unable to authenticate!</div>)
                    : <div>Initializing Keycloak...</div>
            }
        </AuthContext.Provider>
    );
};
