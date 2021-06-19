import { NavbarWrapper } from './NavbarWrapper';
import { Button } from './button';
import { FORECAST_TYPE } from '../../../../logic/const';

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <Button name={FORECAST_TYPE.REALTIME}/>
            <Button name={FORECAST_TYPE.HOURLY}/>
            <Button name={FORECAST_TYPE.DAILY}/>
        </NavbarWrapper>
    );
}