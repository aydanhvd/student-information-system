
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {Drawer} from '../components/Drawer';



  export const CustomDrawer = () => {
    return (
        <View style={styles.container}>
            <Drawer />  
          
      </View>
        );
    };


    const styles = StyleSheet.create({
    
    container:{flex:1
   
  

  },
    

    })

