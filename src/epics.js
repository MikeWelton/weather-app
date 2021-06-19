import { combineEpics } from 'redux-observable';
import { citySearchEpics } from "./containers/city-search/epics";
import { weatherEpics } from "./containers/weather/epics";

export const rootEpic = combineEpics(
    citySearchEpics,
    weatherEpics
);
