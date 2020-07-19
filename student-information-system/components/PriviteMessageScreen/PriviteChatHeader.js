import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {ICONS_LIGHT, COLORS} from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectRecieverUserName, selectRecieverUserImage } from '../../redux/chats';
import {selectTheme} from "../../redux/theme";
import {BackIcon} from "../../commons/icons/BackIcon";

const mapStateToProps = (state) => ({
	recieverName: selectRecieverUserName(state),
	recieverPic: selectRecieverUserImage(state),
	darkMode: selectTheme(state)
});

export const PriviteChatsHeader = connect(mapStateToProps)(({ navigation, recieverName, recieverPic, darkMode }) => {

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark,
			borderColor: COLORS.drawerDark,
			nameColor: COLORS.backgroundLight,
		} : {
			backgroundColor: COLORS.backgroundLight,
			borderColor: COLORS.acsentColor,
			nameColor: COLORS.textColorDark,
		};

	return (
		<View style={{...styles.container, ...colorTheme}}>
			<BackIcon onPress={() => navigation.goBack()} />
			<Image style={{...styles.profilePiC, borderColor: colorTheme.borderColor}} source={recieverPic ? { uri: recieverPic } : ICONS_LIGHT.userLight} />
			<View style={styles.nameContainer}>
				<CustomText style={{...styles.name, color: colorTheme.nameColor}}>{recieverName}</CustomText>
				{/* <CustomText style={styles.userName}>@{reciever.userName}</CustomText> */}
			</View>
		</View>
	);
});
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
		marginHorizontal: 15,
		borderWidth: 2,
	},
	nameContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 18,
	},
	userName: {
		fontSize: 12,
		color: COLORS.acsentColor
	}
});
