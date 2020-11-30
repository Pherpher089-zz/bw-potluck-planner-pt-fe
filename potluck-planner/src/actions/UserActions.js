import axios from "axios";
require('dotenv').config();

const url = process.env.REACT_APP_URL || "http://localhost:5000";

export const GET_CUR_USER = "GET_CUR_USER";
export const GET_CUR_USER_SUCCESS = "GET_CUR_USER_SUCCESS";
export const GET_CUR_USER_FAILURE = "GET_CUR_USER_FAILURE";


export const getCurrentUser = () => (dispatch) => {
    dispatch({ type: GET_CUR_USER });
    axios
        .get(
            `${url}/api/users/current`,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            dispatch({ type: GET_CUR_USER_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: GET_CUR_USER_FAILURE, payload: err });
        });
};

export const GET_USERS_BY_POTLUCK = "GET_USERS_BY_POTLUCK";
export const GET_USERS_BY_POTLUCK_SUCCESS = "GET_USERS_BY_POTLUCK_SUCCESS";
export const GET_USERS_BY_POTLUCK_FAILURE = "GET_USERS_BY_POTLUCK_FAILURE";

export const getUsersByPotluckId = (id) => (dispatch) => {
    dispatch({ type: GET_USERS_BY_POTLUCK });

    axios
        .get(
            `${url}/api/users/by-potluck/${id}`,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            dispatch({ type: GET_USERS_BY_POTLUCK_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("This is actually the error" + err);
            dispatch({ type: GET_USERS_BY_POTLUCK_FAILURE, payload: err });
        });
}; 