import { HourlyWrapper } from "./HourlyWrapper";
import React from "react";
import { useSelector } from 'react-redux';
import {
    hourlyForecastSelector,
    localtimeSelector
} from '../../../weather/selectors';
import { ForecastItem } from '../forecast-item';

export const Hourly = () => {
    const localtime = useSelector(localtimeSelector);
    const hourly = useSelector(hourlyForecastSelector);

    let normalized = localtime.slice(0, -2) + '00';
    let currentHourly = hourly.slice(
        hourly.findIndex((item) => (item.get('time') === normalized))
    );

    return (
        <HourlyWrapper>
            {currentHourly.map((item) => (
                <ForecastItem temperature={item.get('temp')}
                              time={item.get('time').slice(-5)}
                              iconUrl={item.get('condition').get('icon')}
                />
            ))}
        </HourlyWrapper>
    );
}