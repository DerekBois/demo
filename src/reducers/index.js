import {combineReducers} from 'redux';
import currentUser from './userReducer';
import auth from './authReducer';
import visit from './hsidReducer';

const rootReducer = combineReducers({
    currentUser,
    auth,
    visit
});
export default rootReducer;