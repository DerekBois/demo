import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function hsidReducer(state = [], action) {
    switch (action.type) {
        case types.REGISTER_HSID_SUCCESS:
            let newHsid = action.hsid;

            if (state.includes(newHsid)) {
                return state;
            }
            return [...state, newHsid];

        default:
            return state;
    }
}