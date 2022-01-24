import { keyframes } from 'styled-components'

export const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    } to {
        opacity: 1; 
        transform: translateY(0%);
    }
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1; 
    }
`;