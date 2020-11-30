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

export const loginReducer = (loginState = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...loginState,
				isLoggingIn: true,
				isRegistering: false,
			};
		case LOGIN_SUCCESS:
			return {
				...loginState,
				isLoggingIn: false,
				currentUser: action.payload,
			};
		case LOGIN_FAILURE:
			return {
				...loginState,
				isLoggingIn: false,
				error: action.payload,
			};
		case REGISTER:
			return {
				...loginState,
				isRegistering: true,
			};

		default:
			return loginState;
	}
};
