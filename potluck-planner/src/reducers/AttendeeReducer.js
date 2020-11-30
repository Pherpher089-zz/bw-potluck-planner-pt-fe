import {
    ADD_ATTENDEE,
    ADD_ATTENDEE_SUCCESS,
    ADD_ATTENDEE_FAILURE,
    REMOVE_ATTENDEE,
    REMOVE_ATTENDEE_SUCCESS,
    REMOVE_ATTENDEE_FAILURE,
} from '../actions/AttendeeActions.js'

export const initialState = {
    currentPotluckUsers: [],
    addingAttendee: false,
    removingAttendee: false,
    error: null,
}

export const attendeeReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}