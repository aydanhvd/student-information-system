import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import {selectPostLikes, selectPosts, toggleLike} from "../../redux/posts";
import {getAuthToken, selectAuthUserID} from "../../redux/auth";
import {COLORS} from "../../styles";

const mapStateToProps = (state, props) => {
    console.log(getAuthToken(state));
    return {
        likes: selectPostLikes(state, props.postID),
        userID: selectAuthUserID(state),
    }};

export const HomeScreenPostLikes = connect(mapStateToProps, { toggleLike })(
    ({ likes, userID, toggleLike, postID }) => {
        const isLiked = !!likes[userID];
        const likesCount = Object.keys(likes).length;

        const handleLikePress = () => {
            toggleLike({ postID, userID, isLiked });
        };

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={handleLikePress}>
                    <AntDesign
                        name="hearto"
                        size={15}
                        color={isLiked ? "tomato" : COLORS.acsentLight}
                    />
                </TouchableOpacity>
                <Text style={styles.count}>{likesCount}</Text>
            </View>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    count: {
        marginLeft: 10,
        fontSize: 13,
        color: COLORS.acsentLight,
    },
});
