import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/colors';
import { CustomText } from './CustomText';
import { Seperator } from './Seperator';

export const ClassField = ({ heading, date, topic , style , fontSize}) => {
	return (
		<TouchableOpacity style={{...styles.container,...style}}>
			<CustomText weight="semi" style={{...styles.heading, ...fontSize}}>{heading}</CustomText>
         <Seperator color={COLORS.backgroundDark} distance={9}/>
         <View style={styles.row}>
             <CustomText weight="semi" style={styles.topic}>{topic}</CustomText>
			 <CustomText weight="semi" style={styles.date}>{date}</CustomText>
         </View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
   container:{
      borderWidth:1,
      borderColor:COLORS.backgroundDark,
      borderRadius:4,
      paddingHorizontal:14,
   },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
   heading:{
      fontSize:20,
      color: COLORS.backgroundDark,
      alignSelf:'center',
      marginVertical:10,
   },
   date:{
      fontSize: 14,
       marginVertical: 7,
       color: COLORS.acsentColor

   },
   topic:{
      fontSize:13,
       marginVertical: 7,

   }
});
