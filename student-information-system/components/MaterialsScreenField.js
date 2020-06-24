import React,{useState} from "react";
import { Text,StyleSheet,View,ScrollView,TouchableOpacity} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {Header} from '../components/Header'
import {CustomText} from '../components/CustomText';
import { COLORS } from '../styles/colors';

export const MaterialsScreenField = ({title,text,style,fontSize}) => {
    return (
    
        <TouchableOpacity style={{...styles.container,...style}}>
        <View style={styles.headerContainer}>
        <CustomText style={{...styles.heading, ...fontSize}}>{title}</CustomText>
        </View>
     <View style={styles.row}>
         <CustomText style={styles.text}>{text}</CustomText>
        
     </View>
    </TouchableOpacity>
    );
  };
  const styles = StyleSheet.create({
    container:{
        width:350,
       
        borderRadius: 4,
        
 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    
        marginLeft:20,
    },
     headerContainer:{
        
         borderTopStartRadius: 4,
         borderTopEndRadius: 4,
         backgroundColor: COLORS.drawerLight,
         height:27
        
     },
     row: {
        backgroundColor: COLORS.backgroundLight,
         justifyContent: 'space-between',
         paddingHorizontal: 14,
        height:90
     },
    heading:{
        alignItems:"center",
        justifyContent:"center",
       fontSize:14,
       color: COLORS.backgroundLight,
    
        marginHorizontal: 14,
    },
      text:{
       fontSize:13,
        marginVertical: 10,
 
    }
   

   }  );
  
  