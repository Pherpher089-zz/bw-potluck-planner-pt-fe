import axios from "axios";
require('dotenv').config();

const url = process.env.REACT_APP_URL || "http://localhost:5000";

export const GET_REQUIREMENTS = "GET_REQUIREMENTS";
export const GET_REQUIREMENTS_SUCCESS = "GET_REQUIREMENTS_SUCCESS";
export const GET_REQUIREMENTS_FAILURE = "GET_REQUIREMENTS_FAILURE";

export const getRequirements = (id) => (dispatch) => {
    dispatch({ type: GET_REQUIREMENTS });

    axios
        .get(
            `${url}/api/potlucks/reqs/${id}`,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            dispatch({ type: GET_REQUIREMENTS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log("This is actually the error" + err);
            dispatch({ type: GET_REQUIREMENTS_FAILURE, payload: err });
        });

};

export const ADD_REQUIREMENT = "ADD_REQUIREMENT";
export const ADD_REQUIREMENT_SUCCESS = "ADD_REQUIREMENT_SUCCESS";
export const ADD_REQUIREMENT_FAILURE = "ADD_REQUIREMENT_FAILURE";

export const addRequirement = (requirement, potluckId) => (dispatch) => {
    dispatch({ type: ADD_REQUIREMENT });
    const id = potluckId;
    axios
        .post(
            `${url}/api/potlucks/reqs/${id}`,
            requirement,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            dispatch({ type: ADD_REQUIREMENT_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: ADD_REQUIREMENT_FAILURE, payload: err });
        });
};

export const REMOVE_REQUIREMENT = "REMOVE_REQUIREMENT";
export const REMOVE_REQUIREMENT_SUCCESS = "REMOVE_REQUIREMENT_SUCCESS";
export const REMOVE_REQUIREMENT_FAILURE = "REMOVE_REQUIREMENT_FAILURE";

export const removeRequirement = (id) => (dispatch) => {
    dispatch({ type: REMOVE_REQUIREMENT });
    axios
        .delete(
            `${url}/api/potlucks/reqs/${id}`,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            dispatch({ type: REMOVE_REQUIREMENT_SUCCESS, payload: res });
        })
        .catch((err) => {
            dispatch({ type: REMOVE_REQUIREMENT_FAILURE, payload: err });
        });
};

export const CLAIM_REQUIREMENT = "CLAIM_REQUIREMENT";
export const CLAIM_REQUIREMENT_SUCCESS = "CLAIM_REQUIREMENT_SUCCESS";
export const CLAIM_REQUIREMENT_FAILURE = "CLAIM_REQUIREMENT_FAILURE";

export const claimRequirement = (food) => (dispatch) => {
    dispatch({ type: CLAIM_REQUIREMENT });
    let id = food.reqId;
    console.log("Claim food");
    console.log(id);
    let newFood = {
        potluckId: food.potluckId,
        foodCategory: food.foodCategory,
        foodDescription: food.foodDescription,
        servings: food.servings,
    };
    axios
        .put(
            `${url}api/potlucks/reqs/${id}`,
            newFood,
            {
                headers: { auth: localStorage.getItem("token") },
            }
        )
        .then((res) => {
            dispatch({ type: CLAIM_REQUIREMENT_SUCCESS });
        })
        .catch((err) => {
            dispatch({ type: CLAIM_REQUIREMENT_FAILURE, payload: err });
        });
};