import styled from 'styled-components';
import { theme } from 'styled-tools';

export const RealtimeInfoWrapper = styled.div`
    width: 220px;
    margin: auto;
    font-size: ${theme('fonts.fontSize.medium')};
`;

export const TemperatureWrapper = styled.div`
    font-size: ${theme('fonts.fontSize.xxl')};
    color: ${theme('colors.temperatureText')};
`;

export const WeatherIcon = styled.img`
    padding-right: 80px;
    width: 256px;
    height: 256px;
`;
