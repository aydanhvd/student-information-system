import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './HomeStack';
import { ClassStack } from './ClassStack';
import { CalendarStack } from './CalendarStack';
import { MessageStack } from './MessageStack';
import { MaterialsStack } from './MaterialsStack';
import { SettingsStack } from './SettingsStack';
import { AuthScreen } from '../screens';
import { connect } from 'react-redux';
import { selectAuthStatus } from '../redux/auth';
import {FeedbackStack} from "./FeedbackStack";

const mapStateToProps = (state) => ({
	auth: selectAuthStatus(state)
});

const { Screen, Navigator } = createDrawerNavigator();

export const RootDrawer = connect(mapStateToProps)(({ auth }) => {
	return (
		<NavigationContainer>
			{auth ? (
				<Navigator>
					<Screen name="HomeStack" component={HomeStack} />
					<Screen name="ClassStack" component={ClassStack} />
					<Screen name="CallendarStack" component={CalendarStack} />
					<Screen name="MessagesStack" component={MessageStack} />
					<Screen name="MaterialsStack" component={MaterialsStack} />
					<Screen name="Settings" component={SettingsStack} />
					<Screen name="Feedback" component={ FeedbackStack } />
				</Navigator>
			) : (
				<AuthScreen />
			)}
		</NavigationContainer>
	);
});
