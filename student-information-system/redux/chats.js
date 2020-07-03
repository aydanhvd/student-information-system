import fbApp from '../utils/FireBaseInit';
import { generatePriviteChatID } from '../utils/sortID';
import { selectAuthUserID } from './auth';

//Action Types
const SET_CHATS_LIST = 'SET_CHATS_LIST';
const SET_CHAT_MESSAGES = 'SET_CHAT_MESSAGES';
const SET_CHATS_USERS = 'SET_CHATS_USERS';
const CLEAR_CHAT_MESSAGES = 'CLEAR_CHAT_MESSAGES';

//Selectors

export const MODULE_NAME = 'chats';
export const selectChatsList = (state) => state[MODULE_NAME].chats;
export const selectChatMessages = (state) => state[MODULE_NAME].chatMessages;
export const selectChatsUsers = (state) => state[MODULE_NAME].users;

//Reducer

const initialState = {
	chats: [],
	chatMessages: [],
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
				chatMessages: payload
			};
		case SET_CHATS_USERS:
			return {
				...state,
				users: payload
			};
		case CLEAR_CHAT_MESSAGES:
			return {
				...state,
				chatMessages: []
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


export const getAndListenChatsList = () => (dispatch) => {
	try {
		const ref = fbApp.db.ref('chats');

		ref.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const chatsObj = snapshot.val();
					const chatsArr = Object.keys(chatsObj).map((key) => ({
						id: key,
						...chatsObj[key]
					}));

					dispatch(setChatsList(chatsArr));
				}
			},
			(err) => {
				console.log('getAndListenChatsList err', err);
			}
		);

		return () => ref.off();
	} catch (error) {
		console.log('getAndListenChatsList', error);
	}
};




export const getAndListenChatMessages = (chatID) => (dispatch) => {
	try {
		const ref = fbApp.db.ref(`chatMessages/${chatID}`);
		ref.on(
			'value',
			(snapshot) => {
				if (snapshot.exists()) {
					const messagesObj = snapshot.val();
					const messagesArr = Object.keys(messagesObj).map((key) => ({
						id: key,
						...messagesObj[key]
					}));

					dispatch(setChatMessages(messagesArr));
				}else{
					console.log('snapshot doesn exisist')
				}
			},
			(err) => {
				Alert.alert('Something wrong', err.message);
			}
		);

		return () => ref.off();
	} catch (err) {
		console.log(`getAndListenChatMessages err`, err);
	}
};



export const getAndListenChatUsers = () => (dispatch) => {
	try {
		const reference = fbApp.db.ref('users');
		reference.on('value', (snapshot) => {
			if (snapshot.exists()) {
				const usersObj = snapshot.val();
				dispatch(setChatsUsers(usersObj));
			}
		});
		return () => reference.off();
	} catch (err) {
		console.log('getAndListenChatUsers err', err);
		//Todo handle error
	}
};

export const initPriviteChats = (recieverID) => async (dispatch, getState) => {
	try {
		const userID = selectAuthUserID(getState());
		const chatID = generatePriviteChatID(userID, recieverID);
		const reference = fbApp.db.ref(`chats/${chatID}`);
		const snap = await reference.once('value');
		if (!snap.exists()) {
			await reference.set({ tite: 'chat' });
			await fbApp.db.ref(`chatMessages/${chatID}`).push().set({
				auther: 'system',
				text: 'Today',
				time: fbApp.root.database.ServerValue.TIMESTAMP
			});
		}
		return chatID;
	} catch (err) {
		console.log('initPriviteChats err', err);
		//Todo handle error
	}
};
