import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { MODULE_NAME as postsModuleName, reducer as postsReducer } from './posts';
import { MODULE_NAME as authModuleName, reducer as authReducer } from './auth';
const reducer = combineReducers({
	[postsModuleName]: postsReducer,
	[authModuleName]: authReducer
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
