import * as types from './actionTypes';
import campaignApi from '../api/campaignApi';



/* Load all campaigns */

export function loadCampaignsLoading() {
    return {type: types.LOAD_CAMPAIGNS_LOADING};
}
export function loadCampaignsSuccess(list) {
    return {type: types.LOAD_CAMPAIGNS_SUCCESS, list};
}
export function loadCampaignsFailed(error) {
    return {type: types.LOAD_CAMPAIGNS_FAILED, error};
}
export function loadCampaigns(userId) {
    return (dispatch, getState) => {
        dispatch(loadCampaignsLoading());
        return campaignApi.loadCampaigns(userId).then(campaigns => {
            return dispatch(loadCampaignsSuccess(campaigns));
        }).catch(error => {
            return dispatch(loadCampaignsFailed(error));
        })
    }
}

/* Load single campaign by slug */

export function loadCampaignLoading() {
    return {type: types.LOAD_CAMPAIGN_LOADING};
}
export function loadCampaignSuccess(campaign) {
    return {type: types.LOAD_CAMPAIGN_SUCCESS, campaign};
}
export function loadCampaignFailed(error) {
    return {type: types.LOAD_CAMPAIGN_FAILED, error};
}
export function loadCampaign(slug) {
    return (dispatch, getState) => {
        dispatch(loadCampaignLoading());
        return campaignApi.loadCampaign(slug).then(campaign => {
            return dispatch(loadCampaignSuccess(campaign));
        }).catch(error => {
            return dispatch(loadCampaignFailed(error));
        })
    }
}

/* Update single campaign */

export function updateCampaignSaving() {
    return {type: types.UPDATE_CAMPAIGN_SAVING};
}
export function updateCampaignSuccess(campaign) {
    return {type: types.UPDATE_CAMPAIGN_SUCCESS, campaign};
}
export function updateCampaignFailed(error) {
    return {type: types.UPDATE_CAMPAIGN_FAILED, error};
}
export function updateCampaign(campaign) {
    return (dispatch, getState) => {
        dispatch(updateCampaignSaving());
        return campaignApi.updateCampaign(campaign).then(updatedCampaign => {
            return dispatch(updateCampaignSuccess(updatedCampaign));
        }).catch(error => {
            return dispatch(updateCampaignFailed(error));
        })
    }
}



















export function createCampaignSuccess(campaign) {
    return {type: types.CREATE_CAMPAIGN_SUCCESS, campaign};
}
export function saveCampaignSuccess(campaign) {
    return {type: types.SAVE_CAMPAIGN_SUCCESS, campaign};
}


export function createCampaign(campaign) {
    return (dispatch, getState) => {
        let state = getState(),
            merged = Object.assign({}, campaign, {user: state.currentUser._id});

        return campaignApi.createCampaign(merged).then(createdCampaign => {
            dispatch(createCampaignSuccess(createdCampaign));
        }).catch(error => {
            return error;
        });
    }
}
export function saveCampaign(campaign) {
    return (dispatch, getState) => {
        return campaignApi.saveCampaign(campaign).then(updatedCampaign => {
            dispatch(saveCampaignSuccess(updatedCampaign));
        }).catch(error => {
            return error;
        });
    }
}



