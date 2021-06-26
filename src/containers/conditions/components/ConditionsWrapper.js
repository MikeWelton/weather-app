import styled from 'styled-components';
import { theme } from 'styled-tools';

export const ConditionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    background: ${theme('colors.secondaryBackground')};
    padding: 5px 0;
    margin: 5px auto;
    width: ${theme('dims.mainColumnWidth')};
    height: 280px;
`;