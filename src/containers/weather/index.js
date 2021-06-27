import React from 'react';
import { CitySearch } from '../city-search';
import { LocationInfo } from '../location-info';
import { Conditions } from '../conditions';
import { Forecast } from '../forecast';
import { WeatherWrapper } from "./components";
import { ThemeSwitch } from './components/theme-switch';

export const Weather = () => (
        <WeatherWrapper>
            <CitySearch />
            <ThemeSwitch />
            <LocationInfo />
            <Conditions />
            <Forecast />
        </WeatherWrapper>
    );