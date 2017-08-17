import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_USER_SUCCESS:
            return action.users;

        case types.CREATE_USER_SUCCESS:
            return action.user;

        case types.UPDATE_USER_SUCCESS:
            return action.user;

        default:
            return state;
    }
}