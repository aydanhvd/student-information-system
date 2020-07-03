import React from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, Platform, Keyboard, SafeAreaView } from 'react-native';
import { IconBtn } from './IconBtn';
import { COLORS, ICONS_LIGHT, GLOBAL_STYLES } from '../styles';

export const PriviteMessagesField = ({ style }) => {
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={80}
			behavior={Platform.OS === 'ios' ? 'position' : ''}
			style={{ ...styles.container, ...style }}
			enabled
		>
			<TextInput style={styles.inputField}/>
			<IconBtn icon={ICONS_LIGHT.sendMessages} style={styles.btn} />
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 50,
		width: '95%',
		...GLOBAL_STYLES.shaddowTop,
		backgroundColor: COLORS.backgroundLight,
		borderRadius: 30,
		marginHorizontal: 15,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20
	},
   inputField:{
      width:"100%",
      height:"100%"
   },
	btn: {
		position: 'absolute',
		top: 10,
		right: 20,
		width: 26,
		height: 26,
		marginRight: 20
	}
});
