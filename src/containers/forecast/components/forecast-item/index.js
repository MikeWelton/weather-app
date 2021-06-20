import { ForecastItemWrapper } from './ForecastItemWrapper';
import {
    TemperatureWrapper,
    TimeWrapper, WeatherIcon
} from './InnerComponentsWrappers';

export const ForecastItem = ({temperature, time, iconUrl}) => {

    return (
        <ForecastItemWrapper>
            <TimeWrapper>
                {time}
            </TimeWrapper>
            <TemperatureWrapper>
                {`${temperature}°`}
            </TemperatureWrapper>
            <WeatherIcon src={iconUrl} alt='icon'/>
        </ForecastItemWrapper>
    );
}