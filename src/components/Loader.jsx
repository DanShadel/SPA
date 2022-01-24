import React from 'react';
import styled from 'styled-components';
import { Bars } from 'react-loading-icons';
import { fadeIn } from '../helpers/animations';
const LoaderWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 2%;
    animation: ${fadeIn} .25s linear;
`;

const Loader = () => {
    return (
        <Container>
            <LoaderWrapper>
                <Bars height='48' width='48' color='#ecebe8' />
            </LoaderWrapper>
        </Container>
    );
};

export default Loader;