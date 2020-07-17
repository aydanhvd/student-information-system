import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Footer  } from '../components';
import { Header } from '../commons/Header';
import { COLORS } from '../styles';
import { connect } from 'react-redux';
import { HomeWorksList } from '../components/HomeWorksScreen/HomeWorksList';
import {selectTheme} from "../redux/theme";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});


export const HomeworksScreen =connect(mapStateToProps, {})(({ darkMode}) => {

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark
		} : {
			backgroundColor: COLORS.backgroundLight
		};

	return (
		<View style={{...styles.container, ...colorTheme}}>
			<Header title={'Homeworks'} style={{ position: 'absolute', top: -20 }} />
			<HomeWorksList/>
			<Footer screen="ClassStack" style={styles.footer} />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
