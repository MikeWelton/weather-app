import styled from 'styled-components';
import { theme } from 'styled-tools';

export const RealtimeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    background: ${theme('colors.secondaryBackground')};
    margin: 5px auto;
    width: ${theme('dims.mainColumnWidth')};
    height: 240px;
`;