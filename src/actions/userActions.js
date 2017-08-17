import * as types from './actionTypes';
import userApi from '../api/userApi';

export function createUserSuccess(user) {
    return {type: types.CREATE_USER_SUCCESS, user};
}
export function updateUserSuccess(user) {
    return {type: types.UPDATE_USER_SUCCESS, user};
}
export function loadUserSuccess(users) {
    return {type: types.LOAD_USER_SUCCESS, users};
}
export function loginUserSuccess(user) {
    return {type: types.LOGIN_USER_SUCCESS, user};
}

export function createUser(user) {
    return (dispatch, getState) => {
        return userApi.saveUser(user).then(savedUser => {
            // create new session plugin and add/update it when user makes changes in updateuser
            // different action: createSessionuser or something
            console.log('important notes');
            dispatch(createUserSuccess(savedUser));
        }).catch(error => {
            return error;
        })
    }
}
export function updateUser(user) {
    return (dispatch, getState) => {
        return userApi.saveUser(user).then(savedUser => {
            dispatch(updateUserSuccess(savedUser));
        }).catch(error => {
            throw(error);
        })
    }
}
export function loadUser() {
    return (dispatch, getState) => {
        return userApi.getAllUsers().then(users => {
            dispatch(loadUserSuccess(users));
        }).catch(error => {
            throw(error);
        })
    }
}
export function loginUser(user) {
    return (dispatch, getState) => {
        return userApi.loginUser(user).then(user => {
            dispatch(loginUserSuccess(user));
        }).catch(error => {
            console.log(error);
            return error;
        })
    }
}