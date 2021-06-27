import React from 'react';
import Autosuggest from 'react-autosuggest';
import { inputValueSelector, suggestionsSelector } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggestions, setInputValue, setSuggestions } from "./actions";
import { updateCity } from "../weather/actions";
import { autosuggestStyle } from './autosuggest-style';

export const CitySearch = () => {
    const inputValue = useSelector(inputValueSelector);
    const suggestions = useSelector(suggestionsSelector);

    const dispatch = useDispatch();

    const getSuggestionValue = suggestion => suggestion;

    const renderSuggestion = suggestion => (<span>{suggestion}</span>);

    const onChange = (event, {newValue, method}) => {
        if (method === 'enter' || method === 'click') {
            dispatch(updateCity(newValue));
            dispatch(setInputValue(''));
        }
        else {
            dispatch(setInputValue(newValue));
        }

    };

    const onSuggestionsFetchRequested = ({value}) => {
        dispatch(fetchSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        dispatch(setSuggestions([]));
    };

    const onSuggestionSelected = (event, {suggestion, method}) => {
        dispatch(updateCity(suggestion));
        dispatch(setInputValue(''));
    }

    const inputProps = {
        placeholder: "Find city",
        value: inputValue,
        onChange: onChange,
    };

    return (
        <Autosuggest theme={autosuggestStyle}
                     suggestions={suggestions}
                     onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                     onSuggestionsClearRequested={onSuggestionsClearRequested}
                     getSuggestionValue={getSuggestionValue}
                     renderSuggestion={renderSuggestion}
                     onSuggestionSelected={onSuggestionSelected}
                     highlightFirstSuggestion={true}
                     inputProps={inputProps}
        />
    );
}
