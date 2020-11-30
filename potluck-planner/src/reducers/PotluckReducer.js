import {
    GET_POTLUCKS,
    GET_POTLUCKS_SUCCESS,
    GET_POTLUCKS_FAILURE,
    GET_POTLUCK_BY_ID,
    GET_POTLUCKS_BY_ID_SUCCESS,
    GET_POTLUCKS_BY_ID_FAILURE,
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

export const potluckReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        //Getting Potlucks
        case GET_POTLUCKS:
            return {
                ...state,
                fetchingPotlucks: true,
            };

        case GET_POTLUCKS_SUCCESS:
            return {
                ...state,
                potlucks: action.payload,
                fetchingPotlucks: false,
            };

        case GET_POTLUCKS_FAILURE:
            return {
                ...state,
                fetchingPotlucks: false,
                error: action.payload,
            };
        //Getting Potlucks by ID
        case GET_POTLUCK_BY_ID:
            return {
                ...state,
                currentPotluck: action.payload,
                fetchingPotluck: true,
                isLoggingIn: false,
                isRegistering: false,
            };
        case GET_POTLUCKS_BY_ID_SUCCESS:
            return {
                ...state,
                currentPotluck: action.payload,
                fetchingPotluck: false,
            };

        case GET_POTLUCKS_BY_ID_FAILURE:
            return {
                ...state,
                fetchingPotluck: false,
                error: action.payload,
            };
        //Creating Potlucks
        case CREATE_POTLUCK:
            return {
                ...state,
                addingPotlucks: true,
            };
        case CREATE_POTLUCK_SUCCESS:
            return {
                ...state,
                addingPotlucks: false,
            };
        case CREATE_POTLUCK_FAILURE:
            return {
                ...state,
                addingPotlucks: false,
                error: action.payload,
            };
        // Deleting potluck
        case DELETE_POTLUCK:
            return {
                ...state,
                deletingPotluck: true,
            };
        case DELETE_POTLUCK_SUCCESS:
            return {
                ...state,
                deletingPotluck: false,
            };
        case DELETE_POTLUCK_FAILURE:
            return {
                ...state,
                deletingPotluck: false,
            };
    }
}