import { combineReducers } from 'redux';
import { loginReducer } from './LoginReducer.js';
import { userReducer } from './UserReducer.js';
import { potluckReducer } from './PotluckReducer.js'

export default combineReducers({
    loginReducer,
    userReducer,
    potluckReducer
});