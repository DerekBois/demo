import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function campaignsReducer(state = initialState.shortUrl, action) {
    switch (action.type) {
        case types.GET_SHORT_URL_LOADING:
            return Object.assign({}, state, {link: initialState.shortUrl.link, loading: true});

        case types.GET_SHORT_URL_FAILED:
            return Object.assign({}, state, {error: action.error, loading: false});

        case types.GET_SHORT_URL_SUCCESS:
            return Object.assign({}, state, {link: action.shortUrl, loading: false});

        case types.CLEAR_SHORT_URL:
            return Object.assign({}, state, {...initialState.shortUrl});

        default:
            return state;
    }
}