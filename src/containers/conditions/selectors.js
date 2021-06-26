import { createSelector } from "reselect";
import { prop } from "ramda";
import { CONDITIONS_REDUCER_NAME } from "./reducer";

const getConditionsState = prop(CONDITIONS_REDUCER_NAME);

export const gifLoadedSelector = createSelector(
    getConditionsState,
    (conditionsState) => conditionsState.get('gifLoaded')
);

export const gifUrlSelector = createSelector(
    getConditionsState,
    (conditionsState) => conditionsState.get('gifUrl')
);
