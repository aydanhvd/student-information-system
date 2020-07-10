import React, { useState, useEffect, Children } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { COLORS } from '../../styles';
import { toggleLike , getAndListenLikes} from '../../redux/posts';

const mapStateToProps = (state) => ({});

export const HomeScreenPostLikes = connect(null, {
	toggleLike,getAndListenLikes
})(({ postID, toggleLike , getAndListenLikes}) => {
	const [ isLiked, setIsLiked ] = useState();
	let like = getAndListenLikes(postID)
	console.log('like',like)
	const handleLike=()=>{
		setIsLiked((v)=>!v)
		toggleLike(postID)
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleLike}>
				<AntDesign name="heart" size={15} color={isLiked ? COLORS.acsentColor : COLORS.textColorDark} />
			</TouchableOpacity>
			<Text style={styles.count}>{}</Text>
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
