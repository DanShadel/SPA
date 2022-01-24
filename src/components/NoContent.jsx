import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
`;

const GoBack = styled.div`
    background-color: #1DB954;
    width: 8rem;
    height: 2rem;
    border-radius: 20px;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const NoContent = ({ user }) => {
    const history = useHistory();

    const onClick = () => {
        history.goBack()
    }

    return (
        <Container>
            Sorry, we couldn't find any tracks associated with this playlist. Select another playlist to try again.
            <GoBack onClick={() => onClick()}> Go Back </GoBack>
        </Container>
    );
};

const mapDispatchToProps = {}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoContent);