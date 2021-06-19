import axios, { post } from "axios";
import { API } from "../../logic/const";

export const getGifUrl = async (keyword) => {
    let url = axios.getUri({
        url: API.GIF.URL,
        params: {
            key: API.GIF.KEY,
            q: keyword,
            contentfilter: 'high',
            media_filter: 'minimal',
            ar_range: 'standard',
            limit: 10,
        }
    });

    let response = await post(url);

    return response.data.results[Math.floor(Math.random() * 10)].media[0].tinygif.url;
}