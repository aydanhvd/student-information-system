import React from 'react';
import { Toggle } from '@ui-kitten/components';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, ICONS_LIGHT } from '../../styles';
import { toggleTheme, selectTheme } from '../../redux/theme';
import { connect } from 'react-redux';
import { CustomText } from '../../commons/CustomText';

const mapStateToProps = (state) => ({
	theme: selectTheme(state)//true if dark mode false if light
});

export const DrawerHeader = connect(mapStateToProps, { toggleTheme })(({ navigation, theme, toggleTheme }) => {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
						<Image resizeMode="cover" style={styles.userSettings} source={ICONS_LIGHT.settingsWhite} />
					</TouchableOpacity>
					<View style={styles.toggleContainer}>
						<Toggle
							style={styles.switch}
							onChange={() => toggleTheme(!theme)}
							checked={theme}
							status="control"
						/>
						<CustomText
							weight="semi"
							style={{ color: theme ? COLORS.backgroundDark : COLORS.backgroundLight }}
						>
							dark mode
						</CustomText>
					</View>
				</View>
			</View>
		</SafeAreaProvider>
	);
});

const styles = StyleSheet.create({
	container: {
		marginTop: 25
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	userSettings: {
		width: 22,
		height: 22,
		marginLeft: 20
	},
	switch: {
		marginBottom: 5
	},
	toggleContainer: {
		marginRight: 10
	}
});
