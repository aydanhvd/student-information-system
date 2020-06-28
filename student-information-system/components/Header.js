import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from './CustomText';
import { COLORS } from '../styles/colors';
import { ICONS_LIGHT } from '../styles/iconsLight';

export const Header = ({ title }) => {
	// pass icon in the right and title as a props for each screen
	const { toggleDrawer, navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => toggleDrawer()}>
				<Image source={ICONS_LIGHT.leftAlignLight} style={styles.headerIcon} />
			</TouchableOpacity>
			<CustomText style={styles.heading}>{title}</CustomText>
			<TouchableOpacity onPress={() => navigate('Settings')}>
				<Image source={ICONS_LIGHT.settingsLight} style={styles.headerIconRight} />
			</TouchableOpacity>
			<View style={styles.indicator} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 60,
		backgroundColor: COLORS.backgroundLight,
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3
	},
	heading: {
		fontSize: 24,
		color: COLORS.backgroundDark,
		alignSelf: 'center'
	},
	headerIcon: {
		width: 27,
		height: 27,
		marginLeft: -25
	},
	headerIconRight: {
		width: 27,
		height: 27,
		marginRight: -25
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
