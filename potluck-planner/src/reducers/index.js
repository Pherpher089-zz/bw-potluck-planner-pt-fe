import { combineReducers } from 'redux';
import { loginReducer } from './LoginReducer.js'
import { userReducer } from './UserReducer.js'

export default combineReducers({
    loginReducer
});