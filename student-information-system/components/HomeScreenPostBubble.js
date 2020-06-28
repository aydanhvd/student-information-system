import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText } from './CustomText';
import { AntDesign } from '@expo/vector-icons';
import fbApp from '../utils/FireBaseInit';
import { COLORS } from '../styles/colors';
import { GLOBAL_STYLES } from '../styles/globalStyles';
import { Button } from 'react-native-web';

//single posts in home screen
export const HomeScreenPostBubble = ({ post }) => {
	const date = new Date(post.time);
	const formattedTime = post.time ? `${date.getHours()}:${date.getMinutes()}` : '';
	return (
		<View style={{...styles.container, ...GLOBAL_STYLES.shaddowTop }}>
			<Image style={styles.profilePic} source={{ uri: post.autherImage }} />
			<View style={styles.postBodyContainer}>
				<CustomText weight="semi" style={styles.fullName}>
					{post.auther}
				</CustomText>
				<CustomText style={styles.userName}>@{post.userName}</CustomText>
				<CustomText style={styles.text}>{post.text}</CustomText>
				<View style={styles.likesContainer}>
					<AntDesign name="hearto" size={15} color={COLORS.acsentLight} />
					<CustomText style={styles.likes}>{post.likes}</CustomText>
				</View>
			</View>
			<CustomText style={styles.time}>{formattedTime}</CustomText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderColor: COLORS.textColorDark, //find out why box shadow is not working
		marginBottom: 25,
		backgroundColor:COLORS.backgroundLight,
		padding: 18,
		borderRadius: 4,
		zIndex:999,  
		minHeight:130,
	},
	profilePic: {
		width: 45,
		height: 45,
		borderRadius: 40,
		borderWidth: 3,
		borderColor: COLORS.acsentColor,
		marginRight: 13
	},
	postBodyContainer: {
		width: '83%'
	},
	fullName: {
		fontSize: 15,
		marginBottom: 2
	},
	userName: {
		fontSize: 12,
		color: COLORS.drawerLight
	},
	text: {
		fontSize: 16
	},
	likesContainer: {
		flexDirection: 'row',
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	likes: {
		alignSelf: 'center',
		marginLeft: 4,
		color: COLORS.acsentLight,
		fontSize: 13
	},
	time: {
		// alignSelf: 'center',
		// marginLeft: 4,
		position: 'absolute',
		top: 10,
		right: 16,
		color: COLORS.acsentLight,
		fontSize: 12
	}
});
