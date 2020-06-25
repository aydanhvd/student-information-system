import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Calendar } from '../screens';

const { Navigator, Screen } = createStackNavigator();

export const CalendarStack = () => {
    return (
        <Navigator headerMode={"none"}>
            <Screen name="Calendar" component={Calendar} />
        </Navigator>
    );
};
