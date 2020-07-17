import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { IconBtn } from '../index';
import {ICONS_LIGHT, COLORS, ICONS_DARK} from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectReceiverUserName, selectReceiverUserImage } from '../../redux/comments';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
    receiverName: selectReceiverUserName(state),
    receiverPic: selectReceiverUserImage(state),
    darkMode: selectTheme(state)
});


export const CommentScreenHeader = connect(mapStateToProps)(({ navigation, receiverName, receiverPic, darkMode }) => {
    
    const colorTheme = darkMode
        ? {
            backgroundColor: COLORS.backgroundDark,
            borderColor: COLORS.drawerDark,
            nameColor: COLORS.backgroundLight,
            backIcon: ICONS_DARK.backDark
        } : {
            backgroundColor: COLORS.backgroundLight,
            borderColor: COLORS.acsentColor,
            nameColor: COLORS.textColorDark,
            backIcon: ICONS_LIGHT.backLight
        };

    return (
        <View style={{...styles.container, ...colorTheme}}>
            <IconBtn icon={colorTheme.backIcon} style={styles.backArrow} onPress={() => navigation.goBack()} />
            <Image style={{...styles.profilePiC, borderColor: colorTheme.borderColor}} source={receiverPic ? { uri: receiverPic } : ICONS_LIGHT.userLight} />
            <View style={styles.nameContainer}>
                <CustomText style={{...styles.name, color: colorTheme.nameColor}}>{receiverName}</CustomText>
            </View>
        </View>
    );
});
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center'
    },
    profilePiC: {
        width: 40,
        height: 40,
        borderRadius: 30,
        marginHorizontal: 15,
        borderWidth: 2,
    },
    backArrow: {
        marginLeft: 16
    },
    nameContainer: {
        justifyContent: 'space-around'
    },
    name: {
        fontSize: 18,
    },
    userName: {
        fontSize: 12,
        color: COLORS.acsentColor
    }
});
