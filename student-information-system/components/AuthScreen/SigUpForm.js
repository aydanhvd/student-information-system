import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import Slider from 'react-native-slide-to-unlock';
import RNPickerSelect from 'react-native-picker-select';
import { COLORS, ICONS_LIGHT } from '../../styles';
import { validateForm } from '../../utils/validateField';
import { signUp } from '../../redux/auth';
import { IconBtn } from '../index';
import { CustomText } from '../../commons/CustomText';
import { SignUpInput } from './SignUpInput';

export const SignUpForm = connect(null, { signUp })(({ signUp, groupsList=[] }) => {
	const [ selectedGroup, setSelectedGroup ] = useState('');
	
	const [ fields, setFields ] = useState({
		email: '',
		userName: '',
		name: '',
		password: '',
		rePassword: ''
	});
	
	const fieldChnageHandler = (name, value) => {
		setFields((fields) => ({
			...fields,
			[name]: value
		}));
	};
	const submintHandlerSignUp = (fields, signUp) => {
		const email = fields.email.trim();
		const pass = fields.password.trim();
		const rePass = fields.rePassword.trim();
		const userName = fields.userName.trim();
		const name = fields.name.trim();
		if (validateForm(true, email, pass, rePass, userName, name , selectedGroup)) {
			signUp(email, name, userName, pass, selectedGroup);
		}
	};
	return (
		<View style={styles.form}>
			<TextInput
				placeholder="email"
				value={fields.email}
				onChangeText={(value) => fieldChnageHandler('email', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			<TextInput
				placeholder="username"
				value={fields.username}
				onChangeText={(value) => fieldChnageHandler('userName', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			<TextInput
				placeholder="full name"
				value={fields.name}
				onChangeText={(value) => fieldChnageHandler('name', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			<TextInput
				placeholder="password"
				secureTextEntry={true}
				value={fields.password}
				onChangeText={(value) => fieldChnageHandler('password', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
			<TextInput
				placeholder="repeat password"
				secureTextEntry={true}
				value={fields.rePassword}
				onChangeText={(value) => fieldChnageHandler('rePassword', value)}
				style={styles.input}
				placeholderTextColor="rgba(255,255,255, 0.3)"
			/>
		{/* <SignUpInput/> */}
			<RNPickerSelect
				style={ { inputIOS:{...styles.label} , inputAndroid:{...styles.androidStyles}}}
				onValueChange={(value) => setSelectedGroup(value)}
				items={groupsList}
				placeholder={{ label: 'group'}}
				
			/>
			<Slider
				onEndReached={() => submintHandlerSignUp(fields, signUp)}
				containerStyle={styles.nextBtn}
				sliderElement={<IconBtn icon={ICONS_LIGHT.logInBtn} style={styles.sliderElement} />}
			>
				<CustomText style={{ color: COLORS.backgroundLight, fontSize: 17 }}>Slide to Join</CustomText>
			</Slider>
		</View>
	);
});

const styles = StyleSheet.create({
	form: {
		marginHorizontal: 33
		// marginTop: 26
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
		color: COLORS.backgroundLight,
	},
	nextBtn: {
		width: '100%',
		height: 50,
		alignSelf: 'flex-end',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		borderWidth: 1,
		padding: 2,
		borderColor: COLORS.backgroundLight,
		position: 'absolute',
		bottom: -140
	},
	error: {
		fontSize: 16,
		color: 'red',
		marginTop: 10
	},
	sliderElement: {
		backgroundColor: COLORS.backgroundLight,
		height: 45,
		width: 64,
		borderRadius: 25
	},
	androidStyles:{
		borderWidth:1,
		color: COLORS.backgroundLight,
		borderColor:COLORS.backgroundLight,
		borderRadius:30,
		marginTop: 10,
		fontSize: 16,
	}
});
