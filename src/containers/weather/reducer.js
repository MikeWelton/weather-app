import { fromJS } from 'immutable';
import {
    RESET_WEATHER,
    SET_REALTIME_AND_LOCATION,
    SET_THEME,
    UPDATE_WEATHER
} from './const';
import { lightTheme } from '../../themes';

export const WEATHER_REDUCER_NAME = 'Weather';

const initialState = fromJS({
    theme: lightTheme,
    location: {
        fullName: '',
        shortName: '',
        latitude: 0,
        longitude: 0,
    },
    realtime: {
        condition: {
            text: '',
        },
    },
    hourly: [{
        time: '',
        temp: '',
        condition: {
            icon: ''
        },
    }],
    daily: []
});

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_WEATHER: {
            return state.updateIn(['location', 'fullName'], () => '');
        }
        case SET_THEME: {
            let { theme } = action;
            return state.set('theme', fromJS(theme));
        }
        case UPDATE_WEATHER: {
            let { hourly, daily } = action.weatherData;
            return setLocationAndRealtime(state, action.weatherData)
                .set('hourly', fromJS(hourly))
                .set('daily', fromJS(daily));
        }
        case SET_REALTIME_AND_LOCATION: {
            return setLocationAndRealtime(state, action.data);
        }
        default:
            return state;
    }
};

const setLocationAndRealtime = (state, data) => {
    let { location, realtime } = data;
    return state
        .set('location', fromJS(location))
        .set('realtime', fromJS(realtime));
}