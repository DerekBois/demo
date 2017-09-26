import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function campaignsReducer(state = initialState.campaigns, action) {
    switch (action.type) {
        case types.CREATE_CAMPAIGN_SUCCESS:
            console.log([...state, action.campaign]);
            return [...state, action.campaign];

        default:
            return state;
    }
}