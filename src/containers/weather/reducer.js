import { fromJS } from 'immutable';

export const WEATHER_REDUCER_NAME = 'Weather';

const initialState = fromJS({
    state: 'state',
});

export const weatherReducer = (state = initialState, action) => {
    return state;
};

