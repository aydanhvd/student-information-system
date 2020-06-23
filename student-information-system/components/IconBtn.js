import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ICONS_LIGHT } from '../styles/iconsLight';


// a component for wrapping a icon with TouchableOpacity and using is as btn since we have a lot of them in this project
export const IconBtn = ({ icon, style, onPress }) => {
	return (
		<TouchableOpacity style={[styles.container,style]} onPress={onPress}>
			<Image source={icon} style={styles.btnImage}/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
   container:{
		width:22,
		height:22,
   },
   btnImage:{
		width:"100%",
		height:"100%"
   }
})