import axios from "axios";
require('dotenv').config();

const url = process.env.REACT_APP_URL || "http://localhost:5000";

export const ADD_ATTENDEE = "ADD_ATTENDEE";
export const ADD_ATTENDEE_SUCCESS = "ADD_ATTENDEE_SUCCESS";
export const ADD_ATTENDEE_FAILURE = "ADD_ATTENDEE_FAILURE";

export const addAttendee = (newAttendee) => (dispatch) => {
    console.log(newAttendee, "Blah Blah");
    dispatch({ type: ADD_ATTENDEE });
    axios
        .post(
            `${url}/api/potlucks/user/add`,
            newAttendee,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            console.log(res);
            dispatch({ type: ADD_ATTENDEE_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: ADD_ATTENDEE_SUCCESS, payload: err.data });
        });
};

export const REMOVE_ATTENDEE = "REMOVE_ATTENDEE";
export const REMOVE_ATTENDEE_SUCCESS = "REMOVE_ATTENDEE_SUCCESS";
export const REMOVE_ATTENDEE_FAILURE = "REMOVE_ATTENDEE_FAILURE";

export const removeAttendee = (attendee) => (dispatch) => {
    dispatch({ type: REMOVE_ATTENDEE });
    axios
        .post(
            `${url}/api/potlucks/user/remove`,
            attendee,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            console.log(res);
            dispatch({ type: REMOVE_ATTENDEE_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: REMOVE_ATTENDEE_FAILURE, payload: err.data });
        });
};