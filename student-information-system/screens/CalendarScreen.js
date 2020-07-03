import React, { useState, Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Footer, ClassField, Header } from '../components';
import { COLORS } from '../styles/colors';
import CalendarPicker from 'react-native-calendar-picker';

export class CalendarScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedStartDate: null
		};
		this.onDateChange = this.onDateChange.bind(this);
	}

	onDateChange(date) {
		this.setState({
			selectedStartDate: date
		});
	}

	render() {
		const { selectedStartDate } = this.state;
		const startDate = selectedStartDate ? selectedStartDate.toString() : '';
		return (
			<View style={styles.container}>
				<Header title="CalendarScreen" />
				{/* a plachholder title for now */}
				<View style={styles.calendar}>
					<CalendarPicker
						onDateChange={this.onDateChange}
						todayBackgroundColor="#27BABC"
						selectedDayColor="#4375BF"
					/>
				</View>
				<ScrollView>

				<ClassField
					heading="Homeworks"
					date="12:00 PM"
					topic="To do app"
					style={{ width: '92%', marginHorizontal: 15, marginVertical: 15 }}
					backgroundColor = {{ backgroundColor: COLORS.acsentColor}}
					color={{ color: "white"}}
				/>
				</ScrollView>
				{/*<Text>SELECTED DATE:{ startDate }</Text>*/}

				<Footer style={styles.footer} screen='CallendarStack'/>

			</View>
		);
	}
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
