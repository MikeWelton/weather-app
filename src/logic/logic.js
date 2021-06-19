import { forEach } from 'ramda';

export const calculateConditions = (dailyForecast) => {
    const MIN_NICE_TEMP = 15,
        MAX_NICE_TEMP = 30,
        MIN_AVG_TEMP = 18,
        MAX_AVG_TEMP = 25,
        ANSWER = ['NOT NICE', 'NOT NICE', 'PASSABLE', 'NICE'];

    let metConditionsNum = 3,
        noRain = true,
        cumulativeTemp = 0,
        niceTemp = true,
        avgTemp;

    const checkConditions = (day) => {
        if (day.get('willItRain') && noRain) {
            noRain = false;
            metConditionsNum--;
        }
        if ((day.get('minTemp') < MIN_NICE_TEMP || MAX_NICE_TEMP < day.get('maxTemp'))
                && niceTemp) {
            niceTemp = false;
            metConditionsNum--;
        }
        cumulativeTemp += day.get('avgTemp');
    };

    forEach(checkConditions, dailyForecast);

    avgTemp = cumulativeTemp / dailyForecast.length;

    if (avgTemp < MIN_AVG_TEMP || MAX_AVG_TEMP < avgTemp) {
        metConditionsNum--;
    }

    return ANSWER[metConditionsNum];
}