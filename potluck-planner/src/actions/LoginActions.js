import axios from "axios";
require('dotenv').config();

const url = process.env.REACT_APP_URL || "http://localhost:5000";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";

export const login = (creds) => (dispatch) => {
    console.log("Login entered")
    console.log(creds)
    dispatch({ type: LOGIN_START });
    return axios
        .post(
            `${url}/api/auth/login`,
            creds
        )
        .then((res) => {
            console.log("Here");
            localStorage.setItem("token", res.data.authToken);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        })
        .catch((err) => {
            dispatch({ type: LOGIN_FAILURE, payload: err });
            console.log(err);
        });
};

export const register = (regObj) => (dispatch) => {
    dispatch({ type: REGISTER });
    return axios
        .post(
            `${url}/api/auth/register`,
            regObj
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};