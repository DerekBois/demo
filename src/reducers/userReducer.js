import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function userReducer(state = initialState.currentUser, action) {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return action.currentUser;

        case types.LOGOUT_USER_SUCCESS:
            return initialState.currentUser;

        case types.REGISTER_USER_SUCCESS:
            return action.currentUser;

        case types.UPDATE_USER_SUCCESS:
            return action.currentUser;

        default:
            return state;
    }
}