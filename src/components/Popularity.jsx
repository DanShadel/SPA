import React from 'react';
import styled from 'styled-components';
import { slideUp } from '../helpers/animations';

const Container = styled.div`
    width: 100%;
    height: 100%;
    animation: ${slideUp} .5s linear;
`;

const TitleText = styled.div`
    width: 90%;
    margin-bottom: 7%;
    margin-left: 5%;
    font-size: 1.5rem;
    text-align: center;
`;

const SongList = styled.div`
    width: 90%;
    margin-left: 5%;
    display:flex;
    flex-direction: column;
`;

const SongCard = styled.div`
    width: 90%;
    height: 20%;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
`;

const SongTitle = styled.div`
   font-size: 1.25rem;
`;

const SongInfo = styled.div`
   font-size: .9rem;
`;

const Artwork = styled.div`
    height: 100%;
    display: flex;
    width: 30%;
    margin-left: 2%;
    object-fit: contain;
`;

const imgStyles = {
    maxHeight: '100%',
    objectFit: 'contain',
    overflow: 'hidden'
};

const getArtists = (track) => {
    let artists = '';
    if(track.track.artists.length > 1){
        track.track.artists.forEach((artist) => {
            artists += artist.name + ',';
        });
        artists = artists.slice(0, -1);
    } else {
        artists = track.track.artists[0].name;
    }

    return artists;
}

const calcTrackLength = (duration) => {
    const seconds = Math.floor(duration/1000);
    const leftoverSeconds = seconds % 60;
    const minutes = Math.floor(seconds / 60);
    if(leftoverSeconds < 10){
        return minutes + ':0' + leftoverSeconds;
    } else {
        return minutes + ':' + leftoverSeconds;
    }
}

const Popularity = ({ tracks }) => {
    let sortedTracks = tracks.sort((a, b) => { return b.track.popularity - a.track.popularity });
    let top5 = sortedTracks.slice(0, 5);
    console.log(top5);

    // printPopularity(sortedTracks);
    return (
        <Container>
            <TitleText>
                Here's what spotify thinks your 5 most popular songs are:
            </TitleText>
            <SongList>
                {top5.map((entry, index) => (
                    <SongCard>
                        <Artwork> <img src={entry.track.album.images[0].url} style={imgStyles} /> </Artwork>
                        <Info>
                            <SongTitle><b> #{index + 1}: {entry.track.name}</b></SongTitle>
                            <SongInfo> Artists: {getArtists(entry)}</SongInfo>
                            <SongInfo> Length: {calcTrackLength(entry.track.duration_ms)}</SongInfo>
                            <SongInfo> Popularity: {entry.track.popularity}</SongInfo>
                        </Info>
                    </SongCard>
                ))}
            </SongList>
        </Container>
    );
};

export default Popularity;
