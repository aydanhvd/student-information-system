import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { COLORS } from '../../styles';
import { ICONS_LIGHT } from '../../styles/iconsLight';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectAgenda, getAndListenAgenda } from '../../redux/materials';
import { ClassField } from '../ClassField';

const mapStateToProps = (state) => ({
	agendaData: selectAgenda(state)
});

export const CalendarAgenda = connect(mapStateToProps, {
	getAndListenAgenda
})(({ agendaData = [], getAndListenAgenda }) => {
	useEffect(() => {
		const unsub = getAndListenAgenda();
		return unsub;
	}, []);
	return (
		<Agenda
			items={agendaData}
			renderItem={(item) => {
				return (
					<View>
						<ClassField
							heading={item.time}
							topic={item.topic}
							backgroundColor={{ backgroundColor: COLORS.acsentColor }}
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
				agendaTodayColor: COLORS.acsentColor
			}}
			style={{ backgroundColor: COLORS.backgroundLight }}
		/>
	);
});
