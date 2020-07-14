import React, { useState } from 'react';
import { StyleSheet, TextInput, View ,Text} from 'react-native';
import { Radio, RadioGroup } from '@ui-kitten/components';
import { connect } from 'react-redux';
import Slider from 'react-native-slide-to-unlock';

import { COLORS, ICONS_LIGHT } from '../../styles';
import { validateForm } from '../../utils/validateField';
import { signUp} from '../../redux/auth';
import { IconBtn } from '../index';
import { CustomText } from '../../commons/CustomText';

export const SignUpForm = connect(null, { signUp })(({ signUp, groupsList }) => {
	const [ groupIndex, setGroupIndex ] = useState(null);
	const [ fields, setFields ] = useState({
		email: '',
		userName: '',
		name: '',
		password:'',
		rePassword:''
	});
	const fieldChnageHandler = (name, value) => {
		setFields((fields) => ({
			...fields,
			[name]: value
		}));
	};
	const submintHandlerSignUp = (fields,signUp) => {
		const email = fields.email.trim();
		const pass = fields.password.trim();
		const rePass = fields.rePassword.trim();
		const userName = fields.userName.trim();
		const name = fields.name.trim();
		if (validateForm(true, email, pass, rePass, userName, name, groupsList[groupIndex]?.ID)) {
			signUp(email, name, userName, pass, groupsList[groupIndex].ID);
		}
	};
	return (
		<View style={styles.form}>
					<TextInput
						placeholder='email'
						value={fields.email}
						onChangeText={(value) => fieldChnageHandler('email', value)}
						style={styles.input}
						placeholderTextColor="rgba(255,255,255, 0.3)"
					/>
					<TextInput
						placeholder='username'
						value={fields.username}
						onChangeText={(value) => fieldChnageHandler('userName', value)}
						style={styles.input}
						placeholderTextColor="rgba(255,255,255, 0.3)"
					/>
					<TextInput
						placeholder='full name'
						value={fields.name}
						onChangeText={(value) => fieldChnageHandler('name', value)}
						style={styles.input}
						placeholderTextColor="rgba(255,255,255, 0.3)"
					/>
					<TextInput
						placeholder='password'
						secureTextEntry={true}
						value={fields.password}
						onChangeText={(value) => fieldChnageHandler('password', value)}
						style={styles.input}
						placeholderTextColor="rgba(255,255,255, 0.3)"
					/><TextInput
						placeholder='repeat password'
						secureTextEntry={true}
						value={fields.rePassword}
						onChangeText={(value) => fieldChnageHandler('rePassword', value)}
						style={styles.input}
						placeholderTextColor="rgba(255,255,255, 0.3)"
					/>
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
