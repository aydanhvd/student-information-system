import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { COLORS, ICONS_LIGHT, GLOBAL_STYLES } from '../../styles';

export const CustomBtn = ({ text, style, children, onPress }) => (
	<TouchableOpacity style={{ ...styles.btn, ...style }} onPress={onPress}>
		<CustomText style={styles.text}>{text}</CustomText>
		{children}
	</TouchableOpacity>
);
const styles = StyleSheet.create({
	btn: {
		flexDirection: 'row',
		width: '45%',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderWidth: 1,
		borderColor: COLORS.acsentColor,
		height: 40,
		borderRadius: 4,
		backgroundColor: COLORS.backgroundLight,
		...GLOBAL_STYLES.shaddowTop
	},
	text: {
		fontSize: 16,
		color: COLORS.acsentColor
	}
});
