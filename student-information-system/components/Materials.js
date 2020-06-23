import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { CustomText } from './CustomText';
import { ProgressBar } from './ProgressBar';
import { COLORS } from '../styles/colors';
import { Seperator } from './Seperator';

export const Materials = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<CustomText style={styles.heading}>Materials</CustomText>
			<Seperator color={COLORS.backgroundLight} distance={16} />
			<ProgressBar color={COLORS.acsentColor} height={14} progress={30} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '40%',
		backgroundColor: COLORS.componentsDark,
		borderRadius: 4,
		height: 110,
		paddingHorizontal: 5,
		marginHorizontal: 16
	},
	heading: {
		color: COLORS.backgroundLight,
		fontSize: 24,
		marginVertical: 13,
		marginHorizontal: 16
	}
});
