import fbApp from '../utils/FireBaseInit';
import { generatePriviteChatID } from '../utils/sortID';
import { showMessage } from 'react-native-flash-message';
import { selectAuthUserID } from './auth';
import {COLORS} from '../styles/colors'
// import { applyMiddleware } from 'redux';

//Action Types
const SET_RECEIVER_INFO = "SET_RECEIVER_INFO";
//Selectors

export const MODULE_NAME = 'comments';
export const selectChatsUsers = (state) => state[MODULE_NAME].users;
export const selectReceiverUserName=(state)=> state[MODULE_NAME].recieverUserName;
export const selectReceiverUserImage=(state)=> state[MODULE_NAME].reciverUserImage;

//Reducer

const initialState = {
    receiverUserName:'',
    receiverUserImage:'',
};
export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_RECEIVER_INFO:
            return{
                ...state,
                receiverUserName:payload.userName,
                receiverUserImage:payload.image
            };
        default:
            return state;
    }
}

//ActionCreators
export const setReceiverInfo = (payload) => ({
    type: SET_RECEIVER_INFO,
    payload
});

//Middlewares
