import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Image, TouchableOpacity} from 'react-native';
import { CustomText } from './CustomText';
import { COLORS } from '../styles/colors';
import { Seperator } from './Seperator';
import {ICONS_LIGHT} from "../styles";
import {Modal} from "./Modal";

export const Feedback = () => {

    const [send, setSend] = useState(false);
    const toggleSend = () => setSend(v => !v);

    return (
        <>
            <View style={styles.container}>
                <Image source={ICONS_LIGHT.survey} style={styles.icon} />
                <CustomText weight='bold' style={styles.heading}>Share your opinions about this app, please!</CustomText>
                <Seperator distance={17} color={COLORS.commentsColorLight} />
                <View style={styles.textInput}>
                    <TextInput style={styles.text} placeholder='Type your thoughts...'/>
                    <TouchableOpacity style={styles.touchIcon} onPress={toggleSend} >
                        <Image source={ICONS_LIGHT.sendLight} style={styles.sendIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
            {send && (
                <Modal cancel={toggleSend}
                       sent={() => alert('sent')}
                />
            )}
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        backgroundColor: COLORS.backgroundLight,
        marginTop: 5
    },
    icon: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginVertical: 15,
    },
    heading: {
        fontSize: 20,
        color: COLORS.acsentColor,
        textAlign: 'center',
        marginBottom: 23,
        marginHorizontal: 10,
    },
    textInput: {
        height: 250,
        borderRadius: 4,
        marginVertical: 25,
        backgroundColor: COLORS.backgroundLight,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17
    },
    text: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexWrap: 'wrap'
    },
    sendIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        position: 'absolute',
        right: 15,
    },
    touchIcon: {
        marginTop: -35,
    }
});
