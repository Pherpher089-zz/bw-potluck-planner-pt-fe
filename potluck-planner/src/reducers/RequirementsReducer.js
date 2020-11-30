import {
    GET_REQUIREMENTS,
    GET_REQUIREMENTS_SUCCESS,
    GET_REQUIREMENTS_FAILURE,
    ADD_REQUIREMENT,
    ADD_REQUIREMENT_SUCCESS,
    ADD_REQUIREMENT_FAILURE,
    REMOVE_REQUIREMENT,
    REMOVE_REQUIREMENT_SUCCESS,
    REMOVE_REQUIREMENT_FAILURE,
    CLAIM_REQUIREMENT,
    CLAIM_REQUIREMENT_SUCCESS,
    CLAIM_REQUIREMENT_FAILURE,
} from '../actions/RequirementsActions.js'

export const initialState = {
    currentRequirements: [],
    fetchingRequirements: false,
    addingReq: false,
    removingReq: false,
    claimingRequirement: false,
    error: null
}

export const requirementsReducer = (attendeeState = initialState, action) => {
    switch (action.type) {
        // Get Requirements
        case GET_REQUIREMENTS:
            return {
                ...attendeeState,
                fetchingRequirements: true,
                currentRequirements: action.payload,
            };
        case GET_REQUIREMENTS_SUCCESS:
            return {
                ...attendeeState,
                fetchingRequirements: false,
                currentRequirements: action.payload,
            };
        case GET_REQUIREMENTS_FAILURE:
            return {
                ...attendeeState,
                fetchingRequirements: false,
                error: action.payload,
            };
        //Adding requirement
        case ADD_REQUIREMENT:
            return {
                ...attendeeState,
                addingReq: true,
            };
        case ADD_REQUIREMENT_SUCCESS:
            return {
                ...attendeeState,
                addingReq: false,
                currentRequirements: action.payload
            };
        case ADD_REQUIREMENT_FAILURE:
            return {
                ...attendeeState,
                addingReq: false,
                error: action.payload,
            };
        case REMOVE_REQUIREMENT:
            return {
                ...attendeeState,
                removingReq: true,
            };
        case REMOVE_REQUIREMENT_SUCCESS:
            return {
                ...attendeeState,
                removingReq: false,
                currentRequirements: action.payload
            };
        case REMOVE_REQUIREMENT_FAILURE:
            return {
                ...attendeeState,
                removingReq: false,
                error: action.payload,
            };
        //Claim food
        case CLAIM_REQUIREMENT:
            return {
                ...attendeeState,
                claimingRequirement: true,
            };
        case CLAIM_REQUIREMENT_SUCCESS:
            return {
                ...attendeeState,
                claimingRequirement: false,
            };
        case CLAIM_REQUIREMENT_FAILURE:
            return {
                ...attendeeState,
                claimingRequirement: false,
                error: action.payload,
            };
        default:
            return attendeeState;
    }
}