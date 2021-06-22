import { fromJS } from 'immutable';
import { RESET_GIF, SET_GIF_URL } from './const';

export const CONDITIONS_REDUCER_NAME = 'Conditions';

const initialState = fromJS({
    gifUrl: '',
});

export const conditionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_GIF:
            return state.set('gifUrl', '');
        case SET_GIF_URL:
            const { gifUrl } = action;
            return state.set('gifUrl', gifUrl);
        default:
            return state;
    }
};

