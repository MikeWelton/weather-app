import { SET_CITY, NEW_CITY } from './const';

export const setCity = (cityName) => ({
    type: SET_CITY,
    cityName: cityName,
});

export const newCity = (cityName) => ({
    type: NEW_CITY,
    cityName: cityName,
});
