import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

/* eslint no-unused-expressions: 0 */
export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        width: 100%;
        height: 100%;
        
        justify-content: center;

        color: ${theme('colors.text')};
        background-color: ${theme('colors.background')};

        font-size: ${theme('fonts.basic.fontSize')};
        font-family: ${theme('fonts.basic.fontFamily')};
        overflow: hidden;
    }

    body {
        margin: ${theme('dims.bigSpacing')};
    }
`;
