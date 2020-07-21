import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText } from '../../commons/CustomText';
import { COLORS } from '../../styles/colors';
import { GLOBAL_STYLES } from '../../styles/globalStyles';
import { ICONS_LIGHT } from '../../styles';
import { selectTheme } from '../../redux/theme';
import { connect } from 'react-redux';
import { HomeScreenPostLikes } from './HomeScreenPostLikes';
import { selectChatsUsers } from '../../redux/chats';
import { timeHumanizer } from '../../utils/timeHumanizer';
import { PostCommennts } from './PostComments';
import {darkModeHandler} from "../../styles/darkModeHandler";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state),
	usersList: selectChatsUsers(state)
});

//single posts in home screen
export const HomeScreenPostBubble = connect(mapStateToProps,{

})(({ navigation, post, darkMode, usersList}) => {
	const formattedTime = post.time ? timeHumanizer(post.time) : '';

	const theme = darkModeHandler(darkMode);

	const auther = Object.keys(usersList)
		.map((key) => ({
			ID: key,
			...usersList[key]
		}))
		.filter((user) => user.ID === post.autherID);
		
	return (
		<View style={{ ...styles.container, ...GLOBAL_STYLES.shaddowTop, backgroundColor: theme.postBgColor }}>
			<View style={styles.row}>
		{post&&<>
			<Image
				style={styles.profilePic}
				// borderColor={colorTheme.borderTheme}
				source={auther[0]?.profilePiC ? { uri: auther[0].profilePiC } : ICONS_LIGHT.userLight}
			/>
			<View style={styles.postBodyContainer}>
				<CustomText weight="semi" style={{ ...styles.fullName, color: theme.textColor }}>
					{auther[0]?.name}
				</CustomText>
				<CustomText style={{ ...styles.userName, color: theme.mainColor }}>@{auther[0]?.userName}</CustomText>
				<CustomText style={{ ...styles.text, color: theme.textColor }}>{post.text}</CustomText>
			</View>
			<CustomText style={{ ...styles.time, color: theme.textColor }}>{formattedTime[0]} {formattedTime[1]}</CustomText>
			</>}
			</View>
			<View style={{...styles.likesContainer, backgroundColor: theme.mainColor}}>
				{post.likes && <HomeScreenPostLikes postID={post.ID} />}
				<PostCommennts post={post} navigation={navigation} />
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		borderColor: COLORS.textColorDark, //find out why box shadow is not working
		marginBottom: 25,
		borderRadius: 10,
		zIndex: 999,
		minHeight: 130
	},
	row: {
		flexDirection: 'row',
		margin: 18,
	},
	profilePic: {
		width: 50,
		height: 50,
		borderRadius: 40,
		// borderWidth: 3,
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
		marginBottom: 10
	},
	text: {
		fontSize: 16
	},
	likesContainer: {
		flexDirection: 'row',
		width: '100%',
		marginTop: 10,
		alignItems: 'center',
		borderBottomStartRadius: 10,
		borderBottomEndRadius: 10,
	},
	time: {
		position: 'absolute',
		top: 3,
		right: 10,
		fontSize: 12
	}
});
