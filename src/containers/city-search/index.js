import React from 'react';
import Autosuggest from 'react-autosuggest';
import { filter } from 'ramda';
import { inputValueSelector, suggestionsSelector } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggestions, setInputValue, setSuggestions } from "./actions";
import { theme } from '../../themes/autosuggest.css';
import { getSuggestionsApi } from "./api";

export const CitySearch = () => {
    const inputValue = useSelector(inputValueSelector);
    const suggestions = useSelector(suggestionsSelector);

    const dispatch = useDispatch();

    const languages = [
        'C', 'C#', 'C++', 'Clojure',
        'Elm',
        'Go',
        'Haskell',
        'Java', 'Javascript',
        'Perl', 'PHP', 'Python',
        'Ruby',
        'Scala',
    ];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
    /*const escapeRegexCharacters = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const getSuggestions = (value) => {
        const inputValue = escapeRegexCharacters(value.trim());

        if (inputValue === '') {
            return [];
        }

        const regex = new RegExp('^' + inputValue, 'i');

        getSuggestionsApi(inputValue).then(res => console.log(res));

        return filter(item => regex.test(item), languages);
    }*/

    const getSuggestionValue = suggestion => suggestion;

    const renderSuggestion = suggestion => (<span>{suggestion}</span>);

    const onChange = (event, {newValue, method}) => {
        if (method === 'enter' || method === 'click') {
            console.log('Update global state');
            // update whole app, check cache etc
        }
        dispatch(setInputValue(newValue));
    };

    const onSuggestionsFetchRequested = ({value}) => {
        dispatch(fetchSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        dispatch(setSuggestions([]));
    };

    const onSuggestionSelected = (event, { suggestion, method }) => {
        console.log('Update global state');
    }

    const inputProps = {
        placeholder: "Type 'c'",
        value: inputValue,
        onChange: onChange,
    };

    return (
        <Autosuggest theme={theme}
                     suggestions={suggestions}
                     onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                     onSuggestionsClearRequested={onSuggestionsClearRequested}
                     getSuggestionValue={getSuggestionValue}
                     renderSuggestion={renderSuggestion}
                     onSuggestionSelected={onSuggestionSelected}
                     inputProps={inputProps}
        />
    );
}
