import * as types from './actionTypes';
import {channels} from '../constants';
import hsidApi from '../api/hsidApi';

const storage = {
    hsidSet(hsidString) {
        if (localStorage.getItem('hsidString')) {
            let stored = localStorage.getItem('hsidString').split(',');

            if (stored.includes(hsidString)) {
                return false;
            }
            hsidString = [hsidString, ...stored].join(',')
        }
        localStorage.setItem('hsidString', hsidString);
        return true;
    }
};

export function registerHsidSuccess(hsid) {
    return {type: types.REGISTER_HSID_SUCCESS, hsid};
}
// export function registerHsidSuccess(hsid) {
//     return {type: types.INFLUENCE_USER_SUCCESS, hsid};
// }

export function registerHsid(hsidString) {
    return (dispatch, getState) => {
        let [c, ...o] = hsidString,
            channel = c.toUpperCase(),
            hsid = o.join('');

        if (channel === channels.CONTACT) {
            return;
        }
        if (storage.hsidSet(hsidString)) {
            return hsidApi.registerHsid(hsid, channel).then(() => {
                dispatch(registerHsidSuccess(hsidString));
            }).catch(error => error);
        }
        return dispatch(registerHsidSuccess(hsidString));
    }
}





export function influenceUser(userId, hsidString) {
    return (dispatch, getState) => {
        let [c, ...o] = hsidString,
            channel = c.toUpperCase(),
            hsid = o.join('');

        if (channel === channels.CONTACT) {
            return;
        }
        return hsidApi.influenceUser(userId, hsid, channel).then(() => {
            console.log('affdfsafdsafsadds');
            // dispatch(registerHsidSuccess(hsidString));
        }).catch(error => error);
    }
}



