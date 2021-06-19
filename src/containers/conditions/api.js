import axios, { post } from "axios";
import { API } from "../../logic/const";
import { FETCHED_GIFS_COUNT } from "./const";

export const getGifUrl = async (keyword) => {
    let url = axios.getUri({
        url: API.GIF.URL,
        params: {
            key: API.GIF.KEY,
            q: keyword,
            contentfilter: 'high',
            media_filter: 'minimal',
            ar_range: 'standard',
            limit: FETCHED_GIFS_COUNT,
        }
    });

    let response = await post(url);
    let random = Math.floor(Math.random() * FETCHED_GIFS_COUNT);

    return response.data.results[random].media[0].tinygif.url;
}