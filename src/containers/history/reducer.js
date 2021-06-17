import { fromJS } from 'immutable';

export const HISTORY_REDUCER_NAME = 'History';

const initialState = fromJS({
    history: [],
    currentItem: 0
});

export const historyReducer = (state = initialState, action) => {
    return state;
}