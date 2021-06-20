import React from "react";
import { DailyWrapper } from "./DailyWrapper";
import { useSelector } from 'react-redux';
import { dailyForecastSelector } from '../../../weather/selectors';
import { ForecastItem } from '../forecast-item';

export const Daily = () => {
    const daily = useSelector(dailyForecastSelector);

    return (
        <DailyWrapper>
            {daily.map((item) => (
                <ForecastItem temperature={item.get('avgTemp')}
                              time={item.get('date').slice(5)}
                              iconUrl={item.get('condition').get('icon')}
                />
            ))}
        </DailyWrapper>
    );
}