import { createSelector } from "reselect";
import { prop } from "ramda";
import { CONDITIONS_REDUCER_NAME } from "./reducer";

const getConditionsState = prop(CONDITIONS_REDUCER_NAME);

export const gifUrlSelector = createSelector(
    getConditionsState,
    (conditionsState) => conditionsState.get('gifUrl')
);
