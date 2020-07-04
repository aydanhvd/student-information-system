import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { PriviteMessagesField, PriviteMessages } from '../components';
import { COLORS } from '../styles';
import { getAndListenChatMessages, selectChatID } from '../redux/chats';
import { PriviteChatsHeader } from '../components/PriviteMessageScreen/PriviteChatHeader';

const mapStateToProps = (state) => ({
	chatID: selectChatID(state)
});

export const PriviteMessageScreen = connect(mapStateToProps, {
	getAndListenChatMessages
})(({ chatID, getAndListenChatMessages, navigation }) => {
	useEffect(() => {
		const unsub = getAndListenChatMessages(chatID);
		return unsub;
	}, []);
	
	return (
		<View style={styles.container}>
			<PriviteChatsHeader
				navigation={navigation}
				name="hello hello"
				userName="hello"
				profilePiC="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg"
			/>
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
