import React from 'react';
import styled from 'styled-components'
import { Histogram } from '../helpers/Histogram';
import { connect } from 'react-redux';

const Bpm = ({ tracks }) => {
    // const [data, setData] = React.useState([])

    const generateData = () => {
        return graphData;
    }

    React.useEffect(() => {
        // setData(generateData)()
    }, [])
    // const graph = Histogram()
    return (
        <div>
            hey dumbass you haven't finished this part
        </div>
    );
};

const mapDispatchToProps = {
}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bpm);