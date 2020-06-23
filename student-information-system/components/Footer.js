import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ICONS_LIGHT } from '../styles/iconsLight';
import { COLORS } from '../styles/colors';
import { GLOBAL_STYLES } from '../styles';

const btns = [
	{
		name: 'calendar',
		img: ICONS_LIGHT.calendarLight
	},
	{
		name: 'bookmark',
		img: ICONS_LIGHT.bookmarkLight
	},
	{
		name: 'menu',
		img: ICONS_LIGHT.menuLight
	},
	{
		name: 'send',
		img: ICONS_LIGHT.sendLight
	},
	{
		name: 'noteboook',
		img: ICONS_LIGHT.notebookLight
	}
];

export const Footer = ({ style }) => {
	const [ indicator, setIndicator ] = useState('menu'); //indicator will be a props for indicate wich page we r in in future
	return (
		<View style={{ ...styles.container, ...style, ...GLOBAL_STYLES.shaddowTop }}>
			{btns.map((btn) => {
				return (
					<TouchableOpacity 
						style={[ styles.btn ]} 
						key={btn.name} 
						onPress={() => setIndicator(btn.name)}
					>
						{/*TODO rewrite onPress after ur done with testing and create a function to naviagte between screens */}
						<Image source={btn.img} style={styles.icon} />
						{btn.name === indicator && <View style={styles.indicator} />}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: COLORS.backgroundLight
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
		bottom: -13,
		alignSelf: 'center',
		marginTop: 10,
		backgroundColor: COLORS.acsentColor,
		width: 40,
		height: 3
	}
});
