import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { COLORS } from '../../styles';
import { DrawerHeader } from './DrawerHeader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import { connect } from 'react-redux';
import {getAndListenGroup} from '../../redux/materials';

export const Drawer = connect(null,{getAndListenGroup})(({ navigation ,getAndListenGroup}) => {
	useEffect(() => {
		const unsub = getAndListenGroup()
		return unsub
	}, []);
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<LinearGradient
					colors={[ COLORS.acsentColor, COLORS.drawerLight ]}
					style={{ ...StyleSheet.absoluteFill }}
					enabled
					keyboardVerticalOffset={100}
				/>
				<DrawerHeader navigation={navigation} />
				<DrawerBody />
				<DrawerFooter navigation={navigation} />
			</View>
		</SafeAreaProvider>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 250
	},
	gradient: {
		...StyleSheet.absoluteFill
	}
});
