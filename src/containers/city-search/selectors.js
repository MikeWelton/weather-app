import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { CITY_SEARCH_REDUCER_NAME } from "./reducer";

const getCitySearchReducerState = prop(CITY_SEARCH_REDUCER_NAME);

export const inputValueSelector = createSelector(
    getCitySearchReducerState,
    (citySearchState) => citySearchState.get('input')
);

export const suggestionsSelector = createSelector(
    getCitySearchReducerState,
    (citySearchState) => citySearchState.get('suggestions')
);
