import React from 'react'
import { View,StyleSheet } from 'react-native'
import { COLORS } from '../styles/colors'
import { CustomText } from './CustomText'

export const Information=()=>{
   return(
      <View style={styles.information}>
               <CustomText style={styles.informationText}>Course teacher</CustomText>
               <CustomText
                  weight="semi"
                  style={{ ...styles.informationText, color: COLORS.drawerLight, fontSize: 18 }}
               >
                  Ph.D Rakib Afandiyev
               </CustomText>
			</View>
   )
}

const styles = StyleSheet.create({
   information: {
		marginHorizontal: 15,
		marginTop: 17
	},
	informationText: {
		color: COLORS.backgroundDark,
		marginBottom: 5,
		fontSize: 12
   },
});