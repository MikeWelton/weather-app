import React from 'react';
import { CitySearch } from '../city-search';
import { LocationInfo } from '../location-info';
import { Conditions } from '../conditions';
import { Forecast } from '../forecast';
import { WeatherWrapper } from './components';
import { ThemeSwitch } from './components/theme-switch';
import { GeolocationButton } from './components/geolocation-button';
import { NavbarWrapper } from '../forecast/components/navbar/NavbarWrapper';

export const Weather = () => (
        <WeatherWrapper>
            <CitySearch />
            <NavbarWrapper>
                <ThemeSwitch />
                <GeolocationButton />
            </NavbarWrapper>
            <LocationInfo />
            <Conditions />
            <Forecast />
        </WeatherWrapper>
    );