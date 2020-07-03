import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ClassScreen} from "../../screens";

const { Navigator, Screen } = createStackNavigator();

export const ClassStack = () => {
    return (
        <Navigator headerMode={"none"}>
            <Screen name="Class" component={ClassScreen} />
        </Navigator>
    );
};
