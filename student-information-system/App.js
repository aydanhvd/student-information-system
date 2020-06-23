import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { loadFonts } from './styles/fonts';
import { RootDrawer } from './navigation/RootDrawer';
import store from './redux';

export default function App() {
	const [ ready, setReady ] = useState(false);
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
			<RootDrawer />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
