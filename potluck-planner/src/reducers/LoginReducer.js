import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTER,
} from '../actions/LoginActions.js'

import {

	GET_REQUIREMENTS,
	GET_REQUIREMENTS_SUCCESS,
	GET_REQUIREMENTS_FAILURE,
	ADD_ATTENDEE,
	ADD_ATTENDEE_SUCCESS,
	ADD_ATTENDEE_FAILURE,
	REMOVE_ATTENDEE,
	REMOVE_ATTENDEE_SUCCESS,
	REMOVE_ATTENDEE_FAILURE,
	ADD_REQUIREMENT,
	ADD_REQUIREMENT_SUCCESS,
	ADD_REQUIREMENT_FAILURE,
	REMOVE_REQUIREMENT,
	REMOVE_REQUIREMENT_SUCCESS,
	REMOVE_REQUIREMENT_FAILURE,
	GET_FOOD,
	GET_FOOD_SUCCESS,
	GET_FOOD_FAILURE,
	CLAIM_REQUIREMENT,
	CLAIM_REQUIREMENT_SUCCESS,
	CLAIM_REQUIREMENT_FAILURE,

} from "../actions";

const initialState = {
	isLoggingIn: false,
	isRegistering: false,
	fetchingRequirements: false,
	currentPotluckUsers: [],
	currentRequirements: [],
	currentFood: [],
	error: null,
	addingAttendee: false,
	removingAttendee: false,
	addingReq: false,
	removingReq: false,
	claimingRequirement: false,
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

		// Get Requirements
		case GET_REQUIREMENTS:
			return {
				...state,
				fetchingRequirements: true,
				currentRequirements: action.payload,
			};
		case GET_REQUIREMENTS_SUCCESS:
			return {
				...state,
				fetchingRequirements: false,
				currentRequirements: action.payload,
			};
		case GET_REQUIREMENTS_FAILURE:
			return {
				...state,
				fetchingRequirements: false,
				error: action.payload,
			};

		// Adding attendees to potluck
		case ADD_ATTENDEE:
			return {
				...state,
				addingAttendee: true,
			};
		case ADD_ATTENDEE_SUCCESS:
			return {
				...state,
				addingAttendee: false,
				currentPotluckUsers: action.payload

			};
		case ADD_ATTENDEE_FAILURE:
			return {
				...state,
				addingAttendee: false,
				error: action.payload,
			};
		// Adding attendees to potluck
		case REMOVE_ATTENDEE:
			return {
				...state,
				removeAttendee: true,
			};
		case REMOVE_ATTENDEE_SUCCESS:
			return {
				...state,
				removingAttendee: false,
				currentPotluckUsers: action.payload

			};
		case REMOVE_ATTENDEE_FAILURE:
			return {
				...state,
				removingAttendee: false,
				error: action.payload,
			};
		//Adding requirement
		case ADD_REQUIREMENT:
			return {
				...state,
				addingReq: true,
			};
		case ADD_REQUIREMENT_SUCCESS:
			return {
				...state,
				addingReq: false,
				currentRequirements: action.payload
			};
		case ADD_REQUIREMENT_FAILURE:
			return {
				...state,
				addingReq: false,
				error: action.payload,
			};
		case REMOVE_REQUIREMENT:
			return {
				...state,
				removingReq: true,
			};
		case REMOVE_REQUIREMENT_SUCCESS:
			return {
				...state,
				removingReq: false,
				currentRequirements: action.payload
			};
		case REMOVE_REQUIREMENT_FAILURE:
			return {
				...state,
				removingReq: false,
				error: action.payload,
			};

		//Getting food
		case GET_FOOD:
			return {
				...state,
				gettingFood: true,
			};
		case GET_FOOD_SUCCESS:
			return {
				...state,
				gettingFood: false,
				currentFood: action.payload,
			};
		case GET_FOOD_FAILURE:
			return {
				...state,
				gettingFood: false,
				error: action.payload,
			};

		//Claim food
		case CLAIM_REQUIREMENT:
			return {
				...state,
				claimingRequirement: true,
			};
		case CLAIM_REQUIREMENT_SUCCESS:
			return {
				...state,
				claimingRequirement: false,
			};
		case CLAIM_REQUIREMENT_FAILURE:
			return {
				...state,
				claimingRequirement: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
