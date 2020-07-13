import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../styles/colors';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { selectAuthAbsence, getAndListenAbcence } from '../../redux/auth';
import { selectGroup } from '../../redux/materials';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	abcenceMark: selectAuthAbsence(state),
	allowedAbcence: selectGroup(state).attendenceLimit,
	darkMode: selectTheme(state)
});

export const ProgressBar = connect(mapStateToProps, {
	getAndListenAbcence
})(({ height, abcenceMark, allowedAbcence, getAndListenAbcence, darkMode }) => {
	const attencenceprogress = Math.ceil(( abcenceMark / allowedAbcence )* 100);
	useEffect(() => {
		const unsub = getAndListenAbcence();
		return unsub
	}, []);

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.drawerDark
		} : {
			backgroundColor: COLORS.drawerLight
		};

	return (
		<View style={styles.margin}>
			<CustomText style={styles.informationText}>Attendance : {attencenceprogress}% </CustomText>
			<View style={[ styles.container, { height: height } ]}>
				<View
					style={{ ...styles.progress, width: `${attencenceprogress}%`, ...colorTheme }}
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
