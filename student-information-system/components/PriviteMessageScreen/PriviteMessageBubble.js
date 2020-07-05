import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../styles';
import { CustomText } from '../Customs/CustomText';
import { connect } from 'react-redux';
import { selectAuthUserID } from '../../redux/auth';

const mapStateToProps = (state) => ({
	userID: selectAuthUserID(state)
});

export const PriviteMessagesBubble = connect(mapStateToProps)(({ messages, userID }) => {
	const date = new Date(messages.time);
	const styledTime = messages.time ? `${date.getHours()}:${date.getMinutes()}` : '';

	const bubbleStyles = [ styles.container ];
	const isSystem = messages.auther === 'system';
	const isMyMessage = messages.auther === userID;
	if (isSystem) bubbleStyles.push(styles.systemBubble);
	if (isMyMessage) bubbleStyles.push(styles.userBubble);

	return (
		<View style={bubbleStyles}>
			<CustomText style={styles.text}>{messages.text}</CustomText>
			<CustomText style={styles.time}>{styledTime}</CustomText>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		marginVertical: 6,
		backgroundColor: COLORS.acsentColor,
		flexDirection: 'row',
		maxWidth: '90%',
		minWidth: '50%',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 10,
		backgroundColor: COLORS.acsentLight,
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
		backgroundColor: COLORS.drawerLight,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 30
	},
	userBubble: {
		alignSelf: 'flex-end',
		backgroundColor: COLORS.acsentColor,
		padding: 5
	}
});
