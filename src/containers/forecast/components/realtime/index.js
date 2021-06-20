import { RealtimeWrapper } from './RealtimeWrapper';
import React from "react";
import { useSelector } from 'react-redux';
import {
    localtimeSelector,
    realtimeForecastSelector
} from '../../../weather/selectors';
import {
    RealtimeInfoWrapper,
    TemperatureWrapper,
    WeatherIcon
} from './InnerComponentsWrappers';

export const Realtime = () => {
    const localtime = useSelector(localtimeSelector);
    const realtime = useSelector(realtimeForecastSelector);

    let iconUrl = realtime.get('condition').get('icon');

    return (
        <RealtimeWrapper>
            <RealtimeInfoWrapper>
                <div>
                    {localtime}
                </div>
                <TemperatureWrapper>
                    {`${realtime.get('temp')}°`}
                </TemperatureWrapper>
                <div>
                    {realtime.get('condition').get('text')}
                </div>
            </RealtimeInfoWrapper>
            <WeatherIcon src={iconUrl} alt='icon' />
        </RealtimeWrapper>
    );
}