import styled from 'styled-components';
import { theme } from 'styled-tools';

export const TimeWrapper = styled.div`
    margin: 10px 5px;
    font-size: 18px;
    text-align: center;
`;

export const TemperatureWrapper = styled.div`
    color: ${theme('colors.temperatureText')};
    margin: 5px;
    font-size: ${theme('fonts.fontSize.large')};
`;

export const WeatherIcon = styled.img`
    margin: 10px auto;
    width: 64px;
    height: 64px;
`;
