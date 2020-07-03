import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { CustomText } from '../index';
import { COLORS } from '../../styles/colors';

//a temperory dammy data for grades
const transcripts = [
	{
		name: 'HW1',
		grade: 100,
		time: '14.09.2020'
	},
	{
		name: 'HW2',
		grade: 100,
		time: '14.09.2020'
	},
	{
		name: 'HW3',
		grade: 100,
		time: '14.09.2020'
	},
	{
		name: 'Step 1',
		grade: 100,
		time: '14.09.2020'
	},
	{
		name: 'Final',
		grade: 100,
		time: '14.09.2020'
	},
	{
		name: 'AVG',
		grade: 100,
	}
];

export const GradeShower = () => {
	return (
		<View style={styles.container}>
			<LinearGradient colors={['#4375BF', 'transparent' ]} style={styles.gradient} />
			{transcripts.map((transcript) => (
				<View style={styles.gradeSection}>
					<CustomText style={styles.gradeSectionName}>{transcript.name}</CustomText>
					<CustomText weight="semi" style={styles.gradeSectionGrade}>
						{transcript.grade}
					</CustomText>
					<CustomText style={styles.gradeSectionTime}>{transcript.time}</CustomText>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.acsentColor,
		width: '93%',
		height: 85,
		borderRadius: 4,
		flexDirection: 'row',
		marginHorizontal: 14,
		alignSelf: 'center',
		marginVertical: 20,
		paddingHorizontal: 10,
		paddingVertical: 10,
		alignItems: 'center',
		overflow:'hidden',
		
	},
	gradient: {
		...StyleSheet.absoluteFill,
	},
	gradeSection: {
		width: '15%',
		alignItems: 'center',
		justifyContent: 'space-between',
		overflow: 'hidden',
		height: '100%',
		marginLeft: 5
	},
	gradeSectionName: {
		color: COLORS.backgroundLight,
		fontSize: 10
	},
	gradeSectionTime: {
		color: COLORS.backgroundLight,
		fontSize: 10
	},
	gradeSectionGrade: {
		color: COLORS.backgroundLight,
		fontSize: 20
	}
});
