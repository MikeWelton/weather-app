import styled from 'styled-components';
import { theme } from 'styled-tools';

export const RealtimeInfoWrapper = styled.div`
    width: 220px;
    margin: auto;
    font-size: 24px;
`;

export const TemperatureWrapper = styled.div`
    font-size: 80px;
    color: ${theme('colors.temperatureText')};
`;

export const WeatherIcon = styled.img`
    padding-right: 80px;
    width: 256px;
    height: 256px;
`;
