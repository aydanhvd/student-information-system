import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../styles/colors';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectAuthAbsence, getAndListenAbcence } from '../../redux/auth';
import { selectGroup } from '../../redux/materials';

const mapStateToProps = (state) => ({
	abcenceMark: selectAuthAbsence(state),
	allowedAbcence: selectGroup(state).attendenceLimit
});

export const ProgressBar = connect(mapStateToProps, {
	getAndListenAbcence
})(({ height, abcenceMark, allowedAbcence, getAndListenAbcence }) => {
	const attencenceprogress = Math.ceil(( abcenceMark / allowedAbcence )* 100);
	useEffect(() => {
		const unsub = getAndListenAbcence();
		return unsub
	}, []);
	return (
		<View style={styles.margin}>
			<CustomText style={styles.informationText}>Attendance : {attencenceprogress}% </CustomText>
			<View style={[ styles.container, { height: height } ]}>
				<View
					style={{ ...styles.progress, width: `${attencenceprogress}%`, backgroundColor: COLORS.drawerLight }}
				/>
			</View>
		</View>
	);
});
const styles = StyleSheet.create({
	margin: {
		marginVertical: 3
	},
	container: {
		width: '93%',
		flexDirection: 'row',
		backgroundColor: COLORS.commentsColorLight,
		borderRadius: 4,
		alignSelf: 'center',
		// overflow:'hidden',
		marginBottom: 20
	},
	progress: {
		borderRadius: 4
	},
	informationText: {
		color: COLORS.backgroundDark,
		marginLeft: 14,
		fontSize: 14,
		marginBottom: 8
	}
});
