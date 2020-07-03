import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Footer,  Header, PeopleListField } from '../components';
import { COLORS } from '../styles/colors';

export const MessageScreen = () => {
	return (
		<View style={styles.container}>
			<Header title="Message" />
			{/* a plachholder title for now */}
			<PeopleListField/>
			<ScrollView/>
			<Footer style={styles.footer} screen='MessagesStack'/>
		</View>
	);
};

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
