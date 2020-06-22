import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/colors';
import { CustomText } from './CustomText';

const btns = [
	{
		name: 'News'
	},
	{
		name: 'MD1-front-end'
	}
];
export const HomeScreenHeader = () => {
	const [ indicator, setIndicator ] = useState('News');//indicater will be a props

	return (
		<View style={styles.container}>
			{btns.map((btn) => {
				const isActive = indicator === btn.name;
				return (
					<TouchableOpacity key={btn.name} style={styles.btn} onPress={() => setIndicator(btn.name)}>
						<CustomText
							style={{ ...styles.btnText, color: isActive ? COLORS.acsentColor : COLORS.acsentLight }}
						>
							{btn.name}
						</CustomText>
						{isActive && <View style={styles.indicator} />}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.backgroundLight,
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	btnText: {
		color: COLORS.acsentColor,
		fontSize: 18,
		marginHorizontal: 17
	},
	indicator: {
		position: 'absolute',
		bottom: -20,
		marginTop: 10,
		backgroundColor: COLORS.acsentColor,
		width: 60,
		height: 2,
		alignSelf: 'center'
	}
});
