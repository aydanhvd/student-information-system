import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { COLORS, GLOBAL_STYLES } from '../styles';
import { SearchBar } from './SearchBar';
import { connect } from 'react-redux';
import { selectChatsUsers, initPriviteChats } from '../redux/chats';
import { UserCard } from './UserCard';
import { selectAuthUserID } from '../redux/auth';
import { useNavigation } from '@react-navigation/native';


const mapStateToProps = (state) => ({
	users: selectChatsUsers(state),
	userID: selectAuthUserID(state)
});
export const PeopleListField = connect(mapStateToProps, {
	initPriviteChats
})(({ users, initPriviteChats, userID  }) => {
	const {navigate}=useNavigation()
	const usersArr = Object.keys(users)
		.map((key) => ({
			ID: key, //use uppercase letters for IDs
			...users[key]
		}))
		.filter((user) => user.ID !== userID);

	const onUserCardPressHandler = async (recieverID) => {
		const chatID = await initPriviteChats(recieverID);
		console.log(chatID)
		navigate('PriviteChat', {chatID});
	};
	return (
		<View style={styles.container}>
			<SearchBar />
			<FlatList
				style={styles.listContainer}
				horizontal
				showsHorizontalScrollIndicator={false}
				data={usersArr}
				renderItem={({ item }) => {
					return <UserCard user={item} onPress={() => onUserCardPressHandler(item.ID)} />;
				}}
			/>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		height: 160,
		width: '100%',
		backgroundColor: COLORS.backgroundLight,
		borderBottomEndRadius: 30,
		borderBottomStartRadius: 30,
		...GLOBAL_STYLES.shaddowBottum
	},
	listContainer: {
		width: '100%',
		height: '80%'
	}
});
