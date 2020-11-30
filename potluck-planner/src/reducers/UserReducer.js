import {
    GET_CUR_USER,
    GET_CUR_USER_SUCCESS,
    GET_CUR_USER_FAILURE,
    GET_USERS_BY_POTLUCK,
    GET_USERS_BY_POTLUCK_SUCCESS,
    GET_USERS_BY_POTLUCK_FAILURE,
} from '../actions/UserActions.js'

const initialState = {
    fetchingUsers: false,
    gettingCurUsers: false,
    currentUser: []
}

export const userReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_CUR_USER:
            return {
                ...state,
                gettingCurUser: true,
            };
        case GET_CUR_USER_SUCCESS:
            return {
                ...state,
                gettingCurUser: false,
                currentUser: action.payload,
            };
        case GET_CUR_USER_FAILURE:
            return {
                ...state,
                gettingCurUser: false,
                error: action.payload,
            };
        case GET_USERS_BY_POTLUCK:
            return {
                ...state,
                currentPotluckUsers: action.payload,
                fetchingUsers: true,
            };
        case GET_USERS_BY_POTLUCK_SUCCESS:
            return {
                ...state,
                currentPotluckUsers: action.payload,
                fetchingUsers: false,
            };

        case GET_USERS_BY_POTLUCK_FAILURE:
            return {
                ...state,
                fetchingUsers: false,
                error: action.payload,
            };
        default:
            return state;
    }
}