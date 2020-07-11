import React, {useState} from 'react';
import {StyleSheet, View, TextInput } from 'react-native';
import {connect} from "react-redux";

import { COLORS } from '../../styles/colors';
import {ICONS_LIGHT, GLOBAL_STYLES} from "../../styles";
import {Modal} from "./Modal";
import {submitFeedback} from "../../redux/feedback";
import { IconBtn } from '../../commons/IconBtn';

export const Feedback = connect(null, { submitFeedback })(({ activePostID, submitFeedback }) => {
    const [ field, setField ] = useState('');
    const [send, setSend] = useState(false);
    const submitHandler = () => {
        if (field.trim() !== '') {
            submitFeedback(activePostID, field);
            setField('');
        }
        toggleSend();
    };
    const toggleSend = () => setSend(v => !v);
    return (
        <>
            <View style={styles.container}>
                <View style={styles.textInput}>
                    <TextInput
                        placeholder = 'any suggestions for us to improve ?..'
                        onChangeText={setField}
                        value={field}
                        style={styles.text}
                    />
                    <IconBtn
                        icon={ICONS_LIGHT.sendMessages} 
                        style={styles.sendIcon} 
                        onPress={toggleSend}    
                    />
                </View>
            </View>
            {send && (
                <Modal 
                    cancel={toggleSend} 
                    sent={submitHandler} 
                    text="Do you want to submit this feedback?"
                />
            )}
        </>
    );
});
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.backgroundLight,
        marginTop: 5,
        alignItems:'center',
        justifyContent:'center',
    },
    textInput: {
        width:"90%",
        height: 400,
        borderRadius: 4,
        padding: 20,
        marginTop:60,
        backgroundColor: COLORS.backgroundLight,
        ...GLOBAL_STYLES.shaddowTop
    },
    text: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexWrap: 'wrap'
    },
    sendIcon: {
        alignSelf: 'center',
        position: 'absolute',
        right: 15,
        top:10
    },
    touchIcon: {
        marginTop: -35,
    }
});
