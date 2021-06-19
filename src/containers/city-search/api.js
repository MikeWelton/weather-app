import axios, { post } from 'axios';
import { map } from 'ramda';
import { API } from "../../logic/const";

export const getSuggestions = async (input) => {
    let url = axios.getUri({
        url: API.WEATHER.URL + API.WEATHER.METHOD.SEARCH,
        params: {
            key: API.WEATHER.KEY,
            q: input
        }});

    let response = await post(url);
        //TODO .catch(error => console.log(error.response.data));

    let data = map((item => item.name), response.data);
    console.log(data);

    return data;
}