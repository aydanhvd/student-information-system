import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';
import { COLORS, ICONS_LIGHT, GLOBAL_STYLES } from '../styles';
import {connect} from "react-redux";
import {selectTheme} from "../redux/theme";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});


export const Button = connect(mapStateToProps, {})(({ text, style, children, onPress, darkMode }) => {

	const colorTheme = darkMode
		? {
			color: COLORS.drawerDark,
		} : {
			color: COLORS.acsentColor,
		};

	return (
		<TouchableOpacity style={{...styles.btn, ...style, borderColor: colorTheme.color}} onPress={onPress}>
			<CustomText style={{...styles.text, ...colorTheme}}>{text}</CustomText>
			{children}
		</TouchableOpacity>
	)
});
const styles = StyleSheet.create({
	btn: {
		flexDirection: 'row',
		width: '45%',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderBottomWidth: 1,
		height: 40,
		borderRadius: 4,

	},
	text: {
		fontSize: 16,
	}
});
