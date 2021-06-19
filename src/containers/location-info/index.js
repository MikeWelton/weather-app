import React from 'react';
import { LocationInfoWrapper } from "./components";
import { useSelector } from "react-redux";
import { cityNameSelector } from "../weather/selectors";

export const LocationInfo = () => {
    const currentLocation = useSelector(cityNameSelector);

    return (
        <LocationInfoWrapper>
            {currentLocation}
        </LocationInfoWrapper>
    );
}
