import fbApp from '../utils/FireBaseInit';
//Action Types
const SET_CHATS_LIST = 'SET_CHATS_LIST';
const SET_CHAT_MESSAGES = 'SET_CHAT_MESSAGES';
const SET_CHATS_USERS = 'SET_CHATS_USERS';
const CLEAR_CHAT_MESSAGES = 'CLEAR_CHAT_MESSAGES';

//Selectors

export const MODULE_NAME = 'chats';
export const selectChatsList = (state) => state[MODULE_NAME].chats;
export const selectChatMessages = (state) => state[MODULE_NAME].messages;
export const selectChatsUsers = (state) => state[MODULE_NAME].users;

//Reducer

const initialState = {
	chats: [],
	messages: [],
	users: []
};
export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_CHATS_LIST:
			return {
				...state,
				chats: payload
			};
		case SET_CHAT_MESSAGES:
			return {
				...state,
				messages: payload
			};
		case SET_CHATS_USERS:
			return {
				...state,
				users: payload
			};
		case CLEAR_CHAT_MESSAGES:
			return {
				...state,
				messages: []
			};
		default:
			return state;
	}
}

//ActionCreators

export const setChatsList = (payload) => ({
	type: SET_CHATS_LIST,
	payload
});
export const setChatMessages = (payload) => ({
	type: SET_CHAT_MESSAGES,
	payload
});
export const setChatsUsers = (payload) => ({
	type: SET_CHATS_USERS,
	payload
});
export const clearChatMessages = () => ({
	type: CLEAR_CHAT_MESSAGES
});

//Middlewares

export const getAndListenChatUsers = () => (dispatch) => {
	try {
		const reference = fbApp.ref('users');
		reference.on('value', (snapshot) => {
			if (snapshot.exists()) {
				dispatch(setChatsUsers(snapshot.val()));
			}
		});
		return () => reference.off();
	} catch (err) {
		console.log('getAndListenChatUsers err', err);
		//Todo handle error
	}
};
