import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { Radio, RadioGroup } from '@ui-kitten/components';
import { COLORS, ICONS_LIGHT } from '../../styles';
import { connect } from 'react-redux';
import { validateForm } from '../../utils/validateField';
import {clearAuthError, getAuthError, setAuthError, signUp} from '../../redux/auth';
import { CustomIconBtn } from '../index';
import { CustomText } from '../Customs/CustomText';
import {authErrorsText} from "../../utils/authErrorsText";

const mapStateToProps = (state) => ({
	error: getAuthError(state),
});

export const SignUpForm = connect(mapStateToProps, { signUp, setAuthError, clearAuthError })
	(({ signUp, groupsList, error, setAuthError, clearAuthError }) => {
		// console.log(error)

	const [ groupIndex, setGroupIndex ] = useState(null);
	const [ fields, setFields ] = useState({
		email: { value: '', placeholder: 'email' },
		userName: { value: '', placeholder: 'userName' },
		name: { value: '', placeholder: 'full name' },
		password: { value: '', placeholder: 'password' },
		rePassword: { value: '', placeholder: 'rePassword' }
	});
	const fieldChnageHandler = (name, value) => {
		clearAuthError();
		setFields((fields) => ({
			...fields,
			[name]: {
				...fields[name],
				value
			}
		}));
	};
	const submintHandler = (fields) => {
		const email = fields.email.value.toLowerCase().trim();
		const pass = fields.password.value.trim();
		const rePass = fields.rePassword.value.trim();
		const userName = fields.userName.value.toLowerCase().trim();
		const name = fields.name.value.trim();

		if (validateForm(true, email, pass, rePass, userName, name, groupIndex)) {
			signUp(email, name, userName, pass, groupsList[groupIndex].ID);
		}
	};
	return (
		<View style={styles.form}>
			{Object.keys(fields).map((key) => {
				return (
					<TextInput
						key={fields[key].placeholder}
						placeholder={fields[key].placeholder}
						value={fields[key].value}
						onChangeText={(value) => fieldChnageHandler(key, value)}
						style={styles.input}
						placeholderTextColor="rgba(255,255,255, 0.3)"
					/>
				);
			})}
			<CustomText style={styles.label}>Select Group</CustomText>
			<RadioGroup style={styles.groupBtn} selectedIndex={groupIndex} onChange={(index) => setGroupIndex(index)}>
				<Radio status="control">MD-1</Radio>
				<Radio status="control">MD-2</Radio>
				<Radio status="control">BE-3</Radio>
				<Radio status="control">BE-4</Radio>
			</RadioGroup>
			<CustomIconBtn icon={ICONS_LIGHT.logInBtn} style={styles.nextBtn} onPress={() => submintHandler(fields)} />

		</View>
	);
});

const styles = StyleSheet.create({
	form: {
		marginHorizontal: 33,
		marginTop: 26
	},
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
	label: {
		marginTop: 10,
		marginBottom: 5,
		fontSize: 16,
		color: COLORS.backgroundLight,
		textDecorationLine: 'underline'
	},
	nextBtn: {
		backgroundColor: COLORS.backgroundLight,
		position: 'absolute',
		bottom: -150,
		width: 60,
		height: 35,
		alignSelf: 'flex-end',
		borderRadius: 20
	},
	error: {
		fontSize: 16,
		color: "red",
		marginTop: 10,
	},
});
