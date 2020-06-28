import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import { loadFonts } from './styles/fonts';
import { UIComonentProvider } from './utils/UIComonentProvider';
import { RootDrawer } from './navigation/RootDrawer';
import store from './redux';

export default function App() {
	//a state for determining wether fonst are installes or not
	const [ ready, setReady ] = useState(false);
	//is fonts r't insatlled install them and then return rootdrawer
	if (!ready) {
		return (
			<AppLoading
				startAsync={loadFonts}
				onFinish={() => setReady(true)}
				onError={() => console.log('Ooop something went wrong try again')}
			/>
		);
	}
	return (
		<Provider store={store}>
			<UIComonentProvider>
				<RootDrawer />
			</UIComonentProvider>
		</Provider>
	);
}
