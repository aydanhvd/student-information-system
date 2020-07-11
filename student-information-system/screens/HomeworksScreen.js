import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity , FlatList} from 'react-native';
import { Footer, ClassField } from '../components';
import { Header } from '../commons/Header';
import { COLORS } from '../styles';
import { selectHomeworks } from '../redux/materials';
import { connect } from 'react-redux';
import { HomeWorksList } from '../components/HomeWorksScreen/HomeWorksList';


export const HomeworksScreen =() => {
	return (
		<View style={styles.container}>
			<Header title={'Homeworks'} style={{ position: 'absolute', top: -20 }} />
			<HomeWorksList/>
			<Footer screen="ClassStack" style={styles.footer} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.backgroundLight,
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
