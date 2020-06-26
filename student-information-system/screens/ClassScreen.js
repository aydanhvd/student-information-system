import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Footer, GradeShower, ProgressBar, ClassField, Header, ScheduleContainer, Information } from '../components';
import { COLORS } from '../styles/colors';
import {color} from "react-native-reanimated";

export const ClassScreen = () => {
	return (
		<View style={styles.container}>
			<Header title="Mobile dev.1" />
			{/* a plachholder title for now */}
			<Information />
			<GradeShower />
			<ClassField
				heading="Homeworks"
				date="14.20.2020"
				topic="To do app"
				style={{ width: '92%', marginHorizontal: 15, marginVertical: 15 }}
				color={{ color: COLORS.acsentLight}}
			/>
			<ScheduleContainer />
			<ProgressBar color={COLORS.acsentColor} height={10} progress={49} percentage={17} />
			<Footer style={styles.footer} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.backgroundLight
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
