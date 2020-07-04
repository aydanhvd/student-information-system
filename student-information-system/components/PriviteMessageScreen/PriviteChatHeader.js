import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomIconBtn } from '../index';
import { ICONS_LIGHT, COLORS } from '../../styles';
import { CustomText } from '../Customs/CustomText';


export const PriviteChatsHeader = ({ name, userName, profilePiC , navigation }) => {

	return (
		<View style={styles.container}>
			<CustomIconBtn icon={ICONS_LIGHT.backLight} style={styles.backArrow} onPress={()=>navigation.goBack()}/>
			<Image style={styles.profilePiC} source={{ uri: profilePiC }} />
			<View style={styles.nameContainer}>
				<CustomText style={styles.name}>{name}</CustomText>
				<CustomText style={styles.userName}>@{userName}</CustomText>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 60,
		alignItems: 'center'
	},
	profilePiC: {
		width: 40,
		height: 40,
		borderRadius: 30,
		marginHorizontal: 15
	},
	backArrow: {
		marginLeft: 16
	},
	nameContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 18,
		color: COLORS.textColorDark
	},
	userName: {
		fontSize: 12,
		color: COLORS.acsentColor
	}
});
