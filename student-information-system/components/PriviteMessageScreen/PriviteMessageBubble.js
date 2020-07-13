import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectAuthUserID } from '../../redux/auth';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	userID: selectAuthUserID(state),
	darkMode: selectTheme(state)
});

export const PriviteMessagesBubble = connect(mapStateToProps)(({ messages, userID, darkMode }) => {
	const date = new Date(messages.time);
	const styledTime = messages.time ? `${date.getHours()}:${date.getMinutes()}` : '';
	let week = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday ', 'Thursday', 'Friday', 'Saturday' ];
	const chatStarted = week[date.getDay()];

	const colorTheme = darkMode
		? {
			messageColor: COLORS.drawerDark,
			senderColor: COLORS.textColorDark,
			systemColor: COLORS.sendDark
		} : {
			messageColor: COLORS.acsentColor,
			senderColor: COLORS.acsentLight,
			systemColor: COLORS.drawerLight
		};

	const bubbleStyles = [ {...styles.container, backgroundColor: colorTheme.senderColor} ];
	const isSystem = messages.auther === 'system';
	const isMyMessage = messages.auther === userID;
	if (isSystem) bubbleStyles.push({...styles.systemBubble, backgroundColor: colorTheme.systemColor});
	if (isMyMessage) bubbleStyles.push({...styles.userBubble, backgroundColor: colorTheme.messageColor});

	return (
		<View style={bubbleStyles} >
			<CustomText style={styles.text}>
				{
				isSystem?`${chatStarted}`:`${messages.text}`}
			</CustomText>
			<CustomText style={styles.time}>{styledTime}</CustomText>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		marginVertical: 6,
		flexDirection: 'row',
		maxWidth: '90%',
		minWidth: '50%',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		alignSelf: 'flex-start'
	},
	text: {
		color: COLORS.backgroundLight,
		fontSize: 14
	},
	time: {
		color: COLORS.backgroundLight,
		fontSize: 11,
		position: 'absolute',
		right: 10,
		bottom: 6
	},
	systemBubble: {
		alignSelf: 'center',
		textAlign: 'center',
		minWidth: '40%',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 30
	},
	userBubble: {
		alignSelf: 'flex-end',
		padding: 5
	}
});
