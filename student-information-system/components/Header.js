import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from './Customs/CustomText';
import { CustomIconBtn } from './Customs/CustomIconBtn';
import { COLORS } from '../styles/colors';
import { ICONS_LIGHT } from '../styles/iconsLight';
import { GLOBAL_STYLES } from '../styles';

export const Header = ({ title }) => {
	const { toggleDrawer, navigate } = useNavigation();
	return (
		<View style={styles.container}>
			<CustomIconBtn onPress={() => navigate('Settings')} style={styles.headerIcon} icon={ICONS_LIGHT.settingsLight} />
			<CustomText style={styles.heading}>{title}</CustomText>
			<CustomIconBtn onPress={() => toggleDrawer()} style={styles.headerIcon} icon={ICONS_LIGHT.leftAlignLight} />
			<View style={styles.indicator} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 60,
		backgroundColor: COLORS.backgroundLight,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		...GLOBAL_STYLES.shaddowBottum,
		// borderBottomEndRadius: 30,
		// borderBottomStartRadius: 30
	},
	heading: {
		fontSize: 24,
		marginTop: 8,
		color: COLORS.backgroundDark,
		alignSelf: 'center'
	},
	headerIcon: {
		alignSelf: 'center',
		width: 22,
		height: 22,
		marginTop: 8
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
