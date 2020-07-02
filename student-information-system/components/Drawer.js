import React, {useState,useEffect} from "react";
import { Switch} from 'react-native'
import { StyleSheet, View, Image, TouchableOpacity,FlatList,ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { CustomText } from "../components";
import DefaultAvatarImg from "../assets/icons/light-theme/userLight.png";
import logout from '../assets/icons/light-theme/logoutLight.png';
import settings from '../assets/icons/light-theme/settingsLight.png';
import { COLORS } from "../styles";


export const Drawer = (props) => {


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    
  <SafeAreaProvider>
  <View {...props} style={styles.container}>
  <LinearGradient
				colors={[ COLORS.drawerLight, COLORS.acsentColor ]}
				style={{ ...StyleSheet.absoluteFill }}
				enabled
				keyboardVerticalOffset={100}
			/>

      <DrawerContentScrollView style={styles.container}>
       <View style={styles.header}>
      <Image
       resizeMode="cover"
       style={styles.userSettings}
       source={settings}
      />
      <Switch
     
   
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
      </View>
        <TouchableOpacity style={styles.closeIcon}>
          <Image style={styles.closeIconImg} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            resizeMode="cover"
            style={styles.userImg}
            source={DefaultAvatarImg}
          />
          <CustomText style={styles.username}>John</CustomText>
        </View>
        <TouchableOpacity style={styles.drawerLink}>
          
          <CustomText weight="semi" style={styles.drawerTitle}>
           group:
          </CustomText>
        </TouchableOpacity>
         
      
        <TouchableOpacity style={styles.drawerLink}>
          
          <CustomText weight="semi" style={styles.drawerTitle}>
           advicer:
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerLogout}>
         
          <CustomText weight="semi" style={styles.drawerTitle}>
            Log Out
          </CustomText>
          <Image
            resizeMode="cover"
            style={styles.userIm}
            source={logout}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.feedback}>
        
        
        <CustomText weight='semi' style={styles.feedbackText}>Feedback</CustomText>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:272
  },
  header:{
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"
  },
  gradient: {
    ...StyleSheet.absoluteFill,
  },
  userInfo: {
    paddingTop: 96,
    paddingBottom: 13,
    alignItems: "center",
  },
  userImg: {
    width: 106,
    height: 114,
    borderRadius: 35,
    overflow: "hidden",
  },
  userSettings:{
      width:22,
      height:22,
     
  },
  username: {
    fontSize: 12,
    marginTop: 6,
    color: COLORS.backgroundLight,
  },
  drawerLink: {
    paddingLeft: 24,
    paddingTop:14,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: "hidden",
  },
  drawerLogout: {
    paddingTop:36,
    paddingLeft: 87,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: "hidden",
  },
  drawerTitle: {
    fontSize: 14,
    color: COLORS.backgroundLight
  },
  userIm:{
     marginTop:17,
     marginLeft:16,
     width:22,
     height:22,
   
  },
  switch:{
     
     borderColor:COLORS.backgroundLight
  },
  feedback:{
    paddingTop:36,
    paddingLeft: 87,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: "hidden"
     
  },
  
  feedbackText:{
      color:COLORS.backgroundLight
  }
});