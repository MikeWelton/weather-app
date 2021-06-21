import { combineEpics, ofType } from "redux-observable";
import {
    REALTIME_FORECAST_CHANGE_INTERVAL,
    START_CHANGING_REALTIME_FORECAST,
    UPDATE_CITY,
    UPDATE_WITH_GEOLOCATION
} from './const';
import { prop } from "ramda";
import { map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { from, interval } from 'rxjs';
import {
    getCityNameWithGeolocation,
    getRealtimeForecastAndLocationData,
    getWeather
} from './api';
import {
    setRealtimeAndLocation,
    startChangingRealtimeForecast,
    updateCity,
    updateWeather
} from './actions';
import {
    startChangingGifs,
    fetchGif
} from '../conditions/actions';
import { cityNameSelector } from './selectors';

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
                startChangingGifs(),
                startChangingRealtimeForecast()
            ]))
        )
    );

const changeRealtimeForecastEpic = (action$, state$) =>
    action$.pipe(
        ofType(START_CHANGING_REALTIME_FORECAST),
        switchMap(() => interval(REALTIME_FORECAST_CHANGE_INTERVAL)
            .pipe(switchMap(() => from(getRealtimeForecastAndLocationData(
                        cityNameSelector(state$.value)))
                    .pipe(map((data) => setRealtimeAndLocation(data)))
                )
            )
        )
    )

export const weatherEpics = combineEpics(
    updateCityDataEpic,
    updateWithGeolocationEpic,
    changeRealtimeForecastEpic
);
