import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../commons/Header';
import { Footer } from '../commons/Footer';
import {COLORS} from "../styles";
import {Feedback} from "../components";

export const FeedbackScreen = () => {
    return (
        <View style={styles.container}>
            <Header title='Feedback' />
            <Feedback/>
            <Footer style={styles.footer} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight

    },
    footer: {
        position: 'absolute',
        bottom: 0
    }
});
