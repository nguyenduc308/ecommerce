import { SHOW_LOADING, HIDE_LOADING } from "./constansts";

export const showLoading = (): Action => ({type: SHOW_LOADING});
export const hideLoading = (): Action => ({type: HIDE_LOADING});