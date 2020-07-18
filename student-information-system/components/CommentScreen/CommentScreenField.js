import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import {COLORS, ICONS_LIGHT, GLOBAL_STYLES, ICONS_DARK} from '../../styles';
import { IconBtn } from '../../commons/IconBtn';
import { shareNewPost, selectActivePosts } from '../../redux/posts';
import { connect } from 'react-redux';
import {selectTheme} from "../../redux/theme";
import {addNewComment, selectSelectedPost} from "../../redux/comments";

const mapStateToProps = (state) => ({
    selectedPost: selectSelectedPost(state),
    darkMode: selectTheme(state)
});

export const CommentScreenField = connect(mapStateToProps, { addNewComment })(({ selectedPost, addNewComment, darkMode }) => {
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
            source: ICONS_DARK.origamiDark
        } : {
            backgroundColor: COLORS.backgroundLight,
            placeHolderTheme: COLORS.textColorDark,
            source: ICONS_LIGHT.origamiLight
        };

    return (
        <View style={{ ...styles.container, ...GLOBAL_STYLES.shaddowBottum, ...GLOBAL_STYLES.shaddowTop, ...colorTheme }}>
            <TextInput
                value={newComment}
                onChangeText={setNewComment}
                placeholderTextColor = {colorTheme.placeHolderTheme}
                style={{...styles.field, color: colorTheme.placeHolderTheme}}
                placeholder="write a comment"
            />
            <IconBtn icon={colorTheme.source} style={styles.icon} onPress={sharePostHandler} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        borderRadius: 50,
        marginHorizontal: 17,
        position: 'absolute',
        bottom: 60,
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
