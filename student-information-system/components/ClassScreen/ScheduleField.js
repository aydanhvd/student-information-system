import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { CustomText } from '../../commons/CustomText';
import { Seperator } from '../../commons/Seperator';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});

export const ScheduleField = connect(mapStateToProps, {})(({ heading, date, style , fontSize, darkMode }) => {

    const colorTheme = darkMode
        ? {
            backgroundColor: COLORS.backgroundDark,
            headerText: COLORS.backgroundLight
        } : {
            backgroundColor: COLORS.backgroundLight,
            headerText: COLORS.acsentLight
        };

    return (
        <TouchableOpacity style={{...styles.container,...style, ...colorTheme}}>
            <CustomText weight="semi" style={{...styles.heading, ...fontSize, color: colorTheme.headerText}}>{heading}</CustomText>
            <Seperator color={COLORS.commentsColorLight} distance={9}/>
                <CustomText weight="semi" style={{...styles.date, color: colorTheme.headerText}}>{date}</CustomText>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:14,
        // borderBottomEndRadius: 30,
		// borderBottomStartRadius: 30
    },
    heading:{
        fontSize:20,
        color: COLORS.acsentLight,
        alignSelf:'center',
        marginVertical:10,
    },
    date:{
        fontSize: 14,
        marginVertical: 7,
        textAlign: 'center',
    },
});
