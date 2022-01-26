import React from 'react';
import styled from 'styled-components';
import { slideUp } from '../helpers/animations';

const Container = styled.div`
    width: 100%;
    height: fit-content;
    animation: ${slideUp} .5s linear;
`;

const TitleText = styled.div`
    margin-bottom: 5%;
    width: 70%;
    font-size: 1.5rem;
    text-align: center;
`;

const SongList = styled.div`
    width: 80%;
    margin-left: 10%;
    display:flex;
    justify-content: center;
    flex-direction: row;
`;


const SongCard = styled.div`
    width: 100%;
    height: 20%;
`;

const SongTitle = styled.div`

`;

const Artwork = styled.div`
    height: 100%;
    display: flex;
    margin-left: 2%;
    object-fit: cover;
`;

const imgStyles = {
    maxHeight: '100%',
    objectFit: 'cover',
    overflow: 'hidden'
};

const Popularity = ({ tracks }) => {
    let sortedTracks = tracks.sort((a, b) => { return a.track.popularity - b.track.popularity });

    let top5 = sortedTracks.slice(0, 5);
    console.log(top5);
    return (
        <Container>
            <TitleText>
                Here's what spotify thinks your 5 most popular songs are:
            </TitleText>
            <SongCard>
                {top5.map((entry) => (
                    <SongCard>
                        <Artwork> <img src={entry.track.album.images[0].url} style={imgStyles} /> </Artwork>
                        <SongTitle>{entry.track.name}</SongTitle>
                    </SongCard>
                ))}
            </SongCard>
        </Container>


    );
};

export default Popularity;