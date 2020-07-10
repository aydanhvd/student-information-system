import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { COLORS } from '../../styles';
import { getAndListenLikes, getAndListenLiksCount ,toggleLike } from '../../redux/posts';

const mapStateToProps = (state) => ({});

export const HomeScreenPostLikes = connect(null, {
	toggleLike,
	getAndListenLikes,
	getAndListenLiksCount
})(({ likesCount, postID, getAndListenLikes, toggleLike }) => {
	const [ isLiked, setIsLiked ] = useState();
	let likes = getAndListenLikes(postID)
	console.log(likes)
	const handleLike=()=>{
		setIsLiked((v)=>!v)
		toggleLike(postID)
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleLike}>
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
