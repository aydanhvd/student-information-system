import React, {useState,useEffect} from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { CustomText } from "../index";
import {COLORS, GLOBAL_STYLES, ICONS_LIGHT} from "../../styles";
import {connect} from "react-redux";
import {logOut, selectProfilePiC, selectUser, uploadProfilePic} from "../../redux/auth";

const mapStateToProps = (state) => ({
    profilePic: selectProfilePiC(state),
    userName: selectUser(state).userName,
    name: selectUser(state).name,
    group: selectUser(state).group
});

export const DrawerBody = connect(mapStateToProps, { uploadProfilePic, logOut })(({ profilePic, userName, name, group, logOut, }) => {
    return (

        <SafeAreaProvider>
            <View style={styles.container}>

                <View style={styles.userInfo}>
                    <Image style={styles.profilePic} source={{ uri: profilePic }} />
                </View>
                <CustomText style={styles.name}>{name}</CustomText>
                <CustomText style={styles.username}>@{userName}</CustomText>
                <CustomText style={styles.status}>student</CustomText>
                <CustomText weight="semi" style={styles.drawerTitle}>group: {group}</CustomText>
                <CustomText weight="semi" style={styles.drawerTitle}>adviser:</CustomText>
                <TouchableOpacity style={styles.drawerLogout} onPress={logOut}>

                    <CustomText weight="semi" style={styles.drawerTitle}>
                        Log Out
                    </CustomText>
                    <Image
                        resizeMode="cover"
                        style={styles.userIm}
                        source={ICONS_LIGHT.logOut}
                    />
                </TouchableOpacity>

            </View>
        </SafeAreaProvider>
    );
});

const styles = StyleSheet.create({
    container: {
        marginTop: -100,
        paddingHorizontal: 25
    },
    userInfo: {
        width: 130,
        height: 130,
        borderRadius: 100,
        marginBottom: 17,
        ...GLOBAL_STYLES.shaddowTop,
        alignSelf: 'center'
    },
    profilePic: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    name: {
        textAlign: 'center',
        color: COLORS.backgroundLight,
        fontSize: 20,
    },
    username: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 6,
        color: COLORS.backgroundLight,
    },
    status: {
        fontSize: 13,
        textAlign: 'center',
        marginVertical: 6,
        color: COLORS.backgroundLight,
    },
    drawerLogout: {
        alignSelf: 'center',
        marginTop: 20
    },
    drawerTitle: {
        fontSize: 16,
        marginTop: 10,
        color: COLORS.backgroundLight
    },
    userIm: {
        marginTop: 15,
        width: 25,
        height: 25,
        alignSelf: 'center',
    },
});