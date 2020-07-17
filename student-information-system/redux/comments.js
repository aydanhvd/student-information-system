import fbApp from '../utils/FireBaseInit';
import { generatePriviteChatID } from '../utils/sortID';
import { showMessage } from 'react-native-flash-message';
import { selectAuthUserID } from './auth';
import {COLORS} from '../styles/colors'
// import { applyMiddleware } from 'redux';

//Action Types
const SET_SELECTED_POST = "SET_SELECTED_POST";
//Selectors

export const MODULE_NAME = 'comments';
export const selectSelectedPost = (state) => state[MODULE_NAME].selectedPost;

//Reducer

const initialState = {
    selectedPost:[]
};
export function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_SELECTED_POST:
            return{
                ...state,
                selectedPost:payload
            };
        default:
            return state;
    }
}

//ActionCreators
export const setSelectedPost = (payload) => ({
    type: SET_SELECTED_POST,
    payload
});

//Middlewares
