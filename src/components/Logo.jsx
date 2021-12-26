import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
	height:20px;
	width: 20px;
	margin-top:12px;
    margin-right: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const imgStyles = {
    maxWidth: '100%',
    maxHeight: '100%'
};

const Logo = ({ img, link }) => {
    return (
        <LogoContainer onClick={() => window.open(link, '_blank')}>
            <img src={img} style={imgStyles} />
        </LogoContainer >
    );
};

export default Logo;