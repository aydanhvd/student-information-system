import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { validateForm } from '../../utils/validateField';
import { ICONS_LIGHT, COLORS } from '../../styles';
import {CustomIconBtn, CustomText} from '../index';
import {clearAuthError, getAuthError, logIn, setAuthError} from '../../redux/auth';
import { connect } from 'react-redux';
import {authErrorsText} from "../../utils/authErrorsText";

const mapStateToProps = (state) => ({
	error: getAuthError(state),
});

export const LogInForm = connect(mapStateToProps, { logIn, setAuthError, clearAuthError })
	(({ logIn, navigation, error, setAuthError, clearAuthError }) => {
	const [ fields, setFields ] = useState({
		email: '',
		password: ''
	});
	const fieldChangeHndler = (name, value) => {
		clearAuthError();
		setFields((fields) => ({
			...fields,
			[name]: value
		}));
	};
	const submitHandler = (fields) => {
		const email = fields.email.trim();
		const pass = fields.password.trim();
		if (email !== "" && pass !== "") {
			if (validateForm(false, email, pass, null)) {
				logIn(email, pass);
			}
		} else if (email === ""){
			setAuthError("INVALID_EMAIL");
		} else {
			setAuthError("INVALID_PASSWORD")
		}
	};
	return (
		<View style={styles.form}>
			<TextInput
				placeholder="email"
				value={fields.email.value}
				onChangeText={(value) => fieldChangeHndler('email', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			<TextInput
				placeholder="password"
				value={fields.password.value}
				onChangeText={(value) => fieldChangeHndler('password', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			{error.status && (
				<CustomText weight='semi' style={styles.error}>{authErrorsText[error.errCode]}</CustomText>
			)}
			<CustomIconBtn icon={ICONS_LIGHT.logInBtn} style={styles.nextBtn} onPress={() => submitHandler(fields)} />

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
	},
	error: {
		fontSize: 16,
		color: "red",
		marginTop: 10,
	},
});
