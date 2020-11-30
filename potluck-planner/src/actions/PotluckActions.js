import axios from "axios";
require('dotenv').config();

const url = process.env.REACT_APP_URL || "http://localhost:5000";

export const GET_POTLUCKS = "GET_POTLUCKS";
export const GET_POTLUCKS_SUCCESS = "GET_POTLUCKS_SUCCESS";
export const GET_POTLUCKS_FAILURE = "GET_POTLUCKS_FAILURE";

export const getPotlucks = () => (dispatch) => {
    dispatch({ type: GET_POTLUCKS });
    axios
        .get(`${url}/api/potlucks`, {
            headers: { auth: localStorage.getItem("token") },
        })
        .then((res) => {
            console.log(res);
            dispatch({ type: GET_POTLUCKS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("This is actually the error" + err);
            dispatch({ type: GET_POTLUCKS_FAILURE, payload: err });
        });
};

export const GET_POTLUCK_BY_ID = "GET_POTLUCK_BY_ID";
export const GET_POTLUCK_BY_ID_SUCCESS = "GET_POTLUCK_BY_ID_SUCCESS";
export const GET_POTLUCK_BY_ID_FAILURE = "GET_POTLUCK_BY_ID_FAILURE";

export const getPotluckById = (id) => (dispatch) => {
    dispatch({ type: GET_POTLUCK_BY_ID });
    axios
        .get(`${url}/api/potlucks/${id}`, {
            headers: { auth: localStorage.getItem("token") },
        })
        .then((res) => {
            dispatch({ type: GET_POTLUCK_BY_ID_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: GET_POTLUCK_BY_ID_FAILURE, payload: err })
        })
}

export const CREATE_POTLUCK = "CREATE_POTLUCK";
export const CREATE_POTLUCK_SUCCESS = "CREATE_POTLUCk_SUCCESS";
export const CREATE_POTLUCK_FAILURE = "CREATE_POTLUCK_FAILURE";

export const addPotluck = (newPotluck) => (dispatch) => {
    console.log(newPotluck, "blah");
    dispatch({ type: CREATE_POTLUCK });
    axios
        .post(
            `${url}/api/potlucks`,
            newPotluck,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            console.log(res);
            dispatch({ type: CREATE_POTLUCK_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: CREATE_POTLUCK_FAILURE, payload: err });
        });
};


export const DELETE_POTLUCK = "DELETE_POTLUCK";
export const DELETE_POTLUCK_SUCCESS = "DELETE_POTLUCK_SUCCESS";
export const DELETE_POTLUCK_FAILURE = "DELETE_POTLUCK_FAILURE";

export const deletePotluck = (id) => (dispatch) => {
    dispatch({ type: DELETE_POTLUCK });
    axios
        .delete(
            `${url}/api/potlucks/${id}`,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            dispatch({ type: DELETE_POTLUCK_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: DELETE_POTLUCK_FAILURE, payload: err });
        });
};