import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";
export const GET_POTLUCKS = "GET_POTLUCKS";
export const GET_POTLUCKS_SUCCESS = "GET_POTLUCKS_SUCCESS";
export const GET_POTLUCKS_FAILURE = "GET_POTLUCKS_FAILURE";
export const GET_POTLUCK_BY_ID = "GET_POTLUCK_BY_ID";
export const GET_POTLUCKS_BY_ID_SUCCESS = "GET_POTLUCKS_BY_ID_SUCCESS";
export const GET_POTLUCKS_BY_ID_FAILURE = "GET_POTLUCKS_BY_ID_FAILURE";
export const GET_USERS_BY_POTLUCK = "GET_USERS_BY_POTLUCK";
export const GET_USERS_BY_POTLUCK_SUCCESS = "GET_USERS_BY_POTLUCK_SUCCESS";
export const GET_USERS_BY_POTLUCK_FAILURE = "GET_USERS_BY_POTLUCK_FAILURE";
export const GET_REQUIREMENTS = "GET_REQUIREMENTS";
export const GET_REQUIREMENTS_SUCCESS = "GET_REQUIREMENTS_SUCCESS";
export const GET_REQUIREMENTS_FAILURE = "GET_REQUIREMENTS_FAILURE";

export const ADD_ATTENDEE = "ADD_ATTENDEE";
export const ADD_ATTENDEE_SUCCESS = "ADD_ATTENDEE_SUCCESS";
export const ADD_ATTENDEE_FAILURE = "ADD_ATTENDEE_FAILURE";

export const REMOVE_ATTENDEE = "REMOVE_ATTENDEE";
export const REMOVE_ATTENDEE_SUCCESS = "REMOVE_ATTENDEE_SUCCESS";
export const REMOVE_ATTENDEE_FAILURE = "REMOVE_ATTENDEE_FAILURE";

export const ADD_REQUIREMENT = "ADD_REQUIREMENT";
export const ADD_REQUIREMENT_SUCCESS = "ADD_REQUIREMENT_SUCCESS";
export const ADD_REQUIREMENT_FAILURE = "ADD_REQUIREMENT_FAILURE";

export const REMOVE_REQUIREMENT = "REMOVE_REQUIREMENT";
export const REMOVE_REQUIREMENT_SUCCESS = "REMOVE_REQUIREMENT_SUCCESS";
export const REMOVE_REQUIREMENT_FAILURE = "REMOVE_REQUIREMENT_FAILURE";

export const GET_FOOD = "GET_FOOD";
export const GET_FOOD_SUCCESS = "GET_FOOD_SUCCESS";
export const GET_FOOD_FAILURE = "GET_FOOD_FAILURE";

export const CLAIM_FOOD = "CLAIM_FOOD";
export const CLAIM_FOOD_SUCCESS = "CLAIM_FOOD_SUCCESS";
export const CLAIM_FOOD_FAILURE = "CLAIM_FOOD_FAILURE";

export const CREATE_POTLUCK = "CREATE_POTLUCK";

//const devURL = process.env.DEV_URL;

export const login = (creds) => (dispatch) => {
	window.alert("Logging in");
	dispatch({ type: LOGIN_START });
	return axios
		.post(`http://localhost:5000/api/auth/login`, creds)
		.then((res) => {
			localStorage.setItem("token", res.data.authToken);
			window.alert(res.data.message);
		})
		.catch((err) => console.log(err));
};

export const register = (regObj) => (dispatch) => {
	dispatch({ type: REGISTER });
	return axios
		.post(`http://localhost:5000/api/auth/register`, regObj)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
};

