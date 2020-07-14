import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { COLORS } from '../../styles';

import { connect } from 'react-redux';
import { selectAgenda, getAndListenAgenda } from '../../redux/materials';
import { ClassField } from '../ClassField';
import { selectTheme } from '../../redux/theme';

const mapStateToProps = (state) => ({
	agendaData: selectAgenda(state),
	darkMode: selectTheme(state)
});

export const CalendarAgenda = connect(mapStateToProps, {
	getAndListenAgenda
})(({ agendaData = [], getAndListenAgenda, darkMode }) => {
	useEffect(() => {
		const unsub = getAndListenAgenda();
		return unsub;
	}, []);

	const colorTheme = darkMode
		? {
				backgroundColor: COLORS.backgroundDark,
				fieldColor: COLORS.headerColor,
				dayColor: COLORS.backgroundLight
			}
		: {
				backgroundColor: COLORS.backgroundLight,
				fieldColor: COLORS.acsentColor,
				dayColor: COLORS.backgroundDark
			};

	return (
		<Agenda
			items={agendaData}
			renderItem={(item) => {
				return (
					<View>
						<ClassField
							heading={item.time}
							topic={item.topic}
							backgroundColor={{ backgroundColor: colorTheme.fieldColor }}
							textStyles={{ color: COLORS.backgroundLight, fontSize: 15, textAlign: 'right' }}
						/>
					</View>
				);
			}}
			renderEmptyDate={() => {
				return <View />;
			}}
			renderEmptyData={() => {
				return <View />;
			}}
			refreshing={true}
			theme={{
				...colorTheme,
				agendaTodayColor: colorTheme.fieldColor,
				agendaDayNumColor: colorTheme.dayColor,
				agendaDayTextColor: colorTheme.dayColor
			}}
			style={{ ...colorTheme }}
		/>
	);
});
