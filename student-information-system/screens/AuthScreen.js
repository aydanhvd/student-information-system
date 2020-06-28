import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	Image,
	TextInput
} from 'react-native';
import { COLORS } from '../styles';
import signInImage from '../assets/icons/signIn.png';
import { CustomText, IconBtn } from '../components';
import { LinearGradient } from 'expo-linear-gradient';
import { Radio, RadioGroup, CheckBox } from '@ui-kitten/components';
import { ICONS_LIGHT } from '../styles/index';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth';
import { validateForm } from '../utils/validateField';

//todo reduc this screen and delete unwanted compnents
export const AuthScreen = connect(null, { logIn })(({ logIn }) => {
	const [ group, setGroup ] = useState(0);
	const [ signUp, setSignUp ] = useState(false);
	const [ fields, setFields ] = useState({
		email: { value: '', placeHolder: 'email or username ' },
		name: { value: '', placeHolder: 'full name', hideWhenLogeIn: true },
		password: { value: '', placeHolder: 'password' },
		rePassword: { value: '', placeHolder: 'repeat password', hideWhenLogeIn: true }
	});
	//function to make our fields controlled
	const fieldChnageHndler = (name, value) => {
		setFields((fields) => ({
			...fields,
			[name]: {
				...fields[name],
				value
			}
		}));
	};
	//a function witch first checks the fields and then submits them
	const submintHandler = () => {
		const email = fields.email.value.trim();
		const pass = fields.password.value.trim();

		if (validateForm(signUp, fields, group)) {
			if (signUp) {
			} else {
				logIn(email, pass);
			}
		}
	};
	return (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
			<LinearGradient
				colors={[ COLORS.drawerLight, COLORS.acsentColor ]}
				style={{ ...StyleSheet.absoluteFill }}
				enabled
				keyboardVerticalOffset={100}
			/>
			<ScrollView style={styles.form}>
				<Image style={styles.image} source={signInImage} style={styles.signInImage} />
				<CustomText style={styles.greetingText}>Welcome</CustomText>
				{/* temporay gonna go */}
				<CheckBox
					checked={signUp}
					onChange={(nextChecked) => setSignUp(nextChecked)}
					status="control"
					style={styles.CheckBox}
				>
					Sign p?
				</CheckBox>
				{/* temporary we r going to have only password maybe username */}
				{Object.keys(fields).map((key) => {
					if (!fields[key].hideWhenLogeIn || signUp) {
						return (
							<TextInput
								key={fields[key].placeholder}
								placeholder={fields[key].placeHolder}
								value={fields[key].value}
								onChangeText={(value) => fieldChnageHndler(key, value)}
								style={styles.input}
								placeholderTextColor="rgba(255,255,255, 0.3)"
							/>
						);
					}
				})}
				{/* temporay gonna go */}
				{signUp && (
					<RadioGroup style={styles.groupBtn} selectedIndex={group} onChange={(index) => setGroup(index)}>
						<Radio value="first" status="control" onPress={(value) => setGroup(value)}>
							MD-1
						</Radio>
						<Radio value="MD-2" status="control">
							MD-2
						</Radio>
						<Radio value="BE-3" status="control">
							BE-3
						</Radio>
						<Radio value="BE-4" status="control">
							BE-4
						</Radio>
					</RadioGroup>
				)}
				<IconBtn icon={ICONS_LIGHT.logInBtn} style={styles.nextBtn} onPress={submintHandler} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	form: {
		paddingHorizontal: 33
	},
	input: {
		width: '100%',
		borderBottomColor: COLORS.backgroundLight,
		borderBottomWidth: 1,
		color: COLORS.backgroundLight,
		height: 40
	},
	greetingText: {
		color: COLORS.backgroundLight,
		alignSelf: 'center',
		fontSize: 59
	},
	signInImage: {
		alignSelf: 'center',
		marginTop: 30,
		marginLeft: 20
	},
	groupBtn: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	CheckBox: {
		alignSelf: 'flex-end'
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
