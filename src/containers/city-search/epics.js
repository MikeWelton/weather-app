import { ofType, combineEpics } from 'redux-observable';
import { map, startWith } from 'rxjs/operators';
import { SET_INPUT } from "./const";
import { inputValueSelector, suggestionsSelector } from "./selectors";

const newInputEpic = (action$, state$) =>
    action$.pipe(
        ofType(SET_INPUT),
        startWith('For initialization'),
        map(() => ({
            input: inputValueSelector(state$.value),
            suggestions: suggestionsSelector(state$.value),
        }))
    );

export const citySearchEpics = combineEpics(
    newInputEpic
);