import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { COLORS, GLOBAL_STYLES } from '../../styles';
import { SearchBar } from './SearchBar';
import { connect } from 'react-redux';
import { selectChatsUsers, initPriviteChats, setRecieverInfo} from '../../redux/chats';
import { UserCard } from './UserCard';
import { selectAuthUserID} from '../../redux/auth';

const mapStateToProps = (state) => ({
	users: selectChatsUsers(state),
	userID: selectAuthUserID(state)
});
export const PeopleListField = connect(mapStateToProps, {
	initPriviteChats,
	setRecieverInfo
})(({ users, initPriviteChats, userID, navigation, setRecieverInfo}) => {
	const usersArr = Object.keys(users)
		.map((key) => ({
			ID: key, //use uppercase letters for IDs
			...users[key]
		}))
		.filter((user) => user.ID !== userID);

	const onUserCardPressHandler = async (reciever) => {
		initPriviteChats(reciever.id);
		setRecieverInfo({
			userName:reciever.name,
			image:reciever.profilePiC
		})

		navigation.navigate('PriviteChat');
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
		backgroundColor: COLORS.backgroundLight,
		borderBottomEndRadius: 30,
		borderBottomStartRadius: 30,
		marginTop: 5,
		...GLOBAL_STYLES.shaddowBottum
	},
	listContainer: {
		width: '100%',
		height: '80%'
	}
});
