import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomText } from '../index';
import {COLORS, ICONS_DARK, ICONS_LIGHT} from '../../styles';
import { selectTheme } from '../../redux/theme';
import { connect } from 'react-redux';
import { dark } from '@eva-design/eva';
import {FeedbackIcon} from "../../commons/icons/FeedbackIcon";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const DrawerFeedback = connect(mapStateToProps)(({ navigation, darkMode }) => {

	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<TouchableOpacity style={styles.feedback} onPress={() => navigation.navigate('Feedback')}>
					<FeedbackIcon/>
					<CustomText
						style={{
							...styles.feedbackText,
							color: darkMode ? COLORS.backgroundDark : COLORS.backgroundLight
						}}
					>
						Feedback
					</CustomText>
				</TouchableOpacity>
			</View>
		</SafeAreaProvider>
	);
});

const styles = StyleSheet.create({
	container: {
		marginTop: 160
	},
	feedback: {
		flexDirection: 'row',
		paddingVertical: 10,
		justifyContent: 'center'
	},
	feedbackText: {
		fontSize: 20
	}
});
