import { fromJS } from 'immutable';
import { UPDATE_WEATHER } from "./const";

export const WEATHER_REDUCER_NAME = 'Weather';

const initialState = fromJS({
    location: {
        fullName: '',
        shortName: '',
        latitude: 0,
        longitude: 0,
    },
    realtime: {
        condition: {
            text: '',
        },
    },
    hourly: [],
    daily: []
});

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_WEATHER:
            let { weatherData } = action;
            return fromJS(weatherData);
        default:
            return state;
    }
};

