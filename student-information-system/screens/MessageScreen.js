import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Footer,
    GradeShower,
    ProgressBar,
    ClassField,
    Header,
    ScheduleContainer,
    Information
} from '../components';
import { COLORS } from '../styles/colors';

export const MessageScreen = () => {
    return (
        <View style={styles.container}>

            <Header title="Message" />
            {/* a plachholder title for now */}


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
    },

});

