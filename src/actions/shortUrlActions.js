import * as types from './actionTypes';
import shortUrlApi from '../api/shortUrlApi';

/* Process short url */

export function getShortUrlLoading() {
    return {type: types.GET_SHORT_URL_LOADING};
}
export function getShortUrlSuccess(shortUrl) {
    return {type: types.GET_SHORT_URL_SUCCESS, shortUrl};
}
export function getShortUrlFailed(error) {
    return {type: types.GET_SHORT_URL_FAILED, error};
}
export function clearShortUrl() {
    return {type: types.CLEAR_SHORT_URL};
}
export function getShortUrl(url) {
    return (dispatch, getState) => {
        dispatch(getShortUrlLoading());
        return shortUrlApi.getShortUrl(url).then(shortUrl => {
            return dispatch(getShortUrlSuccess(shortUrl));
        }).catch(error => {
            return dispatch(getShortUrlFailed(error));
        })
    }
}