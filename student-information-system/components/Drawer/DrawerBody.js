import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import { CustomText } from '../index';
import { COLORS, GLOBAL_STYLES, ICONS_LIGHT } from '../../styles';
import { logOut, selectProfilePiC, selectUser, uploadProfilePic } from '../../redux/auth';
import { selectGroup } from '../../redux/materials';
import { SearchBar } from '../MessageScreen/SearchBar';
import { Seperator } from '../../commons/Seperator';

const mapStateToProps = (state) => ({
	profilePic: selectProfilePiC(state),
	userName: selectUser(state).userName,
	name: selectUser(state).name,
	group: selectGroup(state)
});

export const DrawerBody = connect(mapStateToProps, {
	uploadProfilePic,
	logOut
})(({ profilePic, userName, name, group={}, logOut }) => {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<Image style={styles.profilePic} source={{ uri: profilePic }} />
				<CustomText style={styles.name}>{name}</CustomText>
				<CustomText style={styles.username}>@{userName}</CustomText>
				<Seperator color={COLORS.backgroundLight} style={styles.seperator} />
				<CustomText style={styles.drawerTitle}>group: {group.title}</CustomText>
				<CustomText style={styles.drawerTitle}>adviser: {group.teacher}</CustomText>
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
		color: COLORS.backgroundLight,
		fontSize: 20
	},
	username: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 6,
		marginBottom: 15,
		color: COLORS.backgroundLight
	},
	status: {
		fontSize: 13,
		textAlign: 'center',
		marginVertical: 6,
		color: COLORS.backgroundLight
	},
	drawerLogout: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		marginTop: 20
	},
	drawerTitle: {
		fontSize: 14,
		color: COLORS.backgroundLight,
		marginBottom:5
	},
	userIm: {
		marginTop: 15,
		width: 25,
		height: 25,
		alignSelf: 'center'
	}
});
