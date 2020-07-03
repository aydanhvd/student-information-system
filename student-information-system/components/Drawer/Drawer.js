import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { COLORS } from "../../styles";
import {DrawerHeader} from "./DrawerHeader";
import {DrawerBody} from "./DrawerBody";
import {DrawerFooter} from "./DrawerFooter";
import {useNavigation} from "@react-navigation/native";

export const Drawer = () => {

    return (

          <SafeAreaProvider>
              <View style={styles.container}>
                    <LinearGradient
                        colors={[ COLORS.drawerLight, COLORS.acsentColor ]}
                        style={{ ...StyleSheet.absoluteFill }}
                        enabled
                        keyboardVerticalOffset={100}
                    />
                    <DrawerHeader />
                    <DrawerBody/>
                    <DrawerFooter />
                </View>
          </SafeAreaProvider>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 250
  },
  gradient: {
    ...StyleSheet.absoluteFill,
  },
});