import axios, { post } from 'axios';
import { map } from 'ramda';

const API_URL = 'http://api.weatherapi.com/v1';
const API_KEY = 'e11a33e629bf4abd9e1213248211706';

export const getSuggestions = async (input) => {
    let url = axios.getUri({
        url: `${API_URL}/search.json`,
        params: {
            key: API_KEY,
            q: input
        }});

    let response = await post(url);
        //.catch(error => console.log(error.response.data));
        //.then(response => console.log(response.data)).catch(error => console.log(error.response.data));

    let data = map((item => item.name), response.data);
    console.log(data);

    return data;
}