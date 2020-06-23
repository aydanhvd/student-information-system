import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from './CustomText';
import { COLORS } from '../styles/colors';
import { Seperator } from './Seperator';
import {ScheduleField} from "./ScheduleField";

// a dummydata for schedules
const schedules = [
	{
		day: 'Monday',
		time: '14:00'
	},
	{
		day: 'Wednesday',
		time: '16:00'
	},
	{
		day: 'Friday',
		time: '12:00'
	}
];

export const ScheduleContainer = () => {
	return (
		<View style={styles.container}>
			<CustomText style={styles.heading}>Schedule</CustomText>
			<Seperator distance={17} color={COLORS.commentsColorLight} />
			<View style={styles.row}>
				{schedules.map((schedule) => (
					<ScheduleField
						fontSize={{ fontSize: 14 }}
						heading={schedule.day}
						date={schedule.time}
						style={styles.schedule}
					/>
				))}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginHorizontal: 14,
		marginBottom: 20
	},
	heading: {
		fontSize: 24,
		color: COLORS.acsentColor,
		marginVertical: 10,
		marginLeft: 10
	},
	schedule: {
		alignSelf: 'center',
		width: 116,
		height: 90,
	},
	row: {
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		height: 90,
		borderRadius: 4,
		backgroundColor: COLORS.backgroundLight,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.46,
		shadowRadius: 11.14,
		elevation: 17
	}
});
