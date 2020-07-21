import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, ICONS_LIGHT } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const UserCard = connect(mapStateToProps, {})(({ user, onPress, darkMode }) => {

	const theme = darkModeHandler(darkMode);

	return (
		<TouchableOpacity style={styles.card} onPress={onPress}>
			<Image source={user.profilePiC ? { uri: user.profilePiC } : ICONS_LIGHT.userLight} style={styles.image} />
			<CustomText numberOfLines={1} style={{...styles.userName, color: theme.messageColor}}>
				@{user.userName}
			</CustomText>
			<CustomText numberOfLines={2} style={{...styles.name, color: theme.textColor}}>
				{user.name}
			</CustomText>
		</TouchableOpacity>
	);
});
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
		borderColor: COLORS.commentsColorLight
	},
	userName: {
		fontSize: 9,
		marginTop: 5
	},
	name: {
		fontSize: 13,
		textAlign: 'center'
	}
});
