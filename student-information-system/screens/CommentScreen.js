import React from 'react';
import { StyleSheet, View } from 'react-native';
import {CommentScreenHeader, Footer, HomeScreenPostBubble, HomeScreenPosts} from '../components';
import { Header } from '../commons/Header';
import { COLORS } from '../styles';
import { connect } from 'react-redux';
import { HomeWorksList } from '../components/HomeWorksScreen/HomeWorksList';
import {selectTheme} from "../redux/theme";
import {Com, Comment} from "../components/CommentScreen/CommentScreenHeader";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});


export const CommentScreen = connect(mapStateToProps, {})(({ navigation, darkMode }) => {
    const colorTheme = darkMode
        ? {
            backgroundColor: COLORS.backgroundDark
        } : {
            backgroundColor: COLORS.backgroundLight
        };

    return (
        <View style={{...styles.container, ...colorTheme}}>
            <Header title='Comment' style={{ position: 'absolute', top: -20 }} />
                <CommentScreenHeader navigation={navigation}/>
            <Footer style={styles.footer} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
    },
    footer: {
        position: 'absolute',
        bottom: 0
    }
});
