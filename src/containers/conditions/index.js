import React from 'react';
import { useSelector } from "react-redux";
import { ConditionsWrapper } from "./components";
import { calculateConditions } from "../../logic/logic";
import Loader from "react-loader-spinner";
import {
    dailyForecastSelector,
    realtimeForecastSelector
} from "../weather/selectors";
import { toLower } from "ramda";
import {
    ConditionAndGifWrapper,
    ConditionInfoWrapper,
    IsWeatherNiceWrapper, LoaderWrapper
} from "./components/InnerComponentsWrappers";
import { gifUrlSelector } from "./selectors";

export const Conditions = () => {
    const realtimeForecast = useSelector(realtimeForecastSelector);
    const dailyForecast = useSelector(dailyForecastSelector);
    const gifUrl = useSelector(gifUrlSelector);

    const conditionText = realtimeForecast.get('condition').get('text');
    const isWeatherNiceInfo = `Weather in the upcoming days will be 
                            ${calculateConditions(dailyForecast)}`;
    const conditionInfo = `Currently  
                            ${toLower(conditionText)}`;

    if (gifUrl === '') {
        return (
            <ConditionsWrapper>
                <LoaderWrapper>
                    <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
                </LoaderWrapper>
            </ConditionsWrapper>
        );
    }

    return (
        <ConditionsWrapper>
            <IsWeatherNiceWrapper>
                {isWeatherNiceInfo}
            </IsWeatherNiceWrapper>
            <ConditionAndGifWrapper>
                <ConditionInfoWrapper>
                    {conditionInfo}
                </ConditionInfoWrapper>
                <img src={gifUrl} alt="gif" />
            </ConditionAndGifWrapper>
        </ConditionsWrapper>
    );
}
