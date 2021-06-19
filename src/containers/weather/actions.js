import { UPDATE_WEATHER, UPDATE_CITY, UPDATE_WITH_GEOLOCATION } from './const';

export const updateCity = (cityName) => ({
    type: UPDATE_CITY,
    cityName,
});

export const updateWeather = (weatherData) => ({
    type: UPDATE_WEATHER,
    weatherData
});

export const updateWithGeolocation = () => ({
    type: UPDATE_WITH_GEOLOCATION
})
