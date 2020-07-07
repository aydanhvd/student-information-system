import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { COLORS } from '../../styles';
import { addLike, remuveLike, getAndListenLikeStatus, getAndListenLiksCount } from '../../redux/posts';

const mapStateToProps = (state) => ({});

export const HomeScreenPostLikes = connect(null, {
	addLike,
	remuveLike,
	getAndListenLikeStatus,
	getAndListenLiksCount
})(({ likesCount, addLike, remuveLike, postID, getAndListenLikeStatus, getAndListenLiksCount }) => {
	let likesArr = getAndListenLiksCount(postID);
	console.log(likesArr);
	const [ isLiked, setIsLiked ] = useState(getAndListenLikeStatus());
	const handleLike = (postID) => {
		setIsLiked((v) => !v);
		if (isLiked) {
			remuveLike(postID);
		} else if (!isLiked) {
			addLike(postID);
		}
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => handleLike(postID)}>
				<AntDesign name="heart" size={15} color={isLiked ? COLORS.acsentColor : COLORS.textColorDark} />
			</TouchableOpacity>
			<Text style={styles.count}>{likesCount}</Text>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	count: {
		marginLeft: 10,
		fontSize: 13,
		color: COLORS.acsentLight
	}
});
