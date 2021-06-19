import { fromJS } from 'immutable';

export const WEATHER_REDUCER_NAME = 'Weather';

const initialState = fromJS({
    location: {
        fullName: '',
        shortName: '',
        longitude: 0,
        latitude: 0,
    },
    realtimeData: {},
    hourlyData: {},
    dailyData: {}
});

export const weatherReducer = (state = initialState, action) => {
    return state;
};

