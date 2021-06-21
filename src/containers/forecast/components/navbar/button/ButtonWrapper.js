import styled from 'styled-components';
import { theme } from 'styled-tools';

export const ButtonWrapper = styled.button`
    font-size: 16px;
    color: ${theme('colors.secondaryText')};
    background: ${theme('colors.alternativeBackground')};
    padding: 0;
    margin: 0;
    width: 120px;
    height: 50px;
    text-align: center;
`;