import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Logo from './Logo.jsx';
import GitHub from '../assets/GitHub-logo.png';
import Twitter from '../assets/Twitter-logo.png';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5%;
`;

const LogoContainer = styled.div`
	display:flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Back = styled.div`
    display: flex;
    border-bottom: 2px solid #ecebe8;
    width: 12px;
    height: 12px;
    border-left: 2px solid #ecebe8;
    transform: rotate(45deg);
`;
const BackContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    margin-left: 5%;
    align-items: center;
`;

const onClickBack = (history) => {
    history.goBack()
    console.log('onClickBack fn in navbar.jsx')
};

export const Navbar = () => {
    const history = useHistory();
    return (
        <Container>
            <BackContainer onClick={() => onClickBack(history)}>
                <Back />
            </BackContainer>
            <LogoContainer>
                <Logo img={GitHub} link='https://github.com/DanShadel/SPA' />
                <Logo img={Twitter} link='https://twitter.com/DanShadel' />
            </LogoContainer>
        </Container>
    )
}

const mapDispatchToProps = {
}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);