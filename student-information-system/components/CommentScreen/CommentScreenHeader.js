import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {HomeScreenPostLikes, IconBtn} from '../index';
import { ICONS_LIGHT, COLORS, ICONS_DARK, GLOBAL_STYLES } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectTheme } from '../../redux/theme';
import { selectSelectedPost } from '../../redux/comments';
import { selectChatsUsers } from '../../redux/chats';
import { BackIcon } from "../../commons/icons/BackIcon";
import {PostCommennts} from "../HomeScreen/PostComments";

const mapStateToProps = (state) => ({
	selectedPost: selectSelectedPost(state),
	usersList: selectChatsUsers(state),
	darkMode: selectTheme(state),
});

export const CommentScreenHeader = connect(
	mapStateToProps
)(({ navigation, darkMode, selectedPost, usersList = [] }) => {
	const colorTheme = darkMode
		? {
				backgroundColor: COLORS.backgroundDark,
				borderColor: COLORS.drawerDark,
				nameColor: COLORS.backgroundLight,
			}
		: {
				backgroundColor: COLORS.backgroundLight,
				borderColor: COLORS.acsentColor,
				nameColor: COLORS.textColorDark,
			};

	const auther = Object.keys(usersList)
		.map((key) => ({
			ID: key,
			...usersList[key]
		}))
		.filter((user) => user.ID === selectedPost.autherID);

	return (
		<View style={{ ...colorTheme }}>
			<View style={{ ...styles.container, ...colorTheme }}>
				<BackIcon onPress={() => navigation.goBack()} />
				<Image
					style={{ ...styles.profilePiC, borderColor: colorTheme.borderColor }}
					source={auther[0].profilePiC ? { uri: auther[0].profilePiC } : ICONS_LIGHT.userLight}
				/>
				<View style={styles.nameContainer}>
					<CustomText style={{ ...styles.name, color: colorTheme.nameColor }}>{auther[0].name}</CustomText>
				</View>
			</View>
			<View style={{...styles.post, ...colorTheme}}>
				<CustomText style={{ color: colorTheme.nameColor }}>{selectedPost.text}</CustomText>
				<View style={{...styles.likesContainer, backgroundColor: colorTheme.borderColor}}>
					{selectedPost.likes && <HomeScreenPostLikes postID={selectedPost.ID} />}
					<PostCommennts post={selectedPost} navigation={navigation} />
				</View>
			</View>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 60,
		alignItems: 'center'
	},
	profilePiC: {
		width: 40,
		height: 40,
		borderRadius: 30,
		marginHorizontal: 15,
		borderWidth: 2
	},
	nameContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 18
	},
	userName: {
		fontSize: 12,
		color: COLORS.acsentColor
    },
    post:{
        width:"100%",
        minHeight: 80,
        ...GLOBAL_STYLES.shaddowBottum,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
		marginBottom: -15,
		paddingTop: 10,

    },
	likesContainer: {
		flexDirection: 'row',
		width: '100%',
		marginTop: 10,
		borderBottomStartRadius: 40,
		borderBottomEndRadius: 40,
	},

});
