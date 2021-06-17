import { SET_INPUT, SET_SUGGESTIONS } from './const';

export const setInputValue = (input) => ({
    type: SET_INPUT,
    input
});

export const setSuggestions = (suggestions) => ({
    type: SET_SUGGESTIONS,
    suggestions
});
