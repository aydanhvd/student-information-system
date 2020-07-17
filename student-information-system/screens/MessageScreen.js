import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import {Footer, Header, PeopleListField, SearchBar} from '../components';
import { COLORS } from '../styles/colors';
import { getAndListenChatUsers, getAndListenStartedChatsList,  selectChatID } from '../redux/chats';
import { StartedMessagesField } from '../components/MessageScreen/StartedMessagesField';
import {selectTheme} from "../redux/theme";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const MessageScreen = connect(mapStateToProps, {
	getAndListenChatUsers,
	getAndListenStartedChatsList
})(({ getAndListenChatUsers, getAndListenStartedChatsList, navigation, darkMode}) => {
	useEffect(() => {
		const unsubscribe = getAndListenChatUsers();
		return unsubscribe;
	}, []);
	useEffect(() => {
		const unsubscribe = getAndListenStartedChatsList();
		return unsubscribe;
	}, []);

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark
		} : {
			backgroundColor: COLORS.backgroundLight
		};

	return (
		<View style={{...styles.container, ...colorTheme}}>
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
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
