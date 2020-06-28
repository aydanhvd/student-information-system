import fbApp from '../utils/FireBaseInit';
//Action Types
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS';
const SET_AUTH_LOGOUT = 'SET_AUTH_LOGOUT';

//Selectors
export const MODULE_NAME = 'auth';
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
//Reducer
const initialState = {
	status: false,
	userID: null //use uppercase ID for ids
};

export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_AUTH_STATUS:
			return {
				...state,
				status: payload
			};
		case SET_AUTH_SUCCESS:
			return {
				...state,
				status: true,
				userID: payload
			};
		case SET_AUTH_LOGOUT:
			return {
				...state,
				status: false,
				userID: null
			};
		default:
			return state;
	}
}

//ActionCreators
export const setAuthStatus = (payload) => ({
	type: SET_AUTH_STATUS,
	payload
});
export const setAuthSuccess = (payload) => ({
	type: SET_AUTH_SUCCESS,
	payload
});
export const setAuthLogOut = () => ({
	type: SET_AUTH_LOGOUT
});
//Middlewares

export const logIn = (email, password) => async (dispatch) => {
	try {
		//todo ask what else can u use for not using email
		const { user } = await fbApp.auth.signInWithEmailAndPassword(email, password);
		dispatch(setAuthSuccess(user.uid));
	} catch (err) {
		console.log('log in err', err);
		//todo handle error
	}
};

export const logOut = () => async (dispatch) => {
	try {
		await fbApp.auth.signOut();
		dispatch(setAuthLogOut());
	} catch (err) {
		console.log('log out err', err);
	}
};
