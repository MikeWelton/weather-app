import { combineReducers } from 'redux';

import { WEATHER_REDUCER_NAME, weatherReducer } from './containers/weather/reducer';
import {
    HISTORY_REDUCER_NAME,
    historyReducer
} from './containers/history/reducer';
import {
    CITY_SEARCH_REDUCER_NAME,
    citySearchReducer
} from "./containers/city-search/reducer";

export default function createReducer() {
    return combineReducers({
        [WEATHER_REDUCER_NAME]: weatherReducer,
        [HISTORY_REDUCER_NAME]: historyReducer,
        [CITY_SEARCH_REDUCER_NAME]: citySearchReducer,
    });
}
