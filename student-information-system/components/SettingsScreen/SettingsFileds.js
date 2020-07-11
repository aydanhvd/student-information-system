import React, { useState } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View, TextInput } from 'react-native';
import { CustomText } from '../Customs/CustomText';
import { COLORS, GLOBAL_STYLES, ICONS_LIGHT } from '../../styles';
import { selectUser, logOut, changeName } from '../../redux/auth';
import { CustomIconBtn } from '../Customs/CustomIconBtn';
import { CustomBtn } from '../Customs/CustomBtn';

const mapStateToProps = (state) => ({
	userName: selectUser(state).userName
});

export const SettingsFileds = connect(mapStateToProps, { logOut, changeName })(({ userName, logOut, changeName }) => {
	const [ name, setName ] = useState(userName);
	return (
		<View style={styles.container}>
			<View style={styles.input}>
				<CustomText style={styles.label}>name:</CustomText>
				<TextInput value={name} onChangeText={(value) => setName(value)} style={styles.name} />
			</View>
			<View style={styles.btnContainer}>
				<CustomBtn text="save changes" onPress={() => changeName(name)} style={styles.btn} />
				<CustomBtn text="log out" onPress={logOut} style={styles.btn}/>
			</View>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 21
	},
	input:{
		width:"85%",
		justifyContent:'center',
	},
	label: {
		fontSize: 13,
		color: COLORS.acsentColor,
		position:'absolute',
		left:15
	},
	name: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.acsentColor,
		color: COLORS.textColorDark,
		width: '100%',
		height: 35,
		// paddingVertical: 10,
		fontSize: 20,
		textAlign: 'center'
	},
	btn: {
		width: '100%',
		marginBottom: 10
	},
	btnContainer: {
		marginTop: 60,
		width: '85%',
		justifyContent: 'space-between'
		// alignItems: 'center',
		// alignSelf:'flex-end',
	},
	logBtnIcon: {
		width: 15,
		height: 15,
		position: 'absolute',
		right: 10
	}
});
