import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function campaignsReducer(state = initialState.campaigns, action) {
    switch (action.type) {


        case types.LOAD_CAMPAIGNS_LOADING:
            return Object.assign({}, state, {loading: true});

        case types.LOAD_CAMPAIGNS_FAILED:
            return Object.assign({}, state, {error: action.error, loading: false});

        case types.LOAD_CAMPAIGNS_SUCCESS:
            return Object.assign({}, state, {list: action.list, loading: false});



 


        // case types.CREATE_CAMPAIGN_SUCCESS:
        //     return [...state, action.campaign];

        default:
            return state;
    }
}