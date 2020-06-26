import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './HomeStack';
import { ClassStack } from './ClassStack';
import { CalendarStack } from './CalendarStack';
import { MessageStack } from './MessageStack';
import { MaterialsStack } from './MaterialsStack';

// import { RootTabs } from './RootTabs';

const { Screen, Navigator } = createDrawerNavigator();
//Todo figure out how to create custom buttom tabs looks like on our design
export const RootDrawer = () => (
	<NavigationContainer>
		<Navigator>
			{/* <Screen name="Home" component={RootTabs} /> */}
			<Screen name="HomeStack" component={HomeStack} />
			<Screen name="ClassStack" component={ClassStack} />
			<Screen name="CallendarStack" component={CalendarStack} />
			<Screen name="MessagesStack" component={MessageStack} />
			<Screen name="MaterialsStack" component={MaterialsStack} />
		</Navigator>
	</NavigationContainer>
);
