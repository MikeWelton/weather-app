import { createSelector } from "reselect";
import { prop } from "ramda";
import { WEATHER_REDUCER_NAME } from "./reducer";

const getWeatherState = prop(WEATHER_REDUCER_NAME);

export const themeSelector = createSelector(
    getWeatherState,
    (weatherState) => weatherState.get('theme').toJS()
);

export const cityNameSelector = createSelector(
    getWeatherState,
    (weatherState) => weatherState.get('location').get('fullName')
);

export const localtimeSelector = createSelector(
    getWeatherState,
    (weatherState) => weatherState.get('location').get('localtime')
);

export const realtimeForecastSelector = createSelector(
    getWeatherState,
    (weatherState) => weatherState.get('realtime')
);

export const hourlyForecastSelector = createSelector(
    getWeatherState,
    (weatherState) => weatherState.get('hourly')
);

export const dailyForecastSelector = createSelector(
    getWeatherState,
    (weatherState) => weatherState.get('daily')
);
