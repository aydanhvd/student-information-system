import React, { useState } from 'react';
import { StyleSheet, TextInput, View ,Text} from 'react-native';
import { Radio, RadioGroup } from '@ui-kitten/components';
import { connect } from 'react-redux';
import Slider from 'react-native-slide-to-unlock';

import { COLORS, ICONS_LIGHT } from '../../styles';
import { validateForm } from '../../utils/validateField';
import {clearAuthError, signUp} from '../../redux/auth';
import { IconBtn } from '../index';
import { CustomText } from '../../commons/CustomText';



export const SignUpForm = connect(null, { signUp, clearAuthError })
	(({ signUp, groupsList, clearAuthError }) => {
	const [ groupIndex, setGroupIndex ] = useState(null);
	const [ fields, setFields ] = useState({
		email: { value: '', placeholder: 'email' },
		userName: { value: '', placeholder: 'username' },
		name: { value: '', placeholder: 'full name' },
		password: { value: '', placeholder: 'password' },
		rePassword: { value: '', placeholder: 'repeat password' }
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
	const submintHandlerSignUp = (fields,signUp) => {
		const email = fields.email.value.toLowerCase().trim();
		const pass = fields.password.value.trim();
		const rePass = fields.rePassword.value.trim();
		const userName = fields.userName.value.toLowerCase().trim();
		const name = fields.name.value.trim();
		if (validateForm(true, email, pass, rePass, userName, name, groupsList[groupIndex]?.ID)) {
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
			<Slider
				onEndReached={() =>submintHandlerSignUp(fields,signUp)}
				containerStyle={styles.nextBtn}
				sliderElement={
					<IconBtn icon={ICONS_LIGHT.logInBtn}  style={styles.sliderElement}/>
				}
			>
			<CustomText style={{color:COLORS.backgroundLight , fontSize:17}}>Slide to Join</CustomText>
			</Slider>
			
		</View>
	);
});

const styles = StyleSheet.create({
	form: {
		marginHorizontal: 33,
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
		marginBottom: 5,
		fontSize: 16,
		color: COLORS.backgroundLight,
		textDecorationLine: 'underline'
	},
	nextBtn: {
		width: "100%",
		height: 50,
		alignSelf: 'flex-end',
		alignItems:'center',
		justifyContent:'center',
		borderRadius: 30,
		borderWidth:1,
		padding:2,
		borderColor:COLORS.backgroundLight,
		position:'absolute',
		bottom:-140
	},
	error: {
		fontSize: 16,
		color: "red",
		marginTop: 10,
	},
	sliderElement:{
		backgroundColor:COLORS.backgroundLight,
		height: 45,
		width:64,
		borderRadius: 25,
	}
});
