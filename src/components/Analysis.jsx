import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Mural from './Mural.jsx';
import NoContent from './NoContent.jsx'
import { updateActiveGraphAction } from '../actions/sessionActions'
import { Bars } from 'react-loading-icons'
import Loader from './Loader.jsx';
import { fadeIn } from '../helpers/animations.js';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Graphs = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NextGraph = styled.div`
    background-color: #191414;
    width: 8rem;
    height: 2rem;
    border-radius: 20px;
    border: 1px solid #ecebe8;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 1s linear;
    animation-delay: 1s;
`;

const Analysis = ({ tracks, session, updateActiveGraphAction }) => {
    const [localLoading, setLocalLoading] = React.useState(true)

    React.useEffect(() => {
        updateActiveGraphAction('mural');
        setTimeout(() => setLocalLoading(false), 1500)
    }, [])

    const resolveContent = () => {
        switch (session.activeGraph) {
            case 'mural':
                return <Mural />
            default:
                return <NoContent />
        }
    }

    const handleGraph = () => {
        switch (session.activeGraph) {
            case 'mural':
                updateActiveGraphAction('sunburst');
            default:
                updateActiveGraphAction('default');
        }
    }

    console.log(session.loading);
    if (session.loading === true || localLoading === true) {
        return <Loader />
    }
    else {
        return (
            <Container>
                {tracks.length === 0 ? < NoContent /> : <Graphs key={+new Date()}>{resolveContent()} </Graphs>}
                <NextGraph onClick={() => { handleGraph() }}> Next</NextGraph>
            </Container>
        );
    }

};

const mapDispatchToProps = {
    updateActiveGraphAction
}

const mapStateToProps = ({ tracks, session }) => {
    return { tracks, session }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);