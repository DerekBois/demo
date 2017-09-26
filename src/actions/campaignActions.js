import * as types from './actionTypes';
import campaignApi from '../api/campaignApi';

export function createCampaignSuccess(campaign) {
    return {type: types.CREATE_CAMPAIGN_SUCCESS, campaign};
}
export function saveCampaignSuccess(campaign) {
    return {type: types.SAVE_CAMPAIGN_SUCCESS, campaign};
}
export function loadCampaignSuccess(campaign) {
    return {type: types.LOAD_CAMPAIGN_SUCCESS, campaign};
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

export function loadCampaign(slug) {
    return (dispatch, getState) => {
        return campaignApi.loadCampaign(slug).then(campaign => {
            dispatch(loadCampaignSuccess(campaign));
        }).catch(error => {
            return error;
        });
    }
}



// export function registerUser(user) {
//     return (dispatch, getState) => {
//         let state = getState(),
//             visitHsid;

//         if (state.hsid) {
//             visitHsid = state.hsid;
//             user = {visitHsid, ...user};
//         }
//         return userApi.registerUser(user).then(({user, token}) => {
//             dispatch(authenticateUser(token));
//             dispatch(registerUserSuccess(user));
//             return user;
//         }).then((registeredUser) => {
//             if (state.hsid) {
//                 dispatch(influenceUser(registeredUser._id, state.hsid));
//             }
//         }).catch(error => error);
//     }
// }
// export function loginUser(user) {
//     return (dispatch, getState) => {
//         return userApi.loginUser(user).then(({user, token}) => {
//             dispatch(authenticateUser(token));
//             dispatch(loginUserSuccess(user));
//         }).catch(error => {
//             return error;
//         });
//     }
// }
// export function logoutUser() {
//     return (dispatch, getState) => {
//         return new Promise((resolve, reject) => {
//             localStorage.clear();
//             dispatch(logoutUserSuccess());
//             resolve();
//         }).catch(error => error);
//     }
// }
// export function updateUser(user) {
//     return (dispatch, getState) => {
//         return userApi.updateUser(user).then(updatedUser => {
//             dispatch(updateUserSuccess(updatedUser));
//         }).catch(error => {
//             return error;
//         })
//     }
// }