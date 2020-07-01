import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from './CustomText';
import { COLORS } from '../styles/colors';

export const Modal = ({ cancel, sent }) => {

    // click send button and confirm with this modal
    return (
        <View style={styles.container}>
            <CustomText weight='bold' style={styles.headerText}>Do you want to submit this feedback?</CustomText>
            <View style={styles.row}>
                <TouchableOpacity style={styles.cancelBtn} onPress={cancel}>
                    <CustomText weight='bold' style={styles.text}>Cancel</CustomText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendBtn} onPress={sent}>
                    <CustomText weight='bold' style={styles.text}>Send</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginHorizontal: 40,
        marginVertical: 270,
        paddingVertical: 30,
        paddingHorizontal: 20,
        height: 150,
        backgroundColor: COLORS.backgroundLight,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    cancelBtn: {
        paddingVertical: 15,
        marginTop: 20,
        width: '35%',
        backgroundColor: COLORS.acsentLight,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    },
    sendBtn: {
        paddingVertical: 15,
        marginTop: 20,
        width: '35%',
        backgroundColor: COLORS.acsentColor,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    },
    headerText: {
        textAlign: 'center',
        color: COLORS.textColorDark,
    },
    text: {
        textAlign: 'center',
        color: COLORS.backgroundLight,

    }
});
