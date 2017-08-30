import * as types from '../actions/actionTypes';

export default function hsidReducer(state = '', action) {
    switch (action.type) {
        case types.REGISTER_HSID_SUCCESS:
            return action.hsid;

        default:
            return state;
    }
}