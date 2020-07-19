import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText } from '../../commons/CustomText';
import { COLORS } from '../../styles/colors';
import { GLOBAL_STYLES } from '../../styles/globalStyles';
import { ICONS_LIGHT } from '../../styles';
import { selectTheme } from '../../redux/theme';
import { connect } from 'react-redux';
import { IconBtn } from '../../commons/IconBtn';
import { HomeScreenPostLikes } from './HomeScreenPostLikes';
import { setSelectedPost } from '../../redux/comments';
import { selectChatsUsers } from '../../redux/chats';
import { timeHumanizer } from '../../utils/timeHumanizer';
import {CommentIcon} from "../../commons/icons/CommentIcon";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state),
	usersList: selectChatsUsers(state)
});

//single posts in home screen
export const HomeScreenPostBubble = connect(mapStateToProps, {
	setSelectedPost
})(({ navigation, post, setSelectedPost, darkMode, usersList }) => {
	const formattedTime = post.time ? timeHumanizer(post.time) : '';
	const colorTheme = darkMode
		? {
				backgroundColor: COLORS.backgroundDark,
				borderTheme: COLORS.drawerDark,
				textTheme: COLORS.backgroundLight
			}
		: {
				backgroundColor: '#F5F5F5',
				borderTheme: COLORS.acsentColor,
				textTheme: COLORS.acsentLight
			};

	const onPressHandler = (post=[]) => {
		setSelectedPost(post);
		navigation.navigate('CommentScreen');
	};
	const auther = Object.keys(usersList)
		.map((key) => ({
			ID: key,
			...usersList[key]
		}))
		.filter((user) => user.ID === post.autherID);
		
	return (
		<View style={{ ...styles.container, ...GLOBAL_STYLES.shaddowTop, ...colorTheme }}>
		{post&&<>
			<Image
				style={styles.profilePic}
				// borderColor={colorTheme.borderTheme}
				source={auther[0]?.profilePiC ? { uri: auther[0].profilePiC } : ICONS_LIGHT.userLight}
			/>
			<View style={styles.postBodyContainer}>
				<CustomText weight="semi" style={{ ...styles.fullName, color: colorTheme.textTheme }}>
					{auther[0]?.name}
				</CustomText>
				<CustomText style={{ ...styles.userName, color: colorTheme.borderTheme }}>@{auther[0]?.userName}</CustomText>
				<CustomText style={{ ...styles.text, color: colorTheme.textTheme }}>{post.text}</CustomText>
				<View style={styles.likesContainer}>
					{post.likes && <HomeScreenPostLikes postID={post.ID} />}
					<CommentIcon style={styles.commentIcon} onPress={() => onPressHandler(post)} />
				</View>
			</View>
			<CustomText style={{ ...styles.time, color: colorTheme.textTheme }}>{formattedTime[0]} {formattedTime[1]}</CustomText>
			</>}
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
		zIndex: 999,
		minHeight: 130
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
		backgroundColor: COLORS.commentsColorLight
		// justifyContent: 'flex-end'
	},
	commentIcon: {

	},
	time: {
		position: 'absolute',
		top: 10,
		right: 16,
		fontSize: 12
	}
});
