import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NoteBookScreen} from '../screens';

const { Navigator, Screen } = createStackNavigator();

export const NoteBookStack = () => {
    return (
        <Navigator headerMode={"none"}>
            <Screen name="Note" component={NoteBookScreen} />
        </Navigator>
    );
};


