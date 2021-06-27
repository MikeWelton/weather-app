import { Button } from '../../../forecast/components/navbar/button';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelector } from '../../selectors';
import { darkTheme, lightTheme } from '../../../../themes';
import { setTheme } from '../../actions';
import { THEME } from '../../../../logic/const';


export const ThemeSwitch = () => {
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();

    const changeTheme = () => {
        if (theme.colors.name === THEME.LIGHT) {
            dispatch(setTheme(darkTheme));
        }
        else {
            dispatch(setTheme(lightTheme));
        }
    }

    return (
        <Button name={'Change theme'} onClick={changeTheme}/>
    );
}