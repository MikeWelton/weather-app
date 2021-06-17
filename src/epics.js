import { combineEpics } from 'redux-observable';
import { citySearchEpics } from "./containers/city-search/epics";

export const rootEpic = combineEpics(
    citySearchEpics
);
