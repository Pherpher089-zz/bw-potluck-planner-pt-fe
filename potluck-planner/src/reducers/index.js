import { combineReducers } from 'redux';
import { loginReducer } from './LoginReducer.js';
import { userReducer } from './UserReducer.js';
import { potluckReducer } from './PotluckReducer.js'
import { requirementsReducer } from './RequirementsReducer.js'
import { attendeeReducer } from './AttendeeReducer.js'

export default combineReducers({
    loginState: loginReducer,
    userState: userReducer,
    potluckState: potluckReducer,
    requirementState: requirementsReducer,
    attendeeState: attendeeReducer
});