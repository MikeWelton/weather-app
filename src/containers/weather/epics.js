import { combineEpics, ofType } from "redux-observable";
import { UPDATE_CITY } from "./const";
import { prop } from "ramda";
import { map, switchMap } from 'rxjs/operators';
import { from } from "rxjs";
import { getWeather } from "./api";
import { updateWeather } from "./actions";

const updateCityDataEpic = (action$) =>
    action$.pipe(
        ofType(UPDATE_CITY),
        map(prop('cityName')),
        switchMap((cityName) => from(getWeather(cityName))
            .pipe(map((weather) => updateWeather(weather))))
    );

export const weatherEpics = combineEpics(
    updateCityDataEpic
);
