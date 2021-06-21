import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../global-styles';
import { Weather } from '../weather';
import { useSelector } from 'react-redux';
import { themeSelector } from '../weather/selectors';

export const App = () => {
    const theme = useSelector(themeSelector);

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle/>

                <Weather/>
            </>
        </ThemeProvider>
    );
};
