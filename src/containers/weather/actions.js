import {
    UPDATE_WEATHER,
    UPDATE_CITY,
    SET_REALTIME_AND_LOCATION,
    UPDATE_WITH_GEOLOCATION,
    START_CHANGING_REALTIME_FORECAST, SET_THEME
} from './const';

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

export const setRealtimeAndLocation = (data) => ({
    type: SET_REALTIME_AND_LOCATION,
    data
});

export const updateWithGeolocation = () => ({
    type: UPDATE_WITH_GEOLOCATION
})

export const startChangingRealtimeForecast = () => ({
    type: START_CHANGING_REALTIME_FORECAST,
})
