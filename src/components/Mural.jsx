import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { slideUp } from '../helpers/animations';

const Container = styled.div`
    width: 100%;
    height: fit-content;
    animation: ${slideUp} .5s linear;
`;

const MuralRow = styled.div`
    margin-left: 10%;
    width: 80%;
    height: ${props => props.height};
    display: flex;
    flex-direction: row;
`;

const MuralItem = styled.div`
    display: flex;
    width: auto;
    height: 100%;
    object-fit: cover;
`;

const PlaylistName = styled.div`
    margin-bottom: 5%;
    width: 100%;
    font-size: 2rem;
    text-align: center;
`;

const Footer = styled.div`
    margin-top: 5%;
    width: 100%;
    font-size: .5rem;
    text-align: center;
`;


const getHeight = (size) => {
    const totalUsableScreenWidth = screen.width * .8;
    const dims = totalUsableScreenWidth / size;
    return dims + 'px';
}

const Mural = ({ tracks, session }) => {
    const [size, setSize] = React.useState(0);
    const [rows, setRows] = React.useState([])

    React.useEffect(() => {
        let sqsize = Math.floor(Math.sqrt(tracks.length));
        setSize(sqsize)
        let temp = [];
        for (let i = 0; i < sqsize; i++) {
            let slice = tracks.slice(0 + (i * sqsize), sqsize + (i * sqsize));
            temp.push(slice)
        }
        setRows(temp);

    }, [tracks])

    return (
        <Container>
            <PlaylistName>
                {session.playlistName}
            </PlaylistName>
            {
                rows.map((row) => {
                    return (
                        <MuralRow height={getHeight(size)}>
                            {row.map((track) => {
                                return (
                                    <MuralItem>
                                        <img src={track.track.album.images[0].url} />
                                    </MuralItem>
                                )
                            })}
                        </MuralRow>
                    )
                })
            }
            <Footer> Displaying {size * size} of {tracks.length} tracks </Footer>
        </Container>
    )
}

const mapDispatchToProps = {}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mural);