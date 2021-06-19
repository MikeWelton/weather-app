import React from 'react';
import { CitySearch } from '../city-search';
import { LocationInfo } from '../location-info';
import { Conditions } from '../conditions';
import { Forecast } from '../forecast';
import { WeatherWrapper } from "./components";

export const Weather = () => (
        <WeatherWrapper>
            <CitySearch />
            <LocationInfo />
            <Conditions />
            <Forecast />
        </WeatherWrapper>
    );