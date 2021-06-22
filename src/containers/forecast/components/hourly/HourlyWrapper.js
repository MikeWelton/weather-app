import styled from 'styled-components';
import { theme } from 'styled-tools';

export const HourlyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    background: ${theme('colors.secondaryBackground')};
    padding: 0 10px 0 3px;
    margin: 5px auto;
    width: 1000px;
    height: 235px;
    overflow-x: auto;
`;