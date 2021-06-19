import { HourlyWrapper } from "./HourlyWrapper";
import React from "react";
import { useSelector } from 'react-redux';
import { hourlyForecastSelector } from '../../../weather/selectors';
import { ForecastItem } from '../forecast-item';

export const Hourly = () => {
    const hourly = useSelector(hourlyForecastSelector);

    return (
        <HourlyWrapper>
            {hourly.map((item) => (
                <ForecastItem temperature={item.get('temp')}
                              time={item.get('time').slice(-5)}
                              iconUrl={item.get('condition').get('icon')}
                />
            ))}
            Here will be Hourly!
        </HourlyWrapper>
    );
}