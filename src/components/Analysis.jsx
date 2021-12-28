import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Mural from './Mural.jsx';
import NoContent from './NoContent.jsx'

const Analysis = ({tracks}) => {

    return (
        <>
            {tracks.length === 0 ? <NoContent/> : 
            <Mural />
            }
        </>
    );
};

const mapDispatchToProps = {
}

const mapStateToProps = ({ tracks }) => {
    return { tracks }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);