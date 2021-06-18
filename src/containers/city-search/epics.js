import { ofType, combineEpics } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';
import { FETCH_SUGGESTIONS } from "./const";
import { prop } from "ramda";
import { from } from "rxjs";
import { getSuggestions } from "./api";
import { setSuggestions } from "./actions";

const newInputEpic = (action$) =>
    action$.pipe(
        ofType(FETCH_SUGGESTIONS),
        map(prop('input')),
        switchMap((input) => from(getSuggestions(input))
            .pipe(map((suggestions) => setSuggestions(suggestions))))
    );

export const citySearchEpics = combineEpics(
    newInputEpic
);