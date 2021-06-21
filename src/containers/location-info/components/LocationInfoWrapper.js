import styled from 'styled-components';
import { theme } from 'styled-tools';

export const LocationInfoWrapper = styled.div`
    display: flex;
    font-size: 16px;
    border-radius: 25px;
    color: ${theme('colors.secondaryText')};
    background: ${theme('colors.alternativeBackground')};
    padding: 16px 30px;
    margin: 50px auto 5px auto;
    width: 540px;
    height: 20px;
`;
