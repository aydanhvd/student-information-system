import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { MODULE_NAME as postsModuleName, reducer as postsReducer } from './posts';

const reducer = combineReducers({
	[postsModuleName]: postsReducer
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
