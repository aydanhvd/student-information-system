import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { PriviteMessagesField, PriviteMessages } from '../components';
import { COLORS } from '../styles';
import { selectChatMessages, getAndListenChatMessages } from '../redux/chats';

const mapStateToProps = (state) => ({
	messages: selectChatMessages(state)
});

export const PriviteMessageScreen = connect(mapStateToProps, {
	getAndListenChatMessages
})(({ chatID, getAndListenChatMessages, messages }) => {
	console.log(getAndListenChatMessages);
	useEffect(() => {
		const unsub = getAndListenChatMessages(chatID);
		return unsub;
	});
	console.log('messages', messages);
	return (
		<View style={styles.container}>
			<PriviteMessages chatID={chatID} />
			<PriviteMessagesField style={styles.field} />
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.backgroundLight
	},
	field: {
		position: 'absolute',
		bottom: 20
	}
});
