import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import QueryString from 'qs';
import heroImage from '../assets/heroimage.jpg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15%;
    align-items: center;
    align-content: space-between
`;

const Title = styled.div`
    width: 100%;
    font-size: 2rem;
    text-align: center;
`;

const Subtitle = styled.div`
    width: 100%;
    font-size: 1.25rem;
    text-align: center;
    margin-top: 10%;
`;

const GetStarted = styled.div`
    background-color: #1DB954;
    width: 8rem;
    height: 2rem;
    border-radius: 20px;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeroImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
`;

const imgStyles = {
    minWidth: '100%',
    objectFit: 'cover',
    display: 'flex',
    justifyContent: 'center',
};



const authUser = () => {
    const authUrl = 'https://accounts.spotify.com/authorize';
    const client_id = 'cfd2dad3b4654c71a96820ad09b6d61a';
    const redirect_uri =  process.env.NODE_ENV === 'development' ? 
    'http://localhost:8080/playlists' : 'https://spotifyplaylistanalyzer.herokuapp.com/playlists';
    
    const queryString = QueryString.stringify({
        client_id,
        response_type: 'token',
        redirect_uri,
        scope: 'playlist-read-private',
    })

    window.location = authUrl + '?' + queryString;
}

const Authorize = () => {
    return (
        <Container>
            <Title> Spotify Playlist Analyzer</Title>
            <HeroImage> <img src={heroImage} style={imgStyles} /> </HeroImage>
            <Subtitle> Log in with Spotify </Subtitle>
            <GetStarted onClick={() => authUser()}>Get Started</GetStarted>
        </Container>
    );
};

const mapDispatchToProps = {

}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorize);