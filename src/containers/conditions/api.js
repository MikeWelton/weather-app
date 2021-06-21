import axios, { post } from "axios";
import { API } from "../../logic/const";
import { FETCHED_GIFS_COUNT } from "./const";

const selectGif = (response) => {
    let results = response.data.results;
    let random = Math.floor(Math.random() * FETCHED_GIFS_COUNT);
    let url, height = 271;

    for (let i = random; height > 270; i = ((i + 1) % results.length)) {
        url = results[i].media[0].tinygif.url;
        height = results[i].media[0].tinygif.dims[1];
    }

    return url;
}

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

    return selectGif(response);
}