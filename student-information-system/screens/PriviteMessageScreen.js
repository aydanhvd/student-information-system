import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { COLORS } from '../styles';
import { PriviteMessagesField, PriviteMessages } from '../components';
import { getAndListenChatMessages, selectChatID } from '../redux/chats';
import { PriviteChatsHeader } from '../components/PriviteMessageScreen/PriviteChatHeader';
const mapStateToProps = (state) => ({
	chatID: selectChatID(state)
});

export const PriviteMessageScreen = connect(mapStateToProps, {
	getAndListenChatMessages,
})(({ chatID, getAndListenChatMessages,  navigation }) => {

	useEffect(() => {
		const unsub = getAndListenChatMessages(chatID);
		return unsub;
	}, [chatID]);

	return (
		<View style={styles.container}>
			<PriviteChatsHeader navigation={navigation} />
			<PriviteMessages />
			<PriviteMessagesField style={styles.field} chatID={chatID} />
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
