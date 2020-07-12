import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomText } from '../index';
import { COLORS, ICONS_LIGHT } from '../../styles';
import { selectTheme } from '../../redux/theme';
import { connect } from 'react-redux';
import { dark } from '@eva-design/eva';

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const DrawerFooter = connect(mapStateToProps)(({ navigation, darkMode }) => {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<TouchableOpacity style={styles.feedback} onPress={() => navigation.navigate('Feedback')}>
					<Image source={ICONS_LIGHT.feedbackWhite} style={styles.feedbackIcon} />
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
	feedbackIcon: {
		width: 30,
		height: 30,
		marginRight: 30
	},
	feedbackText: {
		fontSize: 20
	}
});
