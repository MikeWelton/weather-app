import { createSelector } from "reselect";
import { prop } from "ramda";
import { FORECAST_REDUCER_NAME } from "./reducer";

const getForecastState = prop(FORECAST_REDUCER_NAME);

export const forecastTypeSelector = createSelector(
    getForecastState,
    (forecastState) => forecastState.get('forecastType')
);


