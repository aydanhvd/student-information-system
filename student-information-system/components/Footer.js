import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { COLORS } from '../styles/colors';
import { GLOBAL_STYLES } from '../styles';
import { FOOTER_ICONS_DATA } from '../styles/footerIconsData';
import { useNavigation } from '@react-navigation/native';

export const Footer = ({ style, screen }) => {
	const [ indicator, setIndicator ] = useState('');
	//indicator will be a props for indicate wich page we r in in future
	const { navigate } = useNavigation();
	const navigationHandler = (screen) => {
		setIndicator(screen);
		navigate(screen);
	};
	return (
		<View style={{ ...styles.container, ...style, ...GLOBAL_STYLES.shaddowTop }}>
			{FOOTER_ICONS_DATA.map((item) => {
				return (
					<TouchableOpacity style={[ styles.btn ]} onPress={() => navigationHandler(item.name)}>
						<Image source={item.icon} style={styles.icon} />
						{item.name === screen && <View style={styles.indicator} />}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: COLORS.backgroundLight,
		zIndex: 199
	},
	btn: {
		width: 22,
		height: 22,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	indicator: {
		position: 'absolute',
		bottom: -10,

		alignSelf: 'center',
		backgroundColor: COLORS.acsentColor,
		width: 40,
		height: 3
	}
});
//FOOTER_ICONS_DATA.map((item) => (
// 	<TouchableOpacity style={[ styles.btn ]} onPress={navigationHandler(item.name)}>
// 	<Image source={item.icon} style={styles.icon} />
// 	{item.name !== indicator && <View style={styles.indicator} />}
// </TouchableOpacity>
