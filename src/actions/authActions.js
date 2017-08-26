import * as types from './actionTypes';
import userApi from '../api/userApi';
import {loginUserSuccess} from './userActions';

export function setAuthState(auth) {
    return {type: types.AUTHENTICATE_USER_STATE, auth};
}

export function authenticateUser(token) {
    return (dispatch, getState) => {
        localStorage.setItem('userToken', token);
        return dispatch(setAuthState(2));
    }
}
export function loadAuthUser(token) {
    return (dispatch, getState) => {
        dispatch(setAuthState(1));
        return userApi.authUser(token).then(authUser => {
            dispatch(loginUserSuccess(authUser));
            dispatch(setAuthState(2));
        }).catch(error => {
            return error;
        });
    }
}