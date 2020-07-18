import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText } from '../../commons/CustomText';
import { COLORS } from '../../styles/colors';
import { GLOBAL_STYLES } from '../../styles/globalStyles';
import { ICONS_LIGHT } from '../../styles';
import { selectTheme } from '../../redux/theme';
import { connect } from 'react-redux';
import { IconBtn } from '../../commons/IconBtn';
import { setSelectedPost } from '../../redux/comments';
import { selectChatsUsers } from '../../redux/chats';
import {Seperator} from "../../commons/Seperator";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state),
    usersList: selectChatsUsers(state)
});

//single posts in home screen
export const CommentScreenCommentBubble = connect(mapStateToProps, {
    setSelectedPost
})(({ navigation, post, setSelectedPost, darkMode, usersList }) => {

    const colorTheme = darkMode
        ? {
            backgroundColor: COLORS.backgroundDark,
            borderTheme: COLORS.drawerDark,
            textTheme: COLORS.backgroundLight
        }
        : {
            backgroundColor: COLORS.backgroundLight,
            borderTheme: COLORS.acsentColor,
            textTheme: COLORS.acsentLight
        };

    const auther = Object.keys(usersList)
        .map((key) => ({
            ID: key,
            ...usersList[key]
        }))
        .filter((user) => user.ID === post.autherID);

    return (
        <View>
        <View style={{ ...styles.container, ...colorTheme }}>
            <Image
                style={styles.profilePic}
                // borderColor={colorTheme.borderTheme}
                source={auther[0].profilePiC ? { uri: auther[0].profilePiC } : ICONS_LIGHT.userLight}
            />
            <View style={styles.postBodyContainer}>
                <CustomText weight="semi" style={{ ...styles.fullName, color: colorTheme.textTheme }}>
                    {auther[0].name}
                </CustomText>
                <CustomText style={{ ...styles.userName, color: colorTheme.borderTheme }}>@{auther[0].userName}</CustomText>
                <CustomText style={{ ...styles.text, color: colorTheme.textTheme }}>{post.text}</CustomText>
            </View>
        </View>
            <Seperator color={colorTheme.borderTheme} />

        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 18,
        borderRadius: 10,
        zIndex: 999,
        minHeight: 100
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
    time: {
        position: 'absolute',
        top: 10,
        right: 16,
        fontSize: 12
    }
});
