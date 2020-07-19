import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { CustomText } from '../../commons/CustomText';
import { IconBtn } from '../../commons/IconBtn';
import { setSelectedPost, getAndListedCommentsList, selectCommentsList } from '../../redux/comments';
import { COLORS, ICONS_LIGHT } from '../../styles';
import {CommentIcon} from "../../commons/icons/CommentIcon";

const mapStateToProps = (state) => ({
	commentsList: selectCommentsList(state)
});

export const PostCommennts = connect(mapStateToProps, {
	setSelectedPost,
	getAndListedCommentsList
})(({ post, setSelectedPost, navigation, commentsList = {}, getAndListedCommentsList }) => {
	useEffect(() => {
		const unsub = getAndListedCommentsList(post.ID);
		return unsub;
	}, []);
	let commentsLength;
	if (commentsList[post.ID]) {
		commentsLength = Object.keys(commentsList[post.ID]).length;
	}
	const onPressHandler = (post = []) => {
		setSelectedPost(post);
		navigation.navigate('CommentScreen');
	};
	return (
		<View style={styles.container}>
			<CommentIcon style={styles.commentIcon} onPress={() => onPressHandler(post)} />
			<CustomText> {commentsLength}</CustomText>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	}
});
