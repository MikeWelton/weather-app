import styled from 'styled-components';
import { theme } from 'styled-tools';

export const ForecastItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    border-radius: 25px;
    background: ${theme('colors.forecastItemBackground')};
    margin: 5px 2px auto 2px;
    padding: 0 5px;
    width: 110px;
    height: 210px;
    text-align: center;
`;