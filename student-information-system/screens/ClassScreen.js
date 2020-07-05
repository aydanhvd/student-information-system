import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Footer, GradeShower, ProgressBar, ClassField, Header, ScheduleContainer, Information } from '../components';
import { COLORS } from '../styles/colors';
import { connect } from 'react-redux';
import { selectGroup, getAndListenHomeWorks } from '../redux/materials';

const mapStateToProps = (state) => ({
	groupData: selectGroup(state)
});

export const ClassScreen = connect(mapStateToProps, {
	getAndListenHomeWorks
})(({ navigation, groupData, getAndListenHomeWorks }) => {
	useEffect(() => {
		const unsub = getAndListenHomeWorks();
		return unsub;
	}, []);
	return (
		<View style={styles.container}>
			<Header title={`Group ${groupData.title}`} />
			<Information />
			<GradeShower />
			<ClassField
				heading="Homeworks"
				topic="Your assingned homeworks"
				style={{ width: '92%', marginHorizontal: 15, marginVertical: 15 }}
				color={{ color: COLORS.acsentLight }}
				onPress={() => navigation.navigate('Homeworks')}
			/>
			<ScheduleContainer />
			<ProgressBar color={COLORS.acsentColor} height={10} progress={49} percentage={17} />
			<Footer style={styles.footer} screen="ClassStack" />
		</View>
	);
});

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
