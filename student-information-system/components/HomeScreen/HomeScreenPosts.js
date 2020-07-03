import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HomeScreenPostBubble } from './HomeScreenPostBubble';
import { connect } from 'react-redux';
import { selectPosts, getAndListenPosts, selectActivePosts } from '../../redux/posts';

import { GLOBAL_STYLES } from '../../styles';
import { selectUser, selectProfilePiC } from '../../redux/auth';

const mapStateToProps = (state) => ({
	posts: selectPosts(state),
	activePostID: selectActivePosts(state),
	user: selectUser(state),
	profilePic:selectProfilePiC(state)
});

//posts in home screen
export const HomeScreenPosts = connect(mapStateToProps, {
	getAndListenPosts
})(({ getAndListenPosts, posts, activePostID ,profilePic }) => {
	useEffect(
		() => {
			if (activePostID !== '') {
				const unsub = getAndListenPosts(activePostID);
				return unsub;
			}
		},
		[ activePostID ]
	);
	return (
		<FlatList
			contentContainerStyle={styles.container}
			data={posts.slice(0).reverse()}
			renderItem={({ item }) => {
				return <HomeScreenPostBubble post={item} style={styles.post} profilePic={profilePic} />;
			}}
		/>
	);
});

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 17,
		marginTop: 30
		// flexGrow: 1,
		// paddingBottom: 100,//TODO look into post going under footer
	}
	// post:{
	// 	...GLOBAL_STYLES.shaddowTop
	// }
});
