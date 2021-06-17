import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes';
import { GlobalStyle } from '../../global-styles';

import {Weather} from "../weather";

export const App = () => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />

            <Weather />
        </>
    </ThemeProvider>
);
