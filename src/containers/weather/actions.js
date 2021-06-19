import { UPDATE_WEATHER, UPDATE_CITY } from './const';

export const updateCity = (cityName) => ({
    type: UPDATE_CITY,
    cityName,
});

export const updateWeather = (weatherData) => ({
    type: UPDATE_WEATHER,
    weatherData
});
