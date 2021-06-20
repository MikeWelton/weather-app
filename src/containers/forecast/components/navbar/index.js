import { NavbarWrapper } from './NavbarWrapper';
import { Button } from './button';
import { FORECAST_TYPE } from '../../../../logic/const';
import { useDispatch, useSelector } from 'react-redux';
import { forecastTypeSelector } from '../../selectors';
import { setForecastType } from '../../actions';

export const Navbar = () => {
    const forecastType = useSelector(forecastTypeSelector);
    const dispatch = useDispatch();
    const {REALTIME, HOURLY, DAILY} = FORECAST_TYPE;

    const changeForecastType = (currentType, buttonName) => {
        if (currentType !== buttonName) {
            dispatch(setForecastType(buttonName));
        }
    }

    return (
        <NavbarWrapper>
            <Button name={REALTIME}
                    onClick={() => changeForecastType(forecastType, REALTIME)}/>
            <Button name={HOURLY}
                    onClick={() => changeForecastType(forecastType, HOURLY)}/>
            <Button name={DAILY}
                    onClick={() => changeForecastType(forecastType, DAILY)}/>
        </NavbarWrapper>
    );
}