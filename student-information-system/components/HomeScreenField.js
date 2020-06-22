import React from 'react'
import { StyleSheet, View, TouchableOpacity , TextInput } from 'react-native'
import { COLORS } from '../styles/colors'
import {ICONS_LIGHT} from '../styles/iconsLight';
import { IconBtn } from './IconBtn';

export const HomeScreenField=()=>{
   return(
      <View>
         <TextInput/>
         <IconBtn icon={ICONS_LIGHT.origamiLight}/>
      </View>
   )
}

const styles = StyleSheet.create({})