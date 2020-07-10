import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Footer, ClassField, Header } from '../components';
import { COLORS } from '../styles/colors';
import CalendarPicker from 'react-native-calendar-picker';
import { CalendarAgenda } from '../components/ClassScreen/CalendarAgenda';

export const CalendarScreen = () => {
	const [ markedDates, setMarkedDates ] = useState(new Date());
	const markDate = () => {
		setMarkedDates(markedDates);
	};
	return (
		<View style={styles.container}>
			<Header title="Calendar" />
			{/* a plachholder title for now */}
			{/* <View style={styles.calendar}>
				<CalendarPicker
					onDayPress={markDate}
					todayBackgroundColor="#27BABC"
					selectedDayColor="#4375BF"
				/>
			</View> */}
			<CalendarAgenda/>

			{/*<Text>SELECTED DATE:{ startDate }</Text>*/}
			<Footer style={styles.footer} screen='CallendarStack'/>
		</View>
	);
}

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
		bottom: 0,
	}
});
