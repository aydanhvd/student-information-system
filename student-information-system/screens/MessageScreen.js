import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Footer, Header, PeopleListField } from '../components';
import { COLORS } from '../styles/colors';
import { getAndListenChatUsers } from '../redux/chats';
import { connect } from 'react-redux';

export const MessageScreen = connect(null, { getAndListenChatUsers })(({ getAndListenChatUsers }) => {
	useEffect(() => {
		const unsubscribe = getAndListenChatUsers();
		return unsubscribe;
	}, []);
	return (
		<View style={styles.container}>
			<Header title="Message" />
			{/* a plachholder title for now */}
			<PeopleListField />
			<ScrollView />
			<Footer style={styles.footer} />
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
