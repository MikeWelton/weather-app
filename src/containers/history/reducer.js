import { fromJS } from 'immutable';
import { UPDATE_HISTORY } from "./const";
import { find } from "ramda";

export const HISTORY_REDUCER_NAME = 'History';

const initialState = fromJS({
    history: [],
});

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_HISTORY:
            let { cityData } = action;
            let { longitude, latitude } = cityData;
            let historyItem =  find((item) => {
                return item.longitude === longitude
                    && item.latitude === latitude;
            })(state.get('history'));
            if (historyItem !== undefined) {
                return state.update('history', (history) =>
                    history.push(cityData))
            }
            return state;
        default:
            return state;
    }
}