/*import { combineEpics, ofType } from "redux-observable";
import { UPDATE_CITY, UPDATE_WITH_GEOLOCATION } from "./const";
import { prop } from "ramda";
import { map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { from } from "rxjs";
import { getCityNameWithGeolocation, getWeather } from "./api";
import { updateCity, updateWeather } from "./actions";
import { startChangingGifs, fetchGif } from "../conditions/actions";

const updateCityDataEpic = (action$) =>
    action$.pipe(
        ofType(UPDATE_CITY),
        map(prop('cityName')),
        switchMap((cityName) => from(getWeather(cityName))
            .pipe(mergeMap((weather) => [
                updateWeather(weather),
                fetchGif(weather.realtime.condition.text)
            ]))
        )
    );

const updateWithGeolocationEpic = (action$) =>
    action$.pipe(
        ofType(UPDATE_WITH_GEOLOCATION),
        startWith({}),
        switchMap(() => from(getCityNameWithGeolocation())
            .pipe(mergeMap((cityName) => [
                updateCity(cityName),
                startChangingGifs()
            ]))
        )
    );

export const weatherEpics = combineEpics(
    updateCityDataEpic,
    updateWithGeolocationEpic
);*/
