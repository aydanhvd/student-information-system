import React, { useState, Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
    Footer,
    ClassField,
    Header,
} from '../components';
import { COLORS } from '../styles/colors';
import CalendarPicker from "react-native-calendar-picker";


// export const Calendar = () => {

     export class Calendar extends Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedStartDate: null,
            };
            this.onDateChange = this.onDateChange.bind(this);
        }

        onDateChange(date) {
            this.setState({
                selectedStartDate: date,
            });
        }

render() {

    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
        <View style={styles.container}>

            <Header title="Calendar"/>
            {/* a plachholder title for now */}
            <View style={styles.calendar}>

                <CalendarPicker onDateChange={this.onDateChange}
                                todayBackgroundColor = "#27BABC"
                                selectedDayColor= "#4375BF"
                />

            </View>

            <ClassField
                heading="Homeworks"
                date="12:00 PM"
                topic="To do app"
                style={{width: '92%', marginHorizontal: 15, marginVertical: 15}}
            />
            {/*<Text>SELECTED DATE:{ startDate }</Text>*/}

        </View>
    );
}
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight
    },
    calendar: {
      marginVertical: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 0
    },

});
