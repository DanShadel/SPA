import React from 'react';
import styled from 'styled-components'
import { Provider } from 'react-redux';
import store from '../main.js';
import Navbar from './Navbar.jsx';
import { Routes } from './Routes.jsx';
import { BrowserRouter as Router } from "react-router-dom";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #191414;
    display: block;
    flex-direction: column;
    font-family: Sans-Serif;
    color: #ecebe8;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    height: 90%;
    margin-bottom: 5%;
`;

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Container>
                    <Navbar />
                    <Content>
                        <Routes />
                    </Content>
                </Container>
            </Router>
        </Provider >
    );
};

export default App;