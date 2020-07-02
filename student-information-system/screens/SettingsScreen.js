import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { Footer, Header, ProfilePictureLoader, SettingsFileds } from '../components';
import { COLORS , ICONS_LIGHT } from '../styles/colors';
import { connect } from 'react-redux';
import { logOut } from '../redux/auth';

export const SettingsScreen = connect(null, { logOut })(({ logOut }) => {
	return (
		<View style={styles.container}>
			<Header title="Settings" />
				<ProfilePictureLoader />
				<SettingsFileds />
			<Footer style={styles.footer} />
		</View>
	);
});

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
