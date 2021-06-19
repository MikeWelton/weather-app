import { UPDATE_HISTORY } from "./const";

export const updateHistory = (cityData) => ({
    type: UPDATE_HISTORY,
    cityData
});