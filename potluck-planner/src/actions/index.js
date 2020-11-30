import axios from "axios";
require('dotenv').config();

export const GET_FOOD = "GET_FOOD";
export const GET_FOOD_SUCCESS = "GET_FOOD_SUCCESS";
export const GET_FOOD_FAILURE = "GET_FOOD_FAILURE";

const url = process.env.REACT_APP_URL || "http://localhost:5000";

export const getFood = (id) => (dispatch) => {
	dispatch({ type: GET_FOOD });
	axios
		.get(
			`${url}/api/potlucks/items/${id}`,
			{
				headers: { auth: localStorage.getItem("token") },
			}
		)
		.then((res) => {
			dispatch({ type: GET_FOOD_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: GET_FOOD_FAILURE, payload: err });
		});
};


