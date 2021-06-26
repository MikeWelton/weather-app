import {
    UPDATE_WEATHER,
    UPDATE_CITY,
    SET_REALTIME_AND_LOCATION,
    START_CHANGING_REALTIME_FORECAST,
    SET_THEME,
    RESET_WEATHER,
    UPDATE_REALTIME_AND_LOCATION
} from './const';

export const resetWeather = () => ({
    type: RESET_WEATHER,
});

export const setTheme = (theme) => ({
    type: SET_THEME,
    theme
});

export const updateCity = (cityName) => ({
    type: UPDATE_CITY,
    cityName,
});

export const updateWeather = (weatherData) => ({
    type: UPDATE_WEATHER,
    weatherData
});

export const updateRealtime = (cityName) => ({
    type: UPDATE_REALTIME_AND_LOCATION,
    cityName
});

export const setRealtimeAndLocation = (data) => ({
    type: SET_REALTIME_AND_LOCATION,
    data
});

export const startChangingRealtimeForecast = () => ({
    type: START_CHANGING_REALTIME_FORECAST,
})
