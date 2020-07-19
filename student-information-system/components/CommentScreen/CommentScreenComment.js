import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { selectUser, selectProfilePiC } from '../../redux/auth';
import { CommentScreenCommentBubble } from './CommentScreenCommentBubble';
import { selectSelectedPost, selectCommentsList } from '../../redux/comments';

const mapStateToProps = (state) => {
	return {
		setSelectedPost: selectSelectedPost(state),
		user: selectUser(state),
		profilePic: selectProfilePiC(state),
		commentsList: selectCommentsList(state)
	};
};
//comments in comment screen
export const CommentScreenComment = connect(
	mapStateToProps
)(({ setSelectedPost, profilePic, navigation, commentsList={} }) => {
	const comentsArr = Object.keys(commentsList[setSelectedPost.ID]).map((key) => ({
		ID: key,
		...commentsList[setSelectedPost.ID][key]
	}));
	console.log('comentsArr', comentsArr);
	return (
		<FlatList
			keyExtractor={(item) => item.ID}
			contentContainerStyle={styles.container}
			data={comentsArr}
			renderItem={({ item }) => {
				return (
					<CommentScreenCommentBubble
						post={item}
						style={styles.post}
						profilePic={profilePic}
						navigation={navigation}
					/>
				);
			}}
		/>
	);
});

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		flexGrow: 1,
		paddingHorizontal: 17,
		paddingBottom: 100 //TODO look into post going under footer
	}
	// post:{
	// 	...GLOBAL_STYLES.shaddowTop
	// }
});
