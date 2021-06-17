import React from 'react';
import Autosuggest from 'react-autosuggest';
import { filter } from 'ramda';
import { inputValueSelector, suggestionsSelector } from "./selectors";
import {useDispatch, useSelector} from "react-redux";
import {setInputValue, setSuggestions} from "./actions";

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
    const escapeRegexCharacters = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const getSuggestions = (value) => {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return filter(item => regex.test(item), languages);
    }

    const getSuggestionValue = suggestion => suggestion;

    const renderSuggestion = suggestion => (<span>{suggestion}</span>);

    const onChange = (event, { newValue, method }) => {
        if (method === 'enter' || method === 'click') {
            // update whole app, check cache etc
        }
        dispatch(setInputValue(newValue));
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        dispatch(setSuggestions(getSuggestions(value)));
    };

    const onSuggestionsClearRequested = () => {
        dispatch(setSuggestions([]));
    };

    const inputProps = {
        placeholder: "Type 'c'",
        value: inputValue,
        onChange: onChange
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
    );
}
