import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { CustomText, HomeScreenHeader, HomeScreenField, Footer, HomeScrenPost } from '../components';
import { COLORS } from '../styles/colors';

export const HomeScreen = () => {
	return (
		<View style={styles.conainer}>
			<HomeScreenHeader />
			<HomeScreenField />
			<HomeScrenPost/>
			{/* <Footer style={styles.Footer}/> */}
		</View>
	);
};
const styles = StyleSheet.create({
	conainer:{
		flex: 1,
		backgroundColor:COLORS.backgroundLight
	},
	Footer:{
		position:'absolute',
		bottom:0
	}
});
