import { combineEpics } from 'redux-observable';
import { citySearchEpics } from "./containers/city-search/epics";
import { weatherEpics } from "./containers/weather/epics";
import { conditionsEpics } from "./containers/conditions/epics";

export const rootEpic = combineEpics(
    citySearchEpics,
    weatherEpics,
    conditionsEpics
);
