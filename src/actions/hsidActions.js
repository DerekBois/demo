import * as types from './actionTypes';
import hsidApi from '../api/hsidApi';

export function registerHsidSuccess(hsidString) {
    return {type: types.REGISTER_HSID_SUCCESS, hsid: hsidString};
}

export function registerHsid(hsidString) {
    return (dispatch, getState) => {
        let [c, ...o] = hsidString,
            channel = c.toUpperCase(),
            hsid = o.join('');

        // if C, don't register visit --  it's a contact hsid

        // in hsidApi check if same user, send message if so
        // register visit, if contact create, register influencer
        // pop it in session so that it doesn't register more than once
        // add array (which converts to string) to check 
        // time stamp
        // maybe create new collection for visits/contacts
        // pass hsid through reducer so that it can determine if a contact is created
        // if new contact is created, need to pass on influencer contact during contact create

        return hsidApi.registerHsid(hsid, channel).then(() => {
            dispatch(registerHsidSuccess(hsidString));
        }).catch(error => error);
    }
}