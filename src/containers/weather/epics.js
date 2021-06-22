import { combineEpics, ofType } from "redux-observable";
import {
    REALTIME_FORECAST_CHANGE_INTERVAL,
    START_CHANGING_REALTIME_FORECAST,
    UPDATE_CITY, UPDATE_REALTIME_AND_LOCATION,
    UPDATE_WITH_GEOLOCATION
} from './const';
import { find, prop } from 'ramda';
import { map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import { from, interval } from 'rxjs';
import {
    getCityNameWithGeolocation,
    getRealtimeForecastAndLocation,
    getWeather
} from './api';
import {
    resetWeather,
    setRealtimeAndLocation,
    startChangingRealtimeForecast,
    updateCity, updateRealtime,
    updateWeather
} from './actions';
import {
    startChangingGifs,
    fetchGif, resetGif
} from '../conditions/actions';
import { cityNameSelector } from './selectors';
import { historySelector } from '../history/selectors';
import { updateHistory } from '../history/actions';

const updateCityDataEpic = (action$, state$) =>
    action$.pipe(
        ofType(UPDATE_CITY),
        map(prop('cityName')),
        switchMap((cityName) => {
            let history = historySelector(state$.value);
            let historyItem =  find((item) => {
                return item.get('location').get('fullName') === cityName;
            })(history);
            let actions, apiFetchData;
            if (historyItem === undefined) {
                apiFetchData = getWeather;
                actions = [
                    updateWeather,
                    updateHistory
                ]
            }
            else {
                apiFetchData = getRealtimeForecastAndLocation;
                actions = [
                    setRealtimeAndLocation
                ]
            }
            return from(apiFetchData(cityName))
                .pipe(mergeMap((data) => [
                    resetWeather(),
                    resetGif(),
                    fetchGif(data.realtime.condition.text)
                ]
                    .concat(actions.map((action) => action(data)))
                ))
        })
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

const updateRealtimeForecastEpic = (action$) =>
    action$.pipe(
        ofType(UPDATE_REALTIME_AND_LOCATION),
        map(prop('cityName')),
        switchMap((cityName) => from(getRealtimeForecastAndLocation(cityName)
            .pipe(map((data) => setRealtimeAndLocation(data))))
        )
    );

const startChangingRealtimeForecastEpic = (action$, state$) =>
    action$.pipe(
        ofType(START_CHANGING_REALTIME_FORECAST),
        switchMap(() => interval(REALTIME_FORECAST_CHANGE_INTERVAL)
            .pipe(map(() => updateRealtime(cityNameSelector(state$.value))))
        )
    )

export const weatherEpics = combineEpics(
    updateCityDataEpic,
    updateWithGeolocationEpic,
    updateRealtimeForecastEpic,
    startChangingRealtimeForecastEpic
);
