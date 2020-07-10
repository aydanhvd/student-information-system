import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { Footer, Header, PeopleListField } from '../components';
import { COLORS } from '../styles/colors';
import { getAndListenChatUsers, getAndListenStartedChatsList,  selectChatID } from '../redux/chats';
import { StartedMessagesField } from '../components/MessageScreen/StartedMessagesField';


export const MessageScreen = connect(null, {
	getAndListenChatUsers,
	getAndListenStartedChatsList
})(({ getAndListenChatUsers, getAndListenStartedChatsList, navigation ,}) => {
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
