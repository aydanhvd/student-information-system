import fbApp from '../utils/FireBaseInit';
//Action Types
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_AUTH_SUCCESS = 'SET_AUTH_SUCCESS';
const SET_AUTH_LOGOUT = 'SET_AUTH_LOGOUT';
const SET_AUTH_USER_NAME = 'SET_AUTH_USER_NAME';
const SET_AUTH_PROFILE_PIC = 'SET_AUTH_PROFILE_PIC';
const SET_AUTH_GROUPS_LIST = 'SET_AUTH_GROUPS_LIST';
const SET_AUTH_ABSENCE = 'SET_AUTH_ABSENCE';

//Selectors
export const MODULE_NAME = 'auth';
export const selectUser = (state) => state[MODULE_NAME];
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
export const selectProfilePiC = (state) => state[MODULE_NAME].profilePiC;
export const selectAuthUserID = (state) => state[MODULE_NAME].userID;
export const selectAuthGrades = (state) => state[MODULE_NAME].grades;
export const selectAuthAbsence = (state) => state[MODULE_NAME].absence;
export const selectAuthGroup = (state) => state[MODULE_NAME].group;
export const selectAuthGroupsList = (state) => state[MODULE_NAME].groupsList;

//Reducer
const initialState = {
	status: false, //if ur signd in or not
	userID: null, //use uppercase ID for ids
	name: null, //full name of user
	userName: null, //username of user
	group: '', //iD of the group ur in
	profilePiC: null, //profile picture
	grades: [], //grades which assingned is 0 for each users
	absence: 0 //absence mark by default asigned 0 for each user
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
				group: payload.group,
				profilePiC: payload.profilePiC,
				grades: payload.grades,
				absence: payload.absence
			};
		case SET_AUTH_PROFILE_PIC:
			return {
				...state,
				profilePiC: payload
			};
		case SET_AUTH_USER_NAME:
			return {
				...state,
				userName: payload
			};
		case SET_AUTH_GROUPS_LIST:
			return {
				...state,
				groupsList: payload
			};
		case SET_AUTH_ABSENCE:
			return {
				...state,
				absence: payload
			};
		case SET_AUTH_LOGOUT:
			return {
				...state,
				status: false,
				userID: null,
				name: null,
				userName: null,
				group: '',
				profilePiC: null,
				grades: [],
				absence: 0
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
export const setAuthProfilePic = (payload) => ({
	type: SET_AUTH_PROFILE_PIC,
	payload
});
export const setAuthUserName = (payload) => ({
	type: SET_AUTH_USER_NAME,
	payload
});
export const setAuthGroupsList = (payload) => ({
	type: SET_AUTH_GROUPS_LIST,
	payload
});
export const setAuthAbsence = (payload) => ({
	type: SET_AUTH_ABSENCE,
	payload
});

//Middlewares
export const getAndListenAuthGroupsList = () => (dispatch) => {
	try {
		const ref = fbApp.db.ref(`groups`);
		ref.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const groupsObj = snapshot.val();
					const groupsArr = Object.keys(groupsObj).map((key) => ({
						ID: key,
						...groupsObj[key]
					}));
					dispatch(setAuthGroupsList(groupsArr));
				}
			},
			(err) => {
				console.log('getAndListenAuthGroupsList err', err);
			}
		);
		return () => ref.off();
	} catch (err) {
		console.log('getAndListenAuthGroupsList', err);
		//todo handle error
	}
};

export const getAndListenAbcence = () => (dispatch, getState) => {
	try {
		const userID = selectAuthUserID(getState());
		const ref = fbApp.db.ref(`users/${userID}`)
		ref.on('value', (snapshot) => {
			if (snapshot.exists()) {
				const absenceMark = snapshot.val().absence;
				dispatch(setAuthAbsence(absenceMark));
			}
		});
		return () => ref.off();
	} catch (err) {
		console.log('getAndListenAbcence err', err);
	}
};
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
			group: group,
			profilePiC: '',
			absence: 0
		});
		fbApp.db.ref(`grades/${uid}`).push().set({ title: `HW-1`, grade: 0 });
		fbApp.db.ref(`grades/${uid}`).push().set({ title: `HW-2`, grade: 0 });
		fbApp.db.ref(`grades/${uid}`).push().set({ title: `HW-3`, grade: 0 });
		fbApp.db.ref(`grades/${uid}`).push().set({ title: `HW-4`, grade: 0 });
		fbApp.db.ref(`grades/${uid}`).push().set({ title: `SP`, grade: 0 });
		fbApp.db.ref(`grades/${uid}`).push().set({ title: `Final`, grade: 0 });
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

export const changeName = (userName) => (dispatch, getState) => {
	try {
		const userID = selectAuthUserID(getState());
		fbApp.db.ref(`users/${userID}/userName`).set(userName);
		dispatch(setAuthUserName(userName));
	} catch (err) {
		console.log('changeName err', err);
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

export const uploadProfilePic = (uri) => async (dispatch, getState) => {
	try {
		const response = await fetch(uri);
		const blob = await response.blob();

		const key = (await fbApp.db.ref('keys').push()).key;
		const snap = await fbApp.storage.ref(key).put(blob);
		const url = await snap.ref.getDownloadURL();
		const userID = selectAuthUserID(getState());
		const result = await fbApp.db.ref(`users/${userID}/profilePiC`).set(url);
		dispatch(setAuthProfilePic(url));
	} catch (err) {
		console.log('aploadProfilePic err ', err);
		//todo handle error
	}
};
