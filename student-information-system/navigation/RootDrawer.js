import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './HomeStack';
import {ClassStack} from "./ClassStack";


const { Screen, Navigator } = createDrawerNavigator();

export const RootDrawer=()=>(
   <NavigationContainer >
      <Navigator >
         <Screen name="HomeStack" component={HomeStack}/>
          <Screen name="ClassStack" component={ClassStack}/>
      </Navigator>
   </NavigationContainer>
)
