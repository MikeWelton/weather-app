import React from 'react';
import { LocationInfoWrapper } from "./components";
import { useSelector } from "react-redux";
import { cityNameSelector } from "../weather/selectors";
import Loader from "react-loader-spinner";
import { LoaderWrapper } from "../conditions/components/InnerComponentsWrappers";

export const LocationInfo = () => {
    const currentLocation = useSelector(cityNameSelector);

    return (
        <LocationInfoWrapper>
            {currentLocation === '' &&
            <LoaderWrapper>
                <Loader type="TailSpin" color="#00BFFF" height={30} width={30} />
            </LoaderWrapper>}

            {currentLocation !== '' && currentLocation}
        </LocationInfoWrapper>
    );
}
