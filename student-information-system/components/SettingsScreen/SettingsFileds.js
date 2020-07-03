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
			<CustomText style={styles.label}>name:</CustomText>
			<TextInput value={name} onChangeText={(value) => setName(value)} style={styles.name} />
			<View style={styles.btnContainer}>
				<CustomBtn text="change name" onPress={()=>changeName(name)}/>
				<CustomBtn text="log out" onPress={logOut}>
					<CustomIconBtn icon={ICONS_LIGHT.logOutLight} style={styles.logBtnIcon} />
				</CustomBtn>
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
	label: {
		fontSize: 10,
		color: COLORS.acsentColor
	},
	name: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.acsentColor,
		color: COLORS.textColorDark,
		width: 218,
		height: 35,
		// paddingVertical: 10,
		fontSize: 20,
		textAlign: 'center'
	},
	btnContainer: {
		flexDirection: 'row',
		width: '85%',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 110
	},
	logBtnIcon: {
		width: 15,
		height: 15,
		position: 'absolute',
		right: 10
	}
});
