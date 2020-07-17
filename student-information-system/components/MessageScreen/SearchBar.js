import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import {COLORS, ICONS_DARK, ICONS_LIGHT} from '../../styles';
import { IconBtn } from '../../commons/IconBtn';
import { selectChatsUsers, setChatsUsers, getAndListenChatUsers } from '../../redux/chats';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	users: selectChatsUsers(state),
	darkMode: selectTheme(state)
});

export const SearchBar = connect(mapStateToProps, {
	setChatsUsers,
	getAndListenChatUsers
})(({ users={}, setChatsUsers, getAndListenChatUsers, darkMode }) => {
	const [ searchName, setSaerchName ] = useState('');
	const usersArr = Object.keys(users).map((key) => ({
		ID: key, //use uppercase letters for IDs
		...users[key]
	}));
	const onPressHandler = () => {
		if (searchName !== '') {
			if (!!usersArr) {
				let user = usersArr.find((user) => {
					return user.userName.includes(searchName.toLowerCase().trim());
				});
				setChatsUsers({user});
			}
		}
	};
	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.acsentLight,
			placeHolderColor: COLORS.backgroundLight,
			refreshIcon: ICONS_DARK.refreshDark,
			searchIcon: ICONS_DARK.searchDark
		} : {
			backgroundColor: COLORS.backgroundLight,
			placeHolderColor: COLORS.textColorDark,
			refreshIcon: ICONS_LIGHT.refresUsers,
			searchIcon: ICONS_LIGHT.search
		};

	return (
		<View style={{...styles.container, ...colorTheme}}>
			<TextInput
				value={searchName}
				style={{...styles.searchBar, color: colorTheme.placeHolderColor}}
				placeholder="search by username"
				onChangeText={(value) => setSaerchName(value)}
				placeholderTextColor={colorTheme.placeHolderColor}
			/>
			<IconBtn icon={colorTheme.searchIcon} style={styles.searchIcon} onPress={onPressHandler} />
			<IconBtn icon={colorTheme.refreshIcon} style={styles.refresh} onPress={getAndListenChatUsers} />
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: COLORS.borderLight,
		borderRadius: 4,
		height: 32,
		alignItems: 'center',
		paddingHorizontal: 11,
		paddingVertical: 8,
		marginTop: 8,
		marginBottom: 13,
	},
	searchBar: {
		width: '95%',
		height: '100%'
	},
	searchIcon: {
		width: 18,
		height: 18
	},
	refresh: {
		position: 'absolute',
		right: 30,
		width: 18,
		height: 18,
		marginRight: 5
	}
});
