import React, { useState } from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, Platform, Keyboard, SafeAreaView } from 'react-native';

import { IconBtn } from '../../commons/IconBtn';
import {COLORS, ICONS_LIGHT, GLOBAL_STYLES, ICONS_DARK} from '../../styles';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/chats';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});


export const PriviteMessagesField = connect(mapStateToProps, { sendMessage })(({ style, chatID, sendMessage, darkMode }) => {
	const [ message, setMesage ] = useState('');
	const submitHadler = () => {
		if (message !== '') {
			sendMessage(chatID, message);
			setMesage('');
		}
	};

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark,
			textColor: COLORS.backgroundLight,
			sendIcon: ICONS_DARK.sendMessage
		} : {
			backgroundColor: COLORS.backgroundLight,
			textColor: COLORS.backgroundDark,
			sendIcon: ICONS_LIGHT.sendMessages
		};

	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={20}
			style={{ ...style, ...styles.container, ...colorTheme }}
			behavior={Platform.OS === 'ios' ? 'padding' : ''}
		>
			<TextInput style={{...styles.inputField, color: colorTheme.textColor}} value={message} onChangeText={(value) => setMesage(value)} />
			<IconBtn icon={colorTheme.sendIcon} onPress={submitHadler} />
		</KeyboardAvoidingView>
	);
});
const styles = StyleSheet.create({
	container: {
		minHeight: 50,
		width: '95%',
		flexWrap: 'wrap',
		...GLOBAL_STYLES.shaddowTop,
		borderRadius: 30,
		marginHorizontal: 15,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		flexDirection: 'row',
		padding: 5
	},
	inputField: {
		width: '90%',
		height: '100%'
	},
	btn: {
		width: 26,
		height: 26,
		marginRight: 20,
		marginTop: 5
	}
});
