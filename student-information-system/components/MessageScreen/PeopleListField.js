import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { COLORS, GLOBAL_STYLES, ICONS_LIGHT } from '../../styles';
import { SearchBar } from './SearchBar';
import { connect } from 'react-redux';
import { selectChatsUsers, initPriviteChats, setRecieverInfo} from '../../redux/chats';
import { UserCard } from './UserCard';
import { selectAuthUserID} from '../../redux/auth';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	users: selectChatsUsers(state),
	userID: selectAuthUserID(state),
	darkMode: selectTheme(state)
});
export const PeopleListField = connect(mapStateToProps, {
	initPriviteChats,
	setRecieverInfo
})(({ users, initPriviteChats, userID, navigation, setRecieverInfo, darkMode}) => {
	const usersArr = Object.keys(users)
		.map((key) => ({
			ID: key, //use uppercase letters for IDs
			...users[key]
		}))
		.filter((user) => user.ID !== userID);

	const onUserCardPressHandler = async (reciever) => {
		initPriviteChats(reciever.ID);
		setRecieverInfo({
			userName:reciever.name,
			image:reciever.profilePiC
		})
		navigation.navigate('PriviteChat');
	};

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark
		} : {
			backgroundColor: COLORS.backgroundLight
		};

	return (
		<View style={{...styles.container, ...colorTheme}}>
			 <SearchBar />

			<FlatList
				style={styles.listContainer}
				keyExtractor={(item)=>item.ID}
				horizontal
				showsHorizontalScrollIndicator={false}
				data={usersArr}
				renderItem={({ item }) => {
					return <UserCard user={item} onPress={() => onUserCardPressHandler(item)} />;
				}}
			/>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		height: 170,
		width: '100%',
		borderBottomEndRadius: 30,
		borderBottomStartRadius: 30,
		marginTop: 5,
		...GLOBAL_STYLES.shaddowBottum
	},
	listContainer: {
		width: '100%',
		height: '80%'
	},
});
