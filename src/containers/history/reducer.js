import { fromJS } from 'immutable';
import { UPDATE_HISTORY } from "./const";

export const HISTORY_REDUCER_NAME = 'History';

const initialState = fromJS({
    history: [],
});

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_HISTORY:
            let { cityData } = action;
            return state.update('history', (history) =>
                history.push(fromJS(cityData)));
        default:
            return state;
    }
}