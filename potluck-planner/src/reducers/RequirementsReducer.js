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

export const requirementsReducer = (state = initialState, action) => {
    switch (action.type) {
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
}