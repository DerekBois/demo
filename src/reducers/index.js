import {combineReducers} from 'redux';
import currentUser from './userReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
    currentUser,
    auth
});
export default rootReducer;