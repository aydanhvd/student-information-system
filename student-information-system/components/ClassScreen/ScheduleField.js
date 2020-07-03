import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { CustomText } from '../Customs/CustomText';
import { CustomSeperator } from '../Customs/CustomSeperator';

export const ScheduleField = ({ heading, date, topic , style , fontSize}) => {
    return (
        <TouchableOpacity style={{...styles.container,...style}}>
            <CustomText weight="semi" style={{...styles.heading, ...fontSize}}>{heading}</CustomText>
            <CustomSeperator color={COLORS.commentsColorLight} distance={9}/>
                <CustomText weight="semi" style={styles.date}>{date}</CustomText>
        </TouchableOpacity>
    );
};

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
        color: COLORS.acsentLight,
        textAlign: 'center',
    },
});
