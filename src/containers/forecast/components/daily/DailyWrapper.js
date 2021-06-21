import styled from 'styled-components';
import { theme } from 'styled-tools';

export const DailyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    border-radius: 25px;
    background: ${theme('colors.secondaryBackground')};
    margin: 5px auto;
    width: 800px;
    height: 220px;
`;