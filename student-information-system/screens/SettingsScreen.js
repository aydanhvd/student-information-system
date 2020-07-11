import React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Footer, Header, ProfilePictureLoader, SettingsFileds } from '../components';
import { COLORS } from '../styles/colors';

export const SettingsScreen = () => {
	return (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
			<Header title="Settings" />
			<ScrollView>
				<ProfilePictureLoader />
				<SettingsFileds />
			</ScrollView>
			<Footer style={styles.footer} />
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems:'center',
		// justifyContent:'center',
		backgroundColor: COLORS.backgroundLight
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
