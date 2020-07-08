import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Radio, RadioGroup } from '@ui-kitten/components';
import { COLORS, ICONS_LIGHT } from '../../styles';
import { connect } from 'react-redux';
import { validateForm } from '../../utils/validateField';
import { signUp } from '../../redux/auth';
import { CustomIconBtn } from '../index';
import { CustomText } from '../Customs/CustomText';

export const SignUpForm = connect(null, { signUp })(({ signUp, groupsList }) => {
	const [ groupIndex, setGroupIndex ] = useState(null);
	const [ fields, setFields ] = useState({
		email: { value: '', placeholder: 'email' },
		userName: { value: '', placeholder: 'userName' },
		name: { value: '', placeholder: 'full name' },
		password: { value: '', placeholder: 'password' },
		rePassword: { value: '', placeholder: 'rePassword' }
	});
	const fieldChnageHandler = (name, value) => {
		setFields((fields) => ({
			...fields,
			[name]: {
				...fields[name],
				value
			}
		}));
	};
	const submintHandler = (fields) => {
		const email = fields.email.value.trim();
		const pass = fields.password.value.trim();
		const rePass = fields.rePassword.value.trim();
		const userName = fields.userName.value.trim();
		const name = fields.name.value.trim();
		if (validateForm(true, email, pass, rePass, userName, name, groupsList[groupIndex].ID)) {
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
			<CustomText style={styles.label}>Select Goup</CustomText>
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
	}
});
