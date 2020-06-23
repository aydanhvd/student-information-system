import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from './HomeStack';
import { Footer } from '../components';


const { Navigator, Screen } = createBottomTabNavigator();

export const RootTabs=()=>(
   <Navigator screenOptions={({route})=>(
      <Footer/>
   )}>
      <Screen name="Feed" component={HomeStack}/>
   </Navigator>
)