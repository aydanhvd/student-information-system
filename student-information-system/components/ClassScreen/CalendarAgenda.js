import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, ClippingRectangle } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { COLORS } from '../../styles';
import { ICONS_LIGHT } from '../../styles/iconsLight';
import { CustomText } from '../Customs/CustomText';
import { connect } from 'react-redux';
import { selectAgenda, getAndListenAgenda } from '../../redux/materials';

const mapStateToProps = (state) => ({
	agendaData: selectAgenda(state)
});

export const CalendarAgenda = connect(mapStateToProps, { getAndListenAgenda })(({ agendaData={}, getAndListenAgenda }) => {
	useEffect(() => {
		const unsub = getAndListenAgenda();
		return unsub;
   }, []);
	return (
		<Agenda
			items={agendaData}
			renderItem={(item, firstItemInDay) => {
				return (
					<View>
						<CustomText>{item.time}</CustomText>
						<CustomText>{item.topic}</CustomText>
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
		/>
	);
});
const styles = StyleSheet.create({});
