import {
    GET_POTLUCKS,
    GET_POTLUCKS_SUCCESS,
    GET_POTLUCKS_FAILURE,
    GET_POTLUCK_BY_ID,
    GET_POTLUCK_BY_ID_SUCCESS,
    GET_POTLUCK_BY_ID_FAILURE,
    CREATE_POTLUCK,
    CREATE_POTLUCK_FAILURE,
    CREATE_POTLUCK_SUCCESS,
    DELETE_POTLUCK,
    DELETE_POTLUCK_SUCCESS,
    DELETE_POTLUCK_FAILURE,
} from '../actions/PotluckActions.js'

export const initialState = {
    potlucks: [],
    currentPotlucks: [],
    addingPotlucks: false,
    deletingPotluck: false,
    error: null
};

export const potluckReducer = (potluckState = initialState, action) => {
    switch (action.type) {
        //Getting Potlucks
        case GET_POTLUCKS:
            return {
                ...potluckState,
                fetchingPotlucks: true,
                potlucks: action.payload
            };

        case GET_POTLUCKS_SUCCESS:
            return {
                ...potluckState,
                potlucks: action.payload,
                fetchingPotlucks: false,
            };

        case GET_POTLUCKS_FAILURE:
            return {
                ...potluckState,
                fetchingPotlucks: false,
                error: action.payload,
            };
        //Getting Potlucks by ID
        case GET_POTLUCK_BY_ID:
            return {
                ...potluckState,
                currentPotluck: action.payload,
                fetchingPotluck: true,
                isLoggingIn: false,
                isRegistering: false,
            };
        case GET_POTLUCK_BY_ID_SUCCESS:
            return {
                ...potluckState,
                currentPotluck: action.payload,
                fetchingPotluck: false,
            };

        case GET_POTLUCK_BY_ID_FAILURE:
            return {
                ...potluckState,
                fetchingPotluck: false,
                error: action.payload,
            };
        //Creating Potlucks
        case CREATE_POTLUCK:
            return {
                ...potluckState,
                addingPotlucks: true,
            };
        case CREATE_POTLUCK_SUCCESS:
            return {
                ...potluckState,
                addingPotlucks: false,
            };
        case CREATE_POTLUCK_FAILURE:
            return {
                ...potluckState,
                addingPotlucks: false,
                error: action.payload,
            };
        // Deleting potluck
        case DELETE_POTLUCK:
            return {
                ...potluckState,
                deletingPotluck: true,
            };
        case DELETE_POTLUCK_SUCCESS:
            return {
                ...potluckState,
                deletingPotluck: false,
            };
        case DELETE_POTLUCK_FAILURE:
            return {
                ...potluckState,
                deletingPotluck: false,
            };
        default:
            return potluckState;
    }
}