import React from 'react';
import { useDispatch } from 'react-redux';
import { updateWithGeolocation } from '../../actions';
import { Button } from '../../../forecast/components/navbar/button';

export const GeolocationButton = () => {
    const dispatch = useDispatch();

    const dispatchGeolocationUpdate = () => {
        dispatch(updateWithGeolocation());
    }

    return (<Button name={'Locate me!'} onClick={dispatchGeolocationUpdate} />);
};
