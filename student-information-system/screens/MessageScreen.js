import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Footer, Header, PeopleListField } from '../components';
import { COLORS } from '../styles/colors';
import { getAndListenChatUsers, getAndListenStartedChatsList, clearChatMessages } from '../redux/chats';
import { connect } from 'react-redux';
import { StartedMessagesField } from '../components/MessageScreen/StartedMessagesField';

export const MessageScreen = connect(null, {
	getAndListenChatUsers,
	getAndListenStartedChatsList,
	clearChatMessages
})(({ getAndListenChatUsers, getAndListenStartedChatsList, navigation, clearChatMessages }) => {
	useEffect(() => {
		clearChatMessages();
	}, []);//chage it too unmount
	useEffect(() => {
		const unsubscribe = getAndListenChatUsers();
		return unsubscribe;
	}, []);
	useEffect(() => {
		const unsubscribe = getAndListenStartedChatsList();
		return unsubscribe;
	}, []);
	return (
		<View style={styles.container}>
			<Header title="Messages" />
			<PeopleListField navigation={navigation} />
			<StartedMessagesField navigation={navigation} />
			<Footer style={styles.footer} screen="MessagesStack" />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.backgroundLight
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
