import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './HomeStack';
import {ClassStack} from "./ClassStack";


import { RootTabs } from './RootTabs';

const { Screen, Navigator } = createDrawerNavigator();
//navigation for screens feeter (callindar, home class,materials, chats)
//Todo figure out how to create custom buttom tabs looks like on our design
export const RootDrawer = () => (
	<NavigationContainer>
		<Navigator>
			<Screen name="Home" component={RootTabs} />
  <Screen name="ClassStack" component={ClassStack}/>
		</Navigator>
	</NavigationContainer>
);
