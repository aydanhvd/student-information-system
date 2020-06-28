import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Footer, Header, IconBtn } from '../components';
import { COLORS } from '../styles/colors';
import { ICONS_LIGHT } from '../styles';
import { connect } from 'react-redux';
import { logOut } from '../redux/auth';

export const SettingsScreen = connect(null, { logOut })(({ logOut }) => {
	return (
		<View style={styles.container}>
			<Header title="Settings" />
			{/* a plachholder title for now */}
			<IconBtn icon={ICONS_LIGHT.logOutLight} style={styles.logOutBtn} onPress={logOut}/>
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
	logOutBtn:{
		alignSelf:'center',
		width:44,
		height:44
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
