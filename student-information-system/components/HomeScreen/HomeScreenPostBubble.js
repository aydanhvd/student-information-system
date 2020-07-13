import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText } from '../../commons/CustomText';
import { COLORS } from '../../styles/colors';
import { GLOBAL_STYLES } from '../../styles/globalStyles';
import { ICONS_LIGHT } from '../../styles';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

//single posts in home screen
export const HomeScreenPostBubble = connect(mapStateToProps, {})(({ post, darkMode }) => {

	const date = new Date(post.time);
	let week= ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
	const formattedTime = post.time ? `${week[date.getDay()]} ${date.getHours()}:${date.getMinutes()}` : '';

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark,
			borderTheme: COLORS.drawerDark,
			textTheme: COLORS.backgroundLight,
		} : {
			backgroundColor: COLORS.backgroundLight,
			borderTheme: COLORS.acsentColor,
			textTheme: COLORS.acsentLight,
		};

	return (
		<View style={{...styles.container, ...GLOBAL_STYLES.shaddowTop, ...colorTheme }}>
			<Image style={styles.profilePic}
				   borderColor={colorTheme.borderTheme}
				   source={post.autherProfilePic? { uri: post.autherProfilePic } : ICONS_LIGHT.userLight
				   } />
			<View style={styles.postBodyContainer}>
				<CustomText weight="semi" style={{...styles.fullName, color: colorTheme.textTheme}}>
					{post.auther}
				</CustomText>
				<CustomText style={{...styles.userName, color: colorTheme.borderTheme}} >@{post.userName}</CustomText>
				<CustomText style={{...styles.text, color: colorTheme.textTheme}}>{post.text}</CustomText>
				{/* <View style={styles.likesContainer}>
					<HomeScreenPostLikes postID={post.ID}/>
				</View> */}
			</View>
			<CustomText style={{...styles.time, color: colorTheme.textTheme}}>{formattedTime}</CustomText>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderColor: COLORS.textColorDark, //find out why box shadow is not working
		marginBottom: 25,
		padding: 18,
		borderRadius: 10,
		zIndex:999,  
		minHeight:130,
	},
	profilePic: {
		width: 50,
		height: 50,
		borderRadius: 40,
		borderWidth: 3,
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
	time: {
		position: 'absolute',
		top: 10,
		right: 16,
		fontSize: 12
	}
});
