import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { setChatID, setRecieverInfo } from '../../redux/chats';
import { ICONS_LIGHT } from '../../styles/iconsLight';
import {selectTheme} from "../../redux/theme";
import {HomeScreenPostBubble} from "../HomeScreen/HomeScreenPostBubble";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});


export const CommentScreenHeader = connect(mapStateToProps)(({ navigation, darkMode }) => {

    return (
        <View>
            <CustomText>CommentScreenHeader</CustomText>
        </View>
    );
});
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: COLORS.commentsColorLight,
        alignSelf: 'center',
        marginLeft: 3
        // marginRight:
    },
    textContainer: {
        width: '60%'
        // justifyContent:'space-between',
    },
    name: {
        fontSize: 18,
    },
    text: {
        fontSize: 12,
    },
    time: {
        fontSize: 13,
        marginLeft: -17,
        // alignSelf:'flex-start',
    }
});
