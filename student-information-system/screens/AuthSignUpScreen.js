import React, { useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import signUpImage from '../assets/icons/signUp.png';
import { CustomText } from '../components';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles';
import { TouchableText } from '../commons/ToucableText';
import { SignUpForm } from '../components/AuthScreen/SigUpForm';
import { connect } from 'react-redux';
import {selectAuthGroupsList, getAndListenAuthGroupsList, setAuthError, clearAuthError} from '../redux/auth';

const mapStateToProps = (state) => ({
	groupsList: selectAuthGroupsList(state)
});

export const AuthSingUpScreen = connect(mapStateToProps, {
	getAndListenAuthGroupsList
})(({ navigation, getAndListenAuthGroupsList, groupsList }) => {
	useEffect(() => {
		const unsub = getAndListenAuthGroupsList();
		return unsub;
	}, []);
	return (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
			<LinearGradient colors={[ COLORS.acsentColor, COLORS.drawerDark ]} style={{ ...StyleSheet.absoluteFill }} />
			<ScrollView style={styles.form}>
				<CustomText style={styles.greetingText}>Join The Family</CustomText>
				<SignUpForm groupsList={groupsList} />
				<TouchableText style={styles.link} text="One of us?" onPress={() => navigation.goBack()} />
				<Image source={signUpImage} style={styles.signUpImage} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	signUpImage: {
		width: 190,
		height: 270,
		alignSelf: 'center',
		resizeMode: 'contain',
		marginTop: 20
	},
	greetingText: {
		color: COLORS.backgroundLight,
		alignSelf: 'center',
		fontSize: 48,
		marginTop: 40
	},
	link: {
		color: COLORS.backgroundLight,
		fontSize: 18,
		position: 'absolute',
		bottom: -40,
		right: 30,
		alignItems: 'flex-end',
		textDecorationLine: 'underline'
	}
});
