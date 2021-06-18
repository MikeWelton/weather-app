import { fromJS } from 'immutable';
import { SET_INPUT, SET_SUGGESTIONS } from "./const";

export const CITY_SEARCH_REDUCER_NAME = 'CitySearch';

const initialState = fromJS({
    input: '',
    suggestions: [],
});

export const citySearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT:
            const {input} = action;
            return state.set('input', input);
        case SET_SUGGESTIONS:
            const {suggestions} = action;
            return state.set('suggestions', suggestions);
        default:
            return state;
    }
};

