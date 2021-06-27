import { combineEpics, ofType } from "redux-observable";
import {
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
    fetchGif, setGifLoaded
} from '../conditions/actions';
import { cityNameSelector } from './selectors';
import { historySelector } from '../history/selectors';
import { updateHistory } from '../history/actions';
import { REALTIME_FORECAST_CHANGE_INTERVAL } from '../../logic/const';

/* Dispatches reset gif and weather actions so the components know that
we are fetching weather and gif (so they can display some loader animation). */
const resetBeforeUpdateEpic = (action$) =>
    action$.pipe(
        ofType(UPDATE_CITY),
        mergeMap(() => [
            resetWeather(),
            setGifLoaded(false),
        ])
    );

/* First, checks if data of given city is already cached in history.
If so then fetches only realtime data.
Otherwise fetches all weather data for specified city and also pipes history
update with data of new city. */
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
                    (_data) => updateWeather(historyItem.toJS()),
                    setRealtimeAndLocation
                ]
            }
            return from(apiFetchData(cityName))
                .pipe(mergeMap((data) => [
                    fetchGif(data.realtime.condition.text),
                    setGifLoaded(true),
                ].concat(actions.map((action) => action(data)))))
        })
    );

/* Makes async call to obtain geolocation info and updates weather data. */
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

/* Gets and updates realtime data. */
const updateRealtimeForecastEpic = (action$) =>
    action$.pipe(
        ofType(UPDATE_REALTIME_AND_LOCATION),
        map(prop('cityName')),
        switchMap((cityName) => from(getRealtimeForecastAndLocation(cityName))
            .pipe(map((data) => setRealtimeAndLocation(data)))
        )
    );

/* Inits interval observable to update realtime data. */
const startChangingRealtimeForecastEpic = (action$, state$) =>
    action$.pipe(
        ofType(START_CHANGING_REALTIME_FORECAST),
        switchMap(() => interval(REALTIME_FORECAST_CHANGE_INTERVAL)
            .pipe(map(() => updateRealtime(cityNameSelector(state$.value))))
        )
    )

export const weatherEpics = combineEpics(
    resetBeforeUpdateEpic,
    updateCityDataEpic,
    updateWithGeolocationEpic,
    updateRealtimeForecastEpic,
    startChangingRealtimeForecastEpic
);
