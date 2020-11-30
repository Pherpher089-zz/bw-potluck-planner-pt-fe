import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTER,
} from '../actions/LoginActions.js'

const initialState = {
	isLoggingIn: false,
	isRegistering: false,
	error: null
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
				isRegistering: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggingIn: false,
				currentUser: action.payload,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoggingIn: false,
				error: action.payload,
			};
		case REGISTER:
			return {
				...state,
				isRegistering: true,
			};

		default:
			return state;
	}
};