export const getPotlucks = () => (dispatch) => {
	dispatch({ type: GET_POTLUCKS });

	axios
		.get(`http://localhost:5000/api/potlucks`, {
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

export const getPotluckById = (id) => (dispatch) => {
	dispatch({ type: GET_POTLUCK_BY_ID });

	axios
		.get(`http://localhost:5000/api/potlucks/${id}`, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			console.log(res);
			dispatch({ type: GET_POTLUCKS_BY_ID_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log("This is actually the error" + err);
			dispatch({ type: GET_POTLUCKS_BY_ID_FAILURE, payload: err });
		});
};

export const getUsersByPotluckId = (id) => (dispatch) => {
	dispatch({ type: GET_USERS_BY_POTLUCK });

	axios
		.get(`http://localhost:5000/api/users/by-potluck/${id}`, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			console.log("Here");
			console.log(res.data);
			dispatch({ type: GET_USERS_BY_POTLUCK_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log("This is actually the error" + err);
			dispatch({ type: GET_USERS_BY_POTLUCK_FAILURE, payload: err });
		});
};

export const getRequirements = (id) => (dispatch) => {
	dispatch({ type: GET_REQUIREMENTS });

	axios
		.get(`http://localhost:5000/api/potlucks/reqs/${id}`, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			dispatch({ type: GET_REQUIREMENTS_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log("This is actually the error" + err);
			dispatch({ type: GET_REQUIREMENTS_FAILURE, payload: err });
		});
};

export const addPotluck = (newPotluck) => (dispatch) => {
	console.log(newPotluck, "blah");
	dispatch({ type: CREATE_POTLUCK });
	axios
		.post(`http://localhost:5000/api/potlucks`, newPotluck, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			console.log(res);
			dispatch({ type: GET_POTLUCKS_SUCCESS, payload: res.data });
		})
		.catch((err) => console.log(err));
};

export const addAttendee = (newAttendee) => (dispatch) => {
	console.log(newAttendee, "Blah Blah");
	dispatch({ type: ADD_ATTENDEE });
	axios
		.post(`http://localhost:5000/api/potlucks/user/add`, newAttendee, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			console.log(res);
			dispatch({ type: ADD_ATTENDEE_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: ADD_ATTENDEE_SUCCESS, payload: err.data });
		});
};

export const removeAttendee = (attendee) => (dispatch) => {
	dispatch({ type: REMOVE_ATTENDEE });
	axios
		.post(`http://localhost:5000/api/potlucks/user/remove`, attendee, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			console.log(res);
			dispatch({ type: REMOVE_ATTENDEE_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: REMOVE_ATTENDEE_FAILURE, payload: err.data });
		});
};

export const addRequirement = (requirement, potluckId) => (dispatch) => {
	dispatch({ type: ADD_REQUIREMENT });
	const id = potluckId;
	axios
		.post(`http://localhost:5000/api/potlucks/reqs/${id}`, requirement, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			dispatch({ type: ADD_REQUIREMENT_SUCCESS, payload: res });
		})
		.catch((err) => {
			dispatch({ type: ADD_REQUIREMENT_FAILURE, payload: err });
		});
};

export const removeRequirement = (id) => (dispatch) => {
	dispatch({ type: REMOVE_REQUIREMENT });
	axios
		.delete(`http://localhost:5000/api/potlucks/reqs/${id}`, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			dispatch({ type: REMOVE_REQUIREMENT_SUCCESS });
		})
		.catch((err) => {
			dispatch({ type: REMOVE_REQUIREMENT_FAILURE, payload: err });
		});
};

export const getFood = (id) => (dispatch) => {
	dispatch({ type: GET_FOOD });
	axios
		.get(`http://localhost:5000/api/potlucks/items/${id}`, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			dispatch({ type: GET_FOOD_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: GET_FOOD_FAILURE, payload: err });
		});
};

export const claimFood = (food) => (dispatch) => {
	dispatch({ type: CLAIM_FOOD });
	let id = food.potluckId;
	console.log("Claim food");
	console.log(id);
	let newFood = {
		foodCategory: food.foodCategory,
		foodDescription: food.foodDescription,
		servings: food.servings,
	};
	axios
		.post(`http://localhost:5000/api/potlucks/items/${id}`, newFood, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then((res) => {
			dispatch({ type: CLAIM_FOOD_SUCCESS });
		})
		.catch((err) => {
			dispatch({ type: CLAIM_FOOD_FAILURE, payload: err });
		});
};
