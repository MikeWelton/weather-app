import { combineEpics, ofType } from "redux-observable";
import { START_CHANGING_GIFS, FETCH_GIF } from "./const";
import { prop } from 'ramda';
import { map, switchMap } from 'rxjs/operators';
import { from, interval } from "rxjs";
import { getGifUrl } from "./api";
import { fetchGif, setGifUrl } from "./actions";
import { realtimeForecastSelector } from "../weather/selectors";
import { GIF_CHANGE_INTERVAL } from '../../logic/const';

const fetchGifEpic = (action$) =>
    action$.pipe(
        ofType(FETCH_GIF),
        map(prop('keyword')),
        switchMap((keyword) => from(getGifUrl(keyword))
            .pipe(map((gifUrl) => setGifUrl(gifUrl))))
    );

const changeGifEpic = (action$, state$) =>
    action$.pipe(
        ofType(START_CHANGING_GIFS),
        switchMap(() => interval(GIF_CHANGE_INTERVAL)
            .pipe(map(() => fetchGif(
                realtimeForecastSelector(state$.value).get('condition').get('text')
            )))
        )
    );

export const conditionsEpics = combineEpics(
    fetchGifEpic,
    changeGifEpic
);
