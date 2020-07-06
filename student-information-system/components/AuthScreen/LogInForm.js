import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { validateForm } from '../../utils/validateField';
import { ICONS_LIGHT, COLORS } from '../../styles';
import { CustomIconBtn } from '../index';
import { logIn } from '../../redux/auth';
import { connect } from 'react-redux';

export const LogInForm = connect(null, { logIn })(({ logIn, navigation }) => {
	const [ fields, setFields ] = useState({
		email: '',
		password: ''
	});
	const fieldChnageHndler = (name, value) => {
		setFields((fields) => ({
			...fields,
			[name]: value
		}));
	};
	const submintHandler = (fields) => {
		const email = fields.email.trim();
		const pass = fields.password.trim();
		if (validateForm(false, email, pass, null)) {
			logIn(email, pass);
		}
	};
	return (
		<View style={styles.form}>
			<TextInput
				placeholder="email"
				value={fields.email.value}
				onChangeText={(value) => fieldChnageHndler('email', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			<TextInput
				placeholder="password"
				value={fields.password.value}
				onChangeText={(value) => fieldChnageHndler('password', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>

			<CustomIconBtn icon={ICONS_LIGHT.logInBtn} style={styles.nextBtn} onPress={() => submintHandler(fields)} />
		</View>
	);
});
const styles = StyleSheet.create({
	form: {},
	input: {
		width: '100%',
		borderBottomColor: COLORS.backgroundLight,
		borderBottomWidth: 1,
		color: COLORS.backgroundLight,
		height: 40
	},
	groupBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	nextBtn: {
		backgroundColor: COLORS.backgroundLight,
		width: 60,
		height: 35,
		marginTop: 30,
		alignSelf: 'flex-end',
		borderRadius: 20
	}
});
