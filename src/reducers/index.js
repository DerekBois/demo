import {combineReducers} from 'redux';
import currentUser from './userReducer';
import auth from './authReducer';
import hsid from './hsidReducer';
import campaigns from './campaignsReducer';
import campaign from './campaignReducer';
import shortUrl from './shortUrlReducer';

const rootReducer = combineReducers({
    currentUser,
    auth,
    hsid,
    campaigns,
    campaign,
    shortUrl
});
export default rootReducer;