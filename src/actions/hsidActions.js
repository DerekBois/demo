import * as types from './actionTypes';
import hsidApi from '../api/hsidApi';

const channels = {
    CONTACT: 'C',
    FACEBOOK: 'F',
    TWITTER: 'T',
    LINKEDIN: 'L'
}

const storage = {
    hsidSet(hsidString) {
        if (sessionStorage.getItem('hsidString')) {
            let stored = sessionStorage.getItem('hsidString').split(',');

            if (stored.includes(hsidString)) {
                return false;
            }
            hsidString = [hsidString, ...stored].join(',')
        }
        sessionStorage.setItem('hsidString', hsidString);
        return true;
    }
};

export function registerHsidSuccess(hsid, originalUser) {
    return {type: types.REGISTER_HSID_SUCCESS, visit: {hsid, originalUser}};
}

export function registerHsid(hsidString) {
    return (dispatch, getState) => {
        let [c, ...o] = hsidString,
            channel = c.toUpperCase(),
            hsid = o.join('');

        if (storage.hsidSet(hsidString) && (channel !== channels.CONTACT)) {
            console.log(sessionStorage);
            return hsidApi.registerHsid(hsid, channel).then((user) => {
                dispatch(registerHsidSuccess(hsidString, user));
            }).catch(error => error);
        }

        // register visit, if contact create, register influencer

        // maybe create new collection for visits/contacts

        // pass hsid through reducer so that it can determine if a contact is created

        // if new contact is created, need to pass on influencer contact during contact create


    }
}