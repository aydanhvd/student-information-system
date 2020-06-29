import fbApp from '../utils/FireBaseInit';
//Action Types
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS';
const SET_AUTH_LOGOUT = 'SET_AUTH_LOGOUT';

//Selectors
export const MODULE_NAME = 'auth';
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
export const selectUser = (state) => state[MODULE_NAME];
//Reducer
const initialState = {
	status: false,
	userID: null, //use uppercase ID for ids
	name: null,
	userName: null,
	group: null
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
				userID: payload.userID,
				name: payload.name,
				userName: payload.userName,
				group: payload.group
			};
		case SET_AUTH_LOGOUT:
			return {
				...state,
				status: false,
				userID: null,
				name: null,
				userName: null,
				group: null
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
		const { user: { uid } } = await fbApp.auth.signInWithEmailAndPassword(email, password);
		//full name of user
		const reference = await fbApp.db.ref(`users/${uid}`);
		reference.on('value', (snapshot) => {
			if (snapshot.exists()) {
				const userObj = snapshot.val();
				dispatch(
					setAuthSuccess({
						userID: uid,
						...userObj
					})
				);
			}
		});
	} catch (err) {
		console.log('log in err', err);
		//todo handle error
	}
};
export const signUp = (email, name, userName, password, group) => async (dispatch) => {
	try {
		//todo ask what else can u use for not using email
		const { user: { uid } } = await fbApp.auth.createUserWithEmailAndPassword(email, password);
		fbApp.db.ref(`users/${uid}`).set({
			userName: userName,
			name: name,
			group: group
		});

		dispatch(
			setAuthSuccess({
				userID: uid,
				name,
				userName,
				password,
				group
			})
		);
	} catch (err) {
		console.log('signUp err', err);
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
