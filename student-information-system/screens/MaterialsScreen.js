import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { Header } from '../commons/Header';
import { Footer } from '../commons/Footer';
import { ClassField } from '../components/ClassField';
import { COLORS } from '../styles';
import { connect } from 'react-redux';
import { getAndListenMaterials } from '../redux/materials';
import { Materialslist } from '../components/MaterialScreen/MaterialsList';
import {selectTheme} from "../redux/theme";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});


export const MaterialsScreen = connect(mapStateToProps, {
	getAndListenMaterials
})(({ getAndListenMaterials, darkMode }) => {
	useEffect(() => {
		getAndListenMaterials();
	}, []);

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark
		} : {
			backgroundColor: COLORS.backgroundLight
		};

	return (
		<View style={{...styles.container, ...colorTheme}}>
			<Header title={'Materials'} style={{ position: 'absolute', top: -20 }} />
			<Materialslist/>
			<Footer style={styles.footer} screen="MaterialsStack" />
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
