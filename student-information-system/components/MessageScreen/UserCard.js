import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, ICONS_LIGHT } from '../../styles';
import { CustomText } from '../Customs/CustomText';

export const UserCard = ({ user , onPress}) => {
	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<Image source={{ uri: user.profilePiC }} style={styles.image} />
			<CustomText numberOfLines={1} style={styles.userName}>@{user.userName}</CustomText>
			<CustomText numberOfLines={2} style={styles.name}>{user.name}</CustomText>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	card: {
		width: 70,
		height: '100%',
		alignItems: 'center',
		// justifyContent:'space-around',
		marginRight: 10,
		overflow: 'hidden'
	},
	image: {
		width: 55,
		height: 55,
		borderRadius: 40,
		borderWidth: 3,
		borderColor: COLORS.acsentColor
	},
	userName: {
		fontSize: 9,
		color: COLORS.drawerLight,
		marginTop: 5
	},
	name: {
		fontSize: 13,
		color: COLORS.acsentLight,
		textAlign: 'center'
	}
});
