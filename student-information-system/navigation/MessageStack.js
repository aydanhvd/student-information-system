import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MessageScreen} from '../screens';

const { Navigator, Screen } = createStackNavigator();

export const MessageStack = () => {
    return (
        <Navigator headerMode={"none"}>
            <Screen name="Message" component={MessageScreen} />
        </Navigator>
    );
};


