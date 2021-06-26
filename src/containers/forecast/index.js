import React from 'react';
import { ForecastWrapper } from './components';
import { useSelector } from 'react-redux';
import { forecastTypeSelector } from './selectors';
import { FORECAST_TYPE } from '../../logic/const';
import { Navbar } from './components/navbar';
import { Realtime } from './components/realtime';
import { Hourly } from './components/hourly';
import { Daily } from './components/daily';
import { cityNameSelector } from '../weather/selectors';
import Loader from 'react-loader-spinner';
import { LoaderWrapper } from '../conditions/components/InnerComponentsWrappers';
import { RealtimeWrapper } from './components/realtime/RealtimeWrapper';

export const Forecast = () => {
    const forecastType = useSelector(forecastTypeSelector);
    const cityName = useSelector(cityNameSelector);
    let forecast;

    switch (forecastType) {
        case FORECAST_TYPE.REALTIME:
            forecast = (<Realtime/>);
            break;
        case FORECAST_TYPE.HOURLY:
            forecast = (<Hourly/>);
            break;
        default: // FORECAST_TYPE.DAILY
            forecast = (<Daily/>);
    }

    if (cityName === '') {
        forecast = (
            <RealtimeWrapper>
                <LoaderWrapper>
                    <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
                </LoaderWrapper>
            </RealtimeWrapper>
        );
    }

    return (
        <ForecastWrapper>
            <Navbar/>
            {forecast}
        </ForecastWrapper>
    );
}
