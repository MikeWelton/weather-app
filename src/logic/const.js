export const FORECAST_TYPE = {
    REALTIME: 'REALTIME',
    HOURLY: 'HOURLY',
    DAILY: 'DAILY',
};

export const INITIAL_FORECAST_TYPE = FORECAST_TYPE.REALTIME;

export const API = {
    WEATHER: {
        KEY: 'e11a33e629bf4abd9e1213248211706',
        URL: 'http://api.weatherapi.com/v1',
        METHOD: {
            SEARCH: '/search.json',
            CURRENT: '/current.json',
            FORECAST: '/forecast.json',
        },
    },
    GIF: {
        KEY: 'QVM66W0VTOT9',
        URL: 'https://g.tenor.com/v1/search',
    }
}
