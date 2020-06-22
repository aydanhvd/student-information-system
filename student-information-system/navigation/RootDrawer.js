import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './HomeStack';


const { Screen, Navigator } = createDrawerNavigator();

export const RootDrawer=()=>(
   <NavigationContainer >
      <Navigator >
         <Screen name="HomeStack" component={HomeStack}/>
      </Navigator>
   </NavigationContainer>
)
