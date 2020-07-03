import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
	return (
		<Navigator headerMode={"none"}>
			<Screen name="Home" component={HomeScreen} />
		</Navigator>
	);
};


