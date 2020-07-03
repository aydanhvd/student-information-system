import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../styles/colors';
import { CustomText } from '../Customs/CustomText';


export const ProgressBar = ({ color, height, progress, percentage }) => {
	return (
		<View style={styles.margin}>
			<CustomText style={ styles.informationText }>Attendance : {percentage}%</CustomText>
			<View style={[styles.container,{height:height}]}>
				<View style={{...styles.progress, width:`${progress}%`, backgroundColor:color}} />
				{/* width will be changed depending on the progress persantage  it is a plache holder for now*/}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	margin: {
		marginVertical: 3
	},
	container:{
		width:'93%',
		flexDirection: 'row',
		backgroundColor:COLORS.commentsColorLight,
		borderRadius:4,
		alignSelf:'center',
		// overflow:'hidden',
		marginBottom:20,
	},
	progress:{
		borderRadius: 4,
	},
	informationText: {
		color: COLORS.backgroundDark,
		marginLeft: 14,
		fontSize: 14,
		marginBottom: 8
	},
});
