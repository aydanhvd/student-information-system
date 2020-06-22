import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../styles/colors';

export const Seperator = ({ distance, color }) => {
	return <View style={{ ...styles.seperator, marginBottom: distance, backgroundColor: color}} />;
};
const styles = StyleSheet.create({
	seperator: {
		width: '93%',
		alignSelf: 'center',
		height: 1,
	}
});
