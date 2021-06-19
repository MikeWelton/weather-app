import { createSelector } from "reselect";
import { prop } from "ramda";
import { WEATHER_REDUCER_NAME } from "./reducer";

const getWeatherState = prop(WEATHER_REDUCER_NAME);

export const cityNameSelector = createSelector(
    getWeatherState,
    (weatherState) => weatherState.get('location').get('fullName')
);
