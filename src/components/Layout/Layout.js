import React from 'react';
import { Container } from 'reactstrap';
import { Header } from '../Header/Header';
import cl from "classnames";
import './Layout.scss';

export const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Container className={cl('body-content')}>
                { children }
            </Container>
        </>
    );
}

