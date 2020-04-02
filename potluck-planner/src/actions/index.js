import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const REGISTER = "REGISTER";
export const LOGOUT = "LOGOUT";
export const GETPOTLUCKS = "GETPOTLUCKS";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const GETPOTLUCKBYID = "GETPOTLUCKBYID";
export const GETPOTLUCKSBYIDSUCCESS = "GETPOTLUCKSBYIDSUCCESS";
export const GETPOTLUCKSBYIDFAILURE = "GETPOTLUCKSBYIDFAILURE";
export const CREATE_POTLUCK = "CREATE_POTLUCK";

const devURL = process.env.DEV_URL;

export const login = creds => dispatch => {
	window.alert("Logging in");
	dispatch({ type: LOGIN_START });
	return axios
		.post(`http://localhost:5000/api/auth/login`, creds)
		.then(res => {
			localStorage.setItem("token", res.data.authToken);
			window.alert(res.data.message);
		})
		.catch(err => console.log(err));
};

export const register = regObj => dispatch => {
	dispatch({ type: REGISTER });
	return axios
		.post(`http://localhost:5000/api/auth/register`, regObj)
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

export const getPotlucks = () => dispatch => {
	dispatch({ type: GETPOTLUCKS });

	axios
		.get(`http://localhost:5000/api/potlucks`, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then(res => {
			console.log(res);
			dispatch({ type: SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log("This is actually the error" + err);
			dispatch({ type: FAILURE, payload: err });
		});
};

export const getPotluckById = id => dispatch => {
	dispatch({ type: GETPOTLUCKBYID });

	axios
		.get(`http://localhost:5000/api/potlucks/${id}`, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then(res => {
			console.log(res);
			dispatch({ type: GETPOTLUCKSBYIDSUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log("This is actually the error" + err);
			dispatch({ type: GETPOTLUCKSBYIDFAILURE, payload: err });
		});
};

export const addPotluck = newPotluck => dispatch => {
	console.log(newPotluck, "blah");
	dispatch({ type: CREATE_POTLUCK });
	axios
		.post(`http://localhost:5000/api/potlucks`, newPotluck, {
			headers: { auth: localStorage.getItem("token") },
		})
		.then(res => {
			console.log(res);
			dispatch({ type: SUCCESS, payload: res.data });
		})
		.catch(err => console.log(err));
};
