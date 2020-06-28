import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/colors';
import { CustomText } from './CustomText';

export const ClassField = ({ heading, date, topic , style , fontSize, backgroundColor, color}) => {
	return (
		<TouchableOpacity style={{...styles.container,...style}}>
            <View style={{...styles.headerContainer, ...backgroundColor}}>
			<CustomText style={{...styles.heading, ...fontSize, ...color}}>{heading}</CustomText>
            </View>
         <View style={styles.row}>
             <CustomText style={styles.topic}>{topic}</CustomText>
			 <CustomText style={styles.date}>{date}</CustomText>
         </View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
   container:{
       minHeight: 90,
       borderRadius: 4,
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
    headerContainer:{
        borderColor: COLORS.backgroundDark,
        borderTopStartRadius: 4,
        borderTopEndRadius: 4,
        backgroundColor: COLORS.commentsColorLight
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
    },
   heading:{
      fontSize:20,
      marginVertical: 10,
       marginHorizontal: 14,
   },
   date:{
      fontSize: 14,
       marginVertical: 10,
       color: COLORS.acsentLight

   },
   topic:{
      fontSize:13,
       marginVertical: 10,

   }
});
