import axios, { post } from "axios";
import { API } from "../../logic/const";
import { map, unnest } from 'ramda';

const parseApiData = (data) => {
    let { location, current, forecast } = data;
    let forecastday = forecast.forecastday;
    return {
        location: {
            fullName: `${location.name}, `
                + ((location.region !== '') ? `${location.region},` : '')
                + `${location.country}`,
            shortName: `${location.name}, ${location.country}`,
            latitude: location.lat,
            longitude: location.lon,
        },
        realtime: {
            temp: current.temp_c,
            condition: current.condition,
        },
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