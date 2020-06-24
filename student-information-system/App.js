import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { loadFonts } from './styles/fonts';
import { RootDrawer } from './navigation/RootDrawer';
import {MaterialsScreen} from './screens/MaterialsScreen';

export default function App() {
		return (
			<MaterialsScreen/>
	
		);
	};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
