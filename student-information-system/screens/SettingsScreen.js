import React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Footer, Header, ProfilePictureLoader, SettingsFileds } from '../components';
import { COLORS } from '../styles/colors';
import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const SettingsScreen = connect(mapStateToProps, {})(({ darkMode }) => {

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark
		} : {
			backgroundColor: COLORS.backgroundLight
		};

	return (
		<KeyboardAvoidingView style={{...styles.container, ...colorTheme}} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
			<Header title="Settings" />
			<ScrollView>
				<ProfilePictureLoader />
				<SettingsFileds />
			</ScrollView>
			<Footer style={styles.footer} />
		</KeyboardAvoidingView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
