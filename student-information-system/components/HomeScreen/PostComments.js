import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { CustomText } from '../../commons/CustomText';
import { IconBtn } from '../../commons/IconBtn';
import { setSelectedPost, selectComments, getAndListenComments } from '../../redux/comments';
import { COLORS, ICONS_LIGHT } from '../../styles';

const mapStateToProps = (state) => ({
	comments: selectComments(state)
});

export const PostCommennts = connect(mapStateToProps, {
	setSelectedPost,
	getAndListenComments
})(({ post, setSelectedPost, navigation, comments = [], getAndListenComments }) => {
	getAndListenComments(post.ID);

	const onPressHandler = (post = []) => {
		setSelectedPost(post);
		navigation.navigate('CommentScreen');
	};
	return (
		<View style={styles.container}>
			<IconBtn icon={ICONS_LIGHT.commentLight} onPress={() => onPressHandler(post)} />
			{/* <CustomText>{comments.length}</CustomText> */}
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
	}
});
