import { fromJS } from 'immutable';
import { SET_FORECAST_TYPE } from './const';
import { FORECAST_TYPE, INITIAL_FORECAST_TYPE } from '../../logic/const';

export const FORECAST_REDUCER_NAME = 'Forecast';

const initialState = fromJS({
    forecastType: FORECAST_TYPE.HOURLY
    //TODO forecastType: INITIAL_FORECAST_TYPE
});

export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORECAST_TYPE:
            let {forecastType} = action;
            return state.set('forecastType', forecastType);
        default:
            return state;
    }
};

