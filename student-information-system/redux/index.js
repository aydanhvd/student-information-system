import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { MODULE_NAME as postsModuleName, reducer as postsReducer } from './posts';
import { MODULE_NAME as authModuleName, reducer as authReducer } from './auth';
import { MODULE_NAME as chatsModuleName, reducer as chatsReducer } from './chats';
const reducer = combineReducers({
	[postsModuleName]: postsReducer,
	[authModuleName]: authReducer,
	[chatsModuleName]: chatsReducer
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
