import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case types.AUTHENTICATE_USER_STATE:
            return action.auth;

        default:
            return state;
    }
}