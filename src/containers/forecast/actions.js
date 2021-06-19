import { SET_FORECAST_TYPE } from './const';

export const setForecastType = (forecastType) => ({
    type: SET_FORECAST_TYPE,
    forecastType,
});
