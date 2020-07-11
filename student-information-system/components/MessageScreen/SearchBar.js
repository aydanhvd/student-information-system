import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { COLORS, ICONS_LIGHT } from '../../styles';
import { IconBtn } from '../../commons/IconBtn';
import { selectChatsUsers, setChatsUsers, getAndListenChatUsers } from '../../redux/chats';

const mapStateToProps = (state) => ({
	users: selectChatsUsers(state)
});

export const SearchBar = connect(mapStateToProps, {
	setChatsUsers,
	getAndListenChatUsers
})(({ users, setChatsUsers, getAndListenChatUsers }) => {
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
				setChatsUsers({ user });
			}
		}
	};
	return (
		<View style={styles.container}>
			<TextInput
				value={searchName}
				style={styles.searchBar}
				placeholder="search by username"
				onChangeText={(value) => setSaerchName(value)}
				placeholderTextColor={COLORS.textColorDark}
			/>
			<IconBtn icon={ICONS_LIGHT.search} style={styles.searchIcon} onPress={onPressHandler} />
			<IconBtn icon={ICONS_LIGHT.refresUsers} style={styles.refresh} onPress={getAndListenChatUsers} />
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
		marginBottom: 13
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
