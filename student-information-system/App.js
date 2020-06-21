import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { StyleSheet,  View } from 'react-native';

import { loadFonts} from './styles/fonts';
import { CustomText } from "./components";

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
		<View style={styles.container}>
			<CustomText>Student Information System</CustomText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
