import React from "react";
import { StyleSheet, View, Text,ScrollView } from "react-native";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MaterialsScreenField } from "../components/MaterialsScreenField";


const data = 
  [
   {
     title: 'Test',
     topic: 'Lorem ipsum dolor sit amet',
   },
   {
     title: 'Test2',
     topic: 'orem ipsum dolor sit amet',
   },
   {
    title: 'Test2',
    topic: 'orem ipsum dolor sit amet',
  },

 
  ];


export const MaterialsScreen=()=> {
  return ( 
    
  
   <View style={styles.container}>
     
       <Header title={"Materials"} 
       style={{}}/>
  
     {data.map((data) =>(
  
       <MaterialsScreenField
       key={data.text}
       fontsize={{fontsize:20}}
       title={data.title}
       text={data.topic}
       style={{ width: '92%',  marginVertical: 14,top:70 }}
     />  
     ))}

      <Footer style={styles.footer}/>
   </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingVertical:20,
  },
  footer:{
    position:'absolute',
    bottom:0
  }

 
 });










