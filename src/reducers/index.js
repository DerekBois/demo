import {combineReducers} from 'redux';
import currentUser from './userReducer';
import auth from './authReducer';
import hsid from './hsidReducer';
import campaigns from './campaignsReducer';

const rootReducer = combineReducers({
    currentUser,
    auth,
    hsid,
    campaigns
});
export default rootReducer;