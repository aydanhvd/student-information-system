import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';

import { AsyncStorage } from 'react-native';

import { MODULE_NAME as postsModuleName, reducer as postsReducer } from './posts';
import { MODULE_NAME as authModuleName, reducer as authReducer } from './auth';

import { MODULE_NAME as chatsModuleName, reducer as chatsReducer } from './chats';

const config = {
	key: 'root',
	storage: AsyncStorage
};
const reducer = combineReducers({
	[postsModuleName]: postsReducer,
	[authModuleName]: authReducer,
	[chatsModuleName]: chatsReducer
});
const rootPersistReducer = persistReducer(config, reducer);

const store = createStore(rootPersistReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export default store;
