import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { COLORS, ICONS_DARK, ICONS_LIGHT } from '../../styles';
import { IconBtn } from '../../commons/IconBtn';
import { selectChatsUsers, setChatsUsers, getAndListenChatUsers } from '../../redux/chats';
import { selectTheme } from '../../redux/theme';
import { SearchIcon } from '../../commons/icons/SearchIcon';
import { RefreshIcon } from '../../commons/icons/RefreshIcon';

const mapStateToProps = (state) => ({
	users: selectChatsUsers(state),
	darkMode: selectTheme(state)
});

export const SearchBar = connect(mapStateToProps, {
	setChatsUsers,
	getAndListenChatUsers
})(({ users = {}, setChatsUsers, getAndListenChatUsers, darkMode }) => {
	const [ searchName, setSaerchName ] = useState('');
	const usersArr = Object.keys(users).map((key) => ({
		ID: key, //use uppercase letters for IDs
		...users[key]
	}));
	const onPressHandler = () => {
		if (searchName !== '') {
			if (!!usersArr) {
				let user = usersArr.filter((user) => {return user.userName.contains(searchName.toLowerCase().trim());});
				console.log(user)
				// setChatsUsers({...user});
			}
		}
		setSaerchName('');
	};
	const colorTheme = darkMode
		? {
				backgroundColor: COLORS.acsentLight,
				placeHolderColor: COLORS.backgroundLight
			}
		: {
				backgroundColor: COLORS.backgroundLight,
				placeHolderColor: COLORS.textColorDark
			};

	return (
		<View style={{ ...styles.container, ...colorTheme }}>
			<SearchIcon onPress={onPressHandler} />
			<TextInput
				value={searchName}
				style={{ ...styles.searchBar, color: colorTheme.placeHolderColor }}
				placeholder="search by username"
				onChangeText={(value) => setSaerchName(value)}
				placeholderTextColor={colorTheme.placeHolderColor}
			/>
			<MaterialIcons
				name="cancel"
				size={24}
				color={COLORS.commentsColorLight}
				style={styles.refresh}
				onPress={getAndListenChatUsers}
			/>
			{/* <RefreshIcon style={styles.refresh} onPress={getAndListenChatUsers} /> */}
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
		width: 275,
		height: '100%'
	},
	refresh: {
		position: 'absolute',
		right: 0,
		marginRight: 5
	}
});
