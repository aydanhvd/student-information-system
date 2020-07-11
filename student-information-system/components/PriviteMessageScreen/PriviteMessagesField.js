import React, { useState } from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, Platform, Keyboard, SafeAreaView } from 'react-native';

import { IconBtn } from '../../commons/IconBtn';
import { COLORS, ICONS_LIGHT, GLOBAL_STYLES } from '../../styles';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/chats';

export const PriviteMessagesField = connect(null, { sendMessage })(({ style, chatID, sendMessage }) => {
	const [ message, setMesage ] = useState('');
	const submitHadler = () => {
		if (message !== '') {
			sendMessage(chatID, message);
			setMesage('');
		}
	};
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={20}
			style={{ ...style, ...styles.container }}
			behavior={Platform.OS === 'ios' ? 'padding' : ''}
		>
			<TextInput style={styles.inputField} value={message} onChangeText={(value) => setMesage(value)} />
			<IconBtn icon={ICONS_LIGHT.sendMessages} onPress={submitHadler} />
		</KeyboardAvoidingView>
	);
});
const styles = StyleSheet.create({
	container: {
		minHeight: 50,
		width: '95%',
		flexWrap: 'wrap',
		...GLOBAL_STYLES.shaddowTop,
		backgroundColor: COLORS.backgroundLight,
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
