import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from '../../commons/CustomText';
import { COLORS } from '../../styles/colors';
import { Seperator } from '../../commons/Seperator';
import { ScheduleField } from './ScheduleField';
import { GLOBAL_STYLES } from '../../styles';
import { connect } from 'react-redux';
import { getAndListenSchedule, selectSchedule } from '../../redux/materials';

const mapStateToProps = (state) => ({
	schedule: selectSchedule(state)
});

export const ScheduleContainer = connect(mapStateToProps, {
	getAndListenSchedule
})(({ schedule, getAndListenSchedule }) => {
	useEffect(() => {
		const unsub = getAndListenSchedule();
		return unsub;
	}, []);
	return (
		<View style={styles.container}>
			<CustomText style={styles.heading}>Schedule</CustomText>
			<Seperator distance={17} color={COLORS.commentsColorLight} />
			<View style={styles.row}>
				{schedule.map((schedule) => (
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
});
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
		height: 90
	},
	row: {
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		height: 90,
		borderRadius: 4,
		backgroundColor: COLORS.backgroundLight,
		...GLOBAL_STYLES.shaddowTop
	}
});
