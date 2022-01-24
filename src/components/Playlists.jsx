import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateAccessTokenAction } from '../actions/userActions';
import { getUserPlaylistsAction, getTracksForPlaylistAction, } from '../actions/playlistActions';
import { useHistory } from "react-router-dom";
import { updateLoadingAction, updateActivePlaylistAction } from '../actions/sessionActions';
import Loader from './Loader';
import { slideUp, fadeIn } from '../helpers/animations.js';

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 2%;
    animation: ${slideUp} .5s linear;
`;

const Playlist = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 10%;
    border: none;
    box-shadow: 0px 0px 2px #3d3d3d;
    align-items: center;
    justify-content: space-between;
    margin-left: 10%;
    margin-bottom: 2%;
`;

const Artwork = styled.div`
    height: 100%;
    display: flex;
    margin-left: 2%;
    object-fit: cover;
`;

const Title = styled.div`
    width: 75%;
    margin-left: 5%;
    margin-right: 2%;
    font-size: 1rem;
    text-align: left;
    overflow: hidden;
`;

const Count = styled.div`
    width: 10%;
    text-align: center;
    margin-right: 5%;
`;

const imgStyles = {
    maxHeight: '100%',
    objectFit: 'cover',
    overflow: 'hidden'
};

const YourPlaylists = styled.div`
    width: 100%;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5%;
`;

const Playlists = ({ updateAccessTokenAction, user, playlists, getUserPlaylistsAction, getTracksForPlaylistAction, updateLoadingAction, updateActivePlaylistAction, session }) => {
    const history = useHistory();
    const [localLoading, setLocalLoading] = React.useState(true)

    const onClick = (playlist) => {
        updateLoadingAction(true);
        updateActivePlaylistAction(playlist.name)
        getTracksForPlaylistAction(playlist);
        history.push('/analysis');
    }

    React.useEffect(() => {
        if (window.location.href.split('#')[1]) {
            const queryString = window.location.href.split('#')[1]
            const accessToken = queryString.split('&')[0].split('=')[1];
            updateAccessTokenAction(accessToken);
        }

        setTimeout(() => setLocalLoading(false), 1500)

    }, []);

    React.useEffect(() => {
        if (user.accessToken) {
            getUserPlaylistsAction()
        }

    }, [user.accessToken])


    if (session.loading === true || localLoading === true) {
        return <Loader />
    } else {
        return (
            <Container>
                <YourPlaylists> Your playlists</YourPlaylists>
                {
                    playlists.map((playlist, index) => {
                        return (
                            <Playlist key={index} onClick={() => onClick(playlist, history, getTracksForPlaylistAction, updateLoadingAction)}>
                                <Artwork> <img src={playlist.images[0].url} style={imgStyles} /> </Artwork>
                                <Title>{playlist.name}</Title>
                                <Count>{playlist.tracks.total} tracks</Count>
                            </Playlist>
                        );
                    })
                }
            </Container>
        );
    }
};

const mapDispatchToProps = {
    updateAccessTokenAction,
    getUserPlaylistsAction,
    getTracksForPlaylistAction,
    updateLoadingAction,
    updateActivePlaylistAction,
}

const mapStateToProps = ({ user, playlists, session }) => {
    return { user, playlists, session }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);