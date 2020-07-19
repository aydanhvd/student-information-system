import React, { useState } from 'react';
import {StyleSheet, View, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import {COLORS, ICONS_LIGHT, GLOBAL_STYLES, ICONS_DARK} from '../../styles';
import { IconBtn } from '../../commons/IconBtn';
import { shareNewPost, selectActivePosts } from '../../redux/posts';
import { connect } from 'react-redux';
import {selectTheme} from "../../redux/theme";
import {addNewComment, selectSelectedPost} from "../../redux/comments";
import {OrigamiIcon} from "../../commons/icons/OrigamiIcon";

const mapStateToProps = (state) => ({
    selectedPost: selectSelectedPost(state),
    darkMode: selectTheme(state)
});

export const CommentScreenField = connect(mapStateToProps, { addNewComment })(({ selectedPost, addNewComment, darkMode, style }) => {
    const [ newComment, setNewComment ] = useState('');

    const sharePostHandler = () => {
        if (newComment.trim() !== '') {
            addNewComment(selectedPost.ID, newComment);
            setNewComment('');
        }
    };

    const colorTheme = darkMode
        ? {
            backgroundColor: COLORS.backgroundDark,
            placeHolderTheme: COLORS.backgroundLight,
        } : {
            backgroundColor: COLORS.backgroundLight,
            placeHolderTheme: COLORS.textColorDark,
        };

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={20}
            style={{ ...style, ...styles.container, ...colorTheme, ...GLOBAL_STYLES.shaddowBottum, ...GLOBAL_STYLES.shaddowTop, }}
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
        >
            <TextInput
                value={newComment}
                onChangeText={setNewComment}
                placeholderTextColor = {colorTheme.placeHolderTheme}
                style={{...styles.field, color: colorTheme.placeHolderTheme}}
                placeholder="write a comment"
            />
            <OrigamiIcon style={styles.icon} onPress={sharePostHandler} />
        </KeyboardAvoidingView>
    );
});

const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        flexDirection: 'row',
        borderRadius: 50,
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    field: {
        width: '90%',
        height: '100%',
        textAlign:"auto",
        flexWrap:'wrap',
    }
});
