import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { CustomText } from '../index';
import { COLORS } from '../../styles/colors';
import { connect } from 'react-redux';
import { selectGrades, getAndListenGrades } from '../../redux/materials';

const mapStateToProps = (state) => ({
	grades: selectGrades(state)
});


export const GradeShower = connect(mapStateToProps, { getAndListenGrades })(({ getAndListenGrades, grades=[]}) => {

	useEffect(() => {
		const unsub = getAndListenGrades();
		return unsub;
	}, []);
	return (
		<View style={styles.container}>
			<LinearGradient colors={[ '#4375BF', 'transparent' ]} style={styles.gradient} />
		{grades.map((grade) => (
				<View style={styles.gradeSection} key={grade.ID}>
					<CustomText style={styles.gradeSectionName}>{grade.title}</CustomText>
					<CustomText weight="semi" style={styles.gradeSectionGrade}>
						{grade.grade}
					</CustomText>
				</View>	
			))}
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.acsentColor,
		width: '93%',
		height: 85,
		borderRadius: 4,
		flexDirection: 'row',
		marginHorizontal: 14,
		marginVertical: 20,
		paddingHorizontal: 10,
		paddingVertical: 10,
		overflow: 'hidden'
	},
	gradient: {
		...StyleSheet.absoluteFill
	},
	gradeSection: {
		width: '15%',
		alignItems: 'center',
		justifyContent: 'space-between',
		overflow: 'hidden',
		height: '80%',
		marginLeft: 5
	},
	gradeSectionName: {
		color: COLORS.backgroundLight,
		fontSize: 12
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
