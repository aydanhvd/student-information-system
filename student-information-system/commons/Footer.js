import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { COLORS } from '../styles/colors';
import { GLOBAL_STYLES } from '../styles';
import { FOOTER_ICONS_DATA } from '../styles/footerIconsData';
import { useNavigation } from '@react-navigation/native';
import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const Footer = connect(mapStateToProps, {})(({ style, screen, darkMode }) => {
	const [ indicator, setIndicator ] = useState('');
	//indicator will be a props for indicate wich page we r in in future
	const { navigate } = useNavigation();
	const navigationHandler = (screen) => {
		setIndicator(screen);
		navigate(screen);
	};

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark,
			indicatorTheme: COLORS.drawerDark,
		} : {
			backgroundColor: COLORS.backgroundLight,
			indicatorTheme: COLORS.acsentColor,
		};

	return (
		<View style={{ ...styles.container, ...style, ...GLOBAL_STYLES.shaddowTop, ...colorTheme }}>
			{FOOTER_ICONS_DATA.map((item) => {
				return (
					<TouchableOpacity
						style={[ styles.btn ]}
						onPress={() => navigationHandler(item.name)}
						key={item.indicator}
					>
						<Image source={darkMode ? item.iconDark : item.icon} style={styles.icon} />
						{item.name === screen && <View style={{...styles.indicator, backgroundColor: colorTheme.indicatorTheme}} />}
					</TouchableOpacity>
				);
			})}
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		height: 50,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
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
		bottom: -11,

		alignSelf: 'center',
		width: 40,
		height: 3
	}
});
//FOOTER_ICONS_DATA.map((item) => (
// 	<TouchableOpacity style={[ styles.btn ]} onPress={navigationHandler(item.name)}>
// 	<Image source={item.icon} style={styles.icon} />
// 	{item.name !== indicator && <View style={styles.indicator} />}
// </TouchableOpacity>
