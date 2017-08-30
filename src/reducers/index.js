import {combineReducers} from 'redux';
import currentUser from './userReducer';
import auth from './authReducer';
import hsid from './hsidReducer';

const rootReducer = combineReducers({
    currentUser,
    auth,
    hsid
});
export default rootReducer;