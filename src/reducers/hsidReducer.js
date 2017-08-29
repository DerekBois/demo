import * as types from '../actions/actionTypes';

let initialState = {
    originalUser: '',
    hsid: ''
}

export default function hsidReducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_HSID_SUCCESS:
            return {...state, ...action.visit};

        default:
            return initialState;
    }
}