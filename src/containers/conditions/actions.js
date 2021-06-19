import { START_CHANGING_GIFS, FETCH_GIF, SET_GIF_URL } from './const';

export const fetchGif = (keyword) => ({
    type: FETCH_GIF,
    keyword,
});

export const setGifUrl = (gifUrl) => ({
    type: SET_GIF_URL,
    gifUrl,
});

export const startChangingGifs = () => ({
    type: START_CHANGING_GIFS,
});
