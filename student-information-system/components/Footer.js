import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ICONS_LIGHT } from '../styles/iconsLight';
import { COLORS } from '../styles/colors';
import { GLOBAL_STYLES } from '../styles';


export const Footer = ({ style, icon }) => {
	const [ indicator, setIndicator ] = useState('menu'); //indicator will be a props for indicate wich page we r in in future
	return (
		<View style={{ ...styles.container, ...style, ...GLOBAL_STYLES.shaddowBottum }}>

					<TouchableOpacity
						style={[ styles.btn ]}
						onPress={() => setIndicator(icon)}
					>
						{/*TODO rewrite onPress after ur done with testing and create a function to naviagte between screens */}
						<Image source={icon} style={styles.icon} />
						{icon !== indicator && <View style={styles.indicator} />}
					</TouchableOpacity>

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
		backgroundColor: COLORS.backgroundLight,
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
