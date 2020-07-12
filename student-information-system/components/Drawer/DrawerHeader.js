import React, { useState } from 'react';
import { Toggle } from '@ui-kitten/components';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ICONS_LIGHT } from '../../styles';
import {setTheme} from "../../redux/darkMode";
import {connect} from "react-redux";
import {getAndListenGroup} from "../../redux/materials";

const mapStateToProps = (state) => ({
	onSelectTheme: setTheme
});

export const DrawerHeader = connect(mapStateToProps, { setTheme })(({ navigation , setTheme }) => {
	const [ isEnabled, setIsEnabled ] = useState(false);

	const toggleSwitch = () => {
		setIsEnabled((previousState) => !previousState)
	};
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
						<Image resizeMode="cover" style={styles.userSettings} source={ICONS_LIGHT.settingsWhite} />
					</TouchableOpacity>
					<Toggle style={styles.switch} onValueChange={toggleSwitch} value={isEnabled} />
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
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	userSettings: {
		width: 22,
		height: 22,
		marginLeft: -35
	},
	switch: {
		marginRight: -35
	}
});
