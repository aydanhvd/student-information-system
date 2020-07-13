import React, {useState} from 'react';
import {StyleSheet, View, TextInput } from 'react-native';
import {connect} from "react-redux";

import { COLORS } from '../../styles/colors';
import {ICONS_LIGHT, GLOBAL_STYLES, ICONS_DARK} from "../../styles";
import {Modal} from "./Modal";
import {submitFeedback} from "../../redux/feedback";
import { IconBtn } from '../../commons/IconBtn';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});

export const Feedback = connect(mapStateToProps, { submitFeedback })(({ activePostID, submitFeedback, darkMode }) => {
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

    const colorTheme= darkMode
        ? {
            backgroundColor: COLORS.backgroundDark,
            placeHolderTheme: COLORS.backgroundLight,
            sendIcon: ICONS_DARK.sendMessage
          }
        : {
            backgroundColor: COLORS.backgroundLight ,
            placeHolderTheme: COLORS.textColorDark,
            sendIcon: ICONS_LIGHT.sendMessages
        };


    return (
        <>
            <View style={styles.container }>
                <View style={{...styles.textInput, ...colorTheme}}>
                    <TextInput
                        placeholder = 'any suggestions for us to improve ?..'
                        placeholderTextColor = {colorTheme.placeHolderTheme}
                        onChangeText={setField}
                        value={field}
                        style={{...styles.text, color: colorTheme.placeHolderTheme}}
                    />
                    <IconBtn
                        icon={colorTheme.sendIcon}
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
        ...GLOBAL_STYLES.shaddowTop
    },
    text: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexWrap: 'wrap',
    },
    sendIcon: {
        alignSelf: 'center',
        position: 'absolute',
        right: 15,
        top: 25
    },
    touchIcon: {
        marginTop: -35,
    }
});
