import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import { CustomText } from '../index';
import { COLORS } from '../../styles';
import {selectProfilePiC, selectUser, uploadProfilePic } from '../../redux/auth';
import { selectGroup } from '../../redux/materials';
import { Seperator } from '../../commons/Seperator';
import {selectTheme} from '../../redux/theme';

const mapStateToProps = (state) => ({
	profilePic: selectProfilePiC(state),
	userName: selectUser(state).userName,
	name: selectUser(state).name,
	group: selectGroup(state),
	darkMode: selectTheme(state)
});

export const DrawerBody = connect(mapStateToProps, {
	uploadProfilePic,
})(({ profilePic, userName, name, group={}, darkMode }) => {

	const colorTheme= darkMode ? { color: COLORS.backgroundDark } : { color: COLORS.backgroundLight };

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<Image style={styles.profilePic} source={{ uri: profilePic }} />
				<CustomText style={{...styles.name, ...colorTheme}}>{name}</CustomText>
				<CustomText style={{...styles.username, ...colorTheme}}>@{userName}</CustomText>
				<Seperator color={{...COLORS.backgroundLight, ...colorTheme}} style={styles.seperator} />
				<CustomText style={{...styles.drawerTitle, ...colorTheme}}>group: {group.title}</CustomText>
				<CustomText style={{...styles.drawerTitle,...colorTheme}}>adviser: {group.teacher}</CustomText>
			</View>
		</SafeAreaProvider>
	);
});

const styles = StyleSheet.create({
	container: {
		marginTop: -100,
		paddingHorizontal: 25,
		alignItems: 'center',
		justifyContent: 'center'
	},
	profilePic: {
		width: 100,
		height: 100,
		alignSelf: 'center',
		marginBottom: 17,
		borderRadius: 100,
		// ...GLOBAL_STYLES.shaddowTop
	},
	seperator:{
		width:"75%",
		height:1,
		marginBottom:10
	},
	name: {
		textAlign: 'center',
		fontSize: 20
	},
	username: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 6,
		marginBottom: 15,
	},
	status: {
		fontSize: 13,
		textAlign: 'center',
		marginVertical: 6,
	},
	drawerLogout: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 20
	},
	drawerTitle: {
		fontSize: 14,
		marginBottom:5
	},
	userIm: {
		marginTop: 15,
		width: 25,
		height: 25,
		alignSelf: 'center'
	}
});
