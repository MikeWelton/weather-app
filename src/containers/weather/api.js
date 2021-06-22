import axios, { post } from "axios";
import { API } from "../../logic/const";
import { map, unnest } from 'ramda';

export const parseLocationData = (location) => {
    return {
        fullName: `${location.name}, `
            + ((location.region !== '') ? `${location.region}, ` : '')
            + `${location.country}`,
        shortName: `${location.name}, ${location.country}`,
        latitude: location.lat,
        longitude: location.lon,
        localtime: location.localtime
    };
}

export const parseRealtimeData = (current) => {
    return {
        temp: current.temp_c,
        condition: current.condition,
    };
}

const parseApiData = (data) => {
    let { location, current, forecast } = data;
    let forecastday = forecast.forecastday;
    return {
        location: parseLocationData(location),
        realtime: parseRealtimeData(current),
        hourly: unnest(map((item) => {
            let { hour } = item;
            return map((item) => {
                return {
                    time: item.time,
                    temp: item.temp_c,
                    condition: item.condition,
                }
            }, hour);
        }, forecastday)),
        daily: map((item) => {
            let { day } = item;
            return {
                date: item.date,
                maxTemp: day.maxtemp_c,
                minTemp: day.mintemp_c,
                avgTemp: day.avgtemp_c,
                willItRain: day.daily_will_it_rain,
                condition: day.condition,
            };
        }, forecastday),
    };
}

export const getWeather = async (cityName) => {
    let url = axios.getUri({
        url: API.WEATHER.URL + API.WEATHER.METHOD.FORECAST,
        params: {
            key: API.WEATHER.KEY,
            q: cityName,
            days: 14
        }
    });

    let response = await post(url);

    return parseApiData(response.data);
}

export const getCityNameWithGeolocation = async () => {
    const getPosition = () =>
        new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position);
            });
        });

    const position = await getPosition();

    let url = axios.getUri({
        url: API.WEATHER.URL + API.WEATHER.METHOD.SEARCH,
        params: {
            key: API.WEATHER.KEY,
            q: `${position.coords.latitude},${position.coords.longitude}`
        }
    });

    let response = await post(url);

    return response.data[0].name;
}

export const getRealtimeForecastAndLocation = async (cityName) => {
    let url = axios.getUri({
        url: API.WEATHER.URL + API.WEATHER.METHOD.CURRENT,
        params: {
            key: API.WEATHER.KEY,
            q: cityName
        }
    });

    let response = await post(url);

    return {
        location: parseLocationData(response.data.location),
        realtime: parseRealtimeData(response.data.current)
    };
}
