import { fromJS } from 'immutable';
import { SET_GIF_LOADED, SET_GIF_URL } from './const';

export const CONDITIONS_REDUCER_NAME = 'Conditions';

const initialState = fromJS({
    gifLoaded: false,
    gifUrl: '',
});

export const conditionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GIF_LOADED:
            const { gifLoaded } = action;
            return state.set('gifLoaded', gifLoaded);
        case SET_GIF_URL:
            const { gifUrl } = action;
            return state.set('gifUrl', gifUrl);
        default:
            return state;
    }
};

