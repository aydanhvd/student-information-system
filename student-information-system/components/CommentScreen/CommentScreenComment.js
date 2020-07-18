import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { selectUser, selectProfilePiC } from '../../redux/auth';
import {CommentScreenCommentBubble} from "./CommentScreenCommentBubble";
import {getAndListenComments, selectComments, selectSelectedPost} from "../../redux/comments";

const mapStateToProps = (state) => {
    return {
        comments: selectComments(state),
        setSelectedPost: selectSelectedPost(state),
        user: selectUser(state),
        profilePic:selectProfilePiC(state)
    }};
//comments in comment screen
export const CommentScreenComment = connect(mapStateToProps, {
    getAndListenComments
})(({ getAndListenComments, comments, setSelectedPost ,profilePic, navigation }) => {
    useEffect(
        () => {
            if (setSelectedPost !== '') {
                const unsub = getAndListenComments(setSelectedPost);
                return unsub;
            }
        },
        [ setSelectedPost ]
    );
    return (
        <FlatList
            keyExtractor={(item)=>item.ID}
            contentContainerStyle={styles.container}
            data={comments}
            renderItem={({ item }) => {
                return <CommentScreenCommentBubble post={item} style={styles.post} profilePic={profilePic} navigation={navigation}/>;
            }}
        />
    );
});

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexGrow: 1,
        paddingHorizontal:17,
        paddingBottom: 100,//TODO look into post going under footer
    }
    // post:{
    // 	...GLOBAL_STYLES.shaddowTop
    // }
});
