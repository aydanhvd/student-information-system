import React, {useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from './CustomText';
import { IconBtn } from './IconBtn';
import { COLORS } from '../styles/colors';
import { ICONS_LIGHT } from '../styles/iconsLight';
import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";
import {ICONS_DARK} from "../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const Header = connect(mapStateToProps, {})(({ title, darkMode }) => {

	const { toggleDrawer } = useNavigation();

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark,
			color: COLORS.backgroundLight,
			source: ICONS_DARK.leftAlignDark
		} : {
			backgroundColor: COLORS.backgroundLight,
			color: COLORS.backgroundDark,
			source: ICONS_LIGHT.leftAlignLight
		};

	return (
		<View style={{...styles.container, ...colorTheme}}>
			<CustomText style={{...styles.heading, ...colorTheme}}>{title}</CustomText>
			<IconBtn onPress={() => toggleDrawer()} style={styles.headerIcon} icon={colorTheme.source} />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		height: 60,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	heading: {
		fontSize: 22,
		marginTop: 8,
		textAlign:'center',
		marginLeft:22
	},
	headerIcon: {
		alignSelf: 'center',
		width: 22,
		height: 22,
		marginTop: 8,
		marginRight:22
	},
	indicator: {
		position: 'absolute',
		bottom: 0,
		height: 3,
		left: 160,
		backgroundColor: COLORS.acsentColor,
		width: 50
	}
});
