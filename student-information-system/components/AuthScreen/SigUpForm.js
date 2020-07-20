import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../styles';
import { validateForm } from '../../utils/validateField';
import { SignUpInput } from './SignUpInput';
import { GroupPicker } from '../../commons/GroupPicker';
import { connect } from 'react-redux';
import { signUp } from '../../redux/auth';
import { CustomSlider } from '../../commons/CustomSlider';

export const SignUpForm = connect(null, { signUp })(({ groupsList = [], signUp }) => {
	const [ selectedGroup, setSelectedGroup ] = useState('');
	const [ fields, setFields ] = useState({
		email: { value: '', label: 'Email' },
		name: { value: '', label: 'Full Name' },
		username: { value: '', label: 'Username' },
		password: { value: '', label: 'Password', secureTextEntry: true },
		repassword: { value: '', label: 'Repeat Password', secureTextEntry: true }
	});
	const fieldsChangeHandler = (name, value) => {
		setFields((fields) => ({
			...fields,
			[name]: {
				...fields[name],
				value
			}
		}));
	};
	const submintHandlerSignUp = () => {
		const email = fields.email.value.trim();
		const pass = fields.password.value.trim();
		const rePass = fields.repassword.value.trim();
		const userName = fields.username.value.trim();
		const name = fields.name.value.trim();
		if (validateForm(true, email, pass, rePass, userName, name, selectedGroup)) {
			signUp(email, name, userName, pass, selectedGroup);
		}
	};
	return (
		<View style={styles.form}>
			<SignUpInput fields={fields} fieldsChangeHandler={fieldsChangeHandler} />
			<GroupPicker item={groupsList} onChange={setSelectedGroup} />
			<CustomSlider onEndReachedHandler={submintHandlerSignUp} />
		</View>
	);
});

const styles = StyleSheet.create({
	form: {
		marginHorizontal: 33
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
		fontSize: 16,
		color: COLORS.backgroundLight
	},
	error: {
		fontSize: 16,
		color: 'red',
		marginTop: 10
	}
});
// {
// 	/* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
// 	"rules": {

// 	  ".read": "true",
// 	  ".write": "auth!=null"
// 	}
//  }
