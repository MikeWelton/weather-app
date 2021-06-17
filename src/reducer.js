import { combineReducers } from 'redux';

import { WEATHER_REDUCER_NAME, weatherReducer } from './containers/weather/reducer';
import {
    HISTORY_REDUCER_NAME,
    historyReducer
} from './containers/history/reducer';

export default function createReducer() {
    return combineReducers({
        [WEATHER_REDUCER_NAME]: weatherReducer,
        [HISTORY_REDUCER_NAME]: historyReducer,
    });
}
