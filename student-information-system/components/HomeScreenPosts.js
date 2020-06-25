import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HomeScreenPostBubble } from './HomeScreenPostBubble';
import { connect } from 'react-redux';
import { selectPosts, getAndListenPosts, selectActivePosts } from '../redux/posts';

const mapStateToProps = (state) => ({
	posts: selectPosts(state),
	activePostID: selectActivePosts(state)
});

//posts in home screen
export const HomeScreenPosts = connect(mapStateToProps, {
	getAndListenPosts
})(({ getAndListenPosts, posts, activePostID }) => {
	console.log(activePostID);
	useEffect(
		() => {
			if (activePostID !== '') {
				const unsub = getAndListenPosts(activePostID);
				return unsub;
			}
		},
		[ activePostID ]
	);
	console.log(posts);
	return (
		<FlatList
			contentContainerStyle={styles.container}
			data={posts.slice(0).reverse()}
			renderItem={({ item }) => {
				return <HomeScreenPostBubble post={item} />;
			}}
		/>
	);
});

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 17,
		marginTop: 30
	}
});
