import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function campaignsReducer(state = initialState.campaign, action) {
    switch (action.type) {
        case types.LOAD_CAMPAIGN_LOADING:
            return Object.assign({}, state, {loading: true});

        case types.LOAD_CAMPAIGN_SUCCESS:
            return Object.assign({}, state, {details: action.campaign, loading: false});

        case types.LOAD_CAMPAIGN_FAILED:
            return Object.assign({}, state, {error: action.error, loading: false});

        case types.UPDATE_CAMPAIGN_SAVING:
            return Object.assign({}, state, {saving: true});

        case types.UPDATE_CAMPAIGN_SUCCESS:
            return Object.assign({}, state, {details: action.campaign, saving: false});

        case types.UPDATE_CAMPAIGN_FAILED:
            return Object.assign({}, state, {error: action.error, saving: false});
            
        default:
            return state;
    }
}