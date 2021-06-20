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
    ConditionInfoWrapper, GifWrapper,
    IsWeatherNiceWrapper, LoaderWrapper
} from './components/InnerComponentsWrappers';
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
            <ConditionInfoWrapper>
                <IsWeatherNiceWrapper>
                    {isWeatherNiceInfo}
                </IsWeatherNiceWrapper>
                <div>
                    {conditionInfo}
                </div>
            </ConditionInfoWrapper>
            <GifWrapper>
                <img src={gifUrl} alt="gif" />
            </GifWrapper>
        </ConditionsWrapper>
    );
}
