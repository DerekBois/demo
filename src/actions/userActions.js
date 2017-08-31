import * as types from './actionTypes';
import userApi from '../api/userApi';
import {authenticateUser} from './authActions';
import {influenceUser} from './hsidActions';

export function registerUserSuccess(currentUser) {
    return {type: types.REGISTER_USER_SUCCESS, currentUser};
}
export function loginUserSuccess(currentUser) {
    return {type: types.LOGIN_USER_SUCCESS, currentUser};
}
export function logoutUserSuccess() {
    return {type: types.LOGOUT_USER_SUCCESS};
}
export function updateUserSuccess(currentUser) {
    return {type: types.UPDATE_USER_SUCCESS, currentUser};
}

export function registerUser(user) {
    return (dispatch, getState) => {
        let state = getState(),
            visitHsid;

        if (state.hsid) {
            visitHsid = state.hsid;
            user = {visitHsid, ...user};
        }
        return userApi.registerUser(user).then(({user, token}) => {
            dispatch(authenticateUser(token));
            dispatch(registerUserSuccess(user));
            return user;
        }).then((registeredUser) => {
            if (state.hsid) {
                dispatch(influenceUser(registeredUser._id, state.hsid));
            }
        }).catch(error => error);
    }
}
export function loginUser(user) {
    return (dispatch, getState) => {
        return userApi.loginUser(user).then(({user, token}) => {
            dispatch(authenticateUser(token));
            dispatch(loginUserSuccess(user));
        }).catch(error => {
            return error;
        });
    }
}
export function logoutUser() {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            localStorage.clear();
            dispatch(logoutUserSuccess());
            resolve();
        }).catch(error => error);
    }
}
export function updateUser(user) {
    return (dispatch, getState) => {
        return userApi.updateUser(user).then(updatedUser => {
            dispatch(updateUserSuccess(updatedUser));
        }).catch(error => {
            return error;
        })
    }
}