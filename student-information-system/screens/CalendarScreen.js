import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Footer, Header } from '../components';
import { COLORS } from '../styles/colors';
import { CalendarAgenda } from '../components/ClassScreen/CalendarAgenda';

export const CalendarScreen = () => {
	const [ markedDates, setMarkedDates ] = useState(new Date());
	const markDate = () => {
		setMarkedDates(markedDates);
	};
	return (
		<View style={styles.container}>
			<Header title="Calendar" />
			<CalendarAgenda />
			<Footer style={styles.footer} screen="CallendarStack" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.backgroundLight
	},
	calendar: {
		marginVertical: 15
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
