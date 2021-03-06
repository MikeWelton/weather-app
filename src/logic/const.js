export const FORECAST_TYPE = {
    REALTIME: 'Realtime',
    HOURLY: 'Hourly',
    DAILY: 'Daily',
};

export const INITIAL_FORECAST_TYPE = FORECAST_TYPE.REALTIME;

export const THEME = {
    LIGHT: 'LIGHT',
    DARK: 'DARK',
};

/* Normally we would store keys in some safe place. */
export const API = {
    WEATHER: {
        KEY: 'e11a33e629bf4abd9e1213248211706',
        URL: 'https://api.weatherapi.com/v1',
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

export const GIF_CHANGE_INTERVAL = 30 * 1000; // 30 seconds
export const REALTIME_FORECAST_CHANGE_INTERVAL = 15 * 60 * 1000; // 15 minutes
