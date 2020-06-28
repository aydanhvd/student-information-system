import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { HomeScreenHeader, HomeScreenField, Footer, HomeScreenPosts } from '../components';
import { COLORS } from '../styles/colors';
import { connect } from 'react-redux';
import { getAndListenFeeds, selectFeeds } from '../redux/posts';


const mapStateToProps = (state) => ({
	feeds: selectFeeds(state)
});
export const HomeScreen = connect(mapStateToProps, {
	getAndListenFeeds
})(({ feeds, getAndListenFeeds }) => {
	useEffect(() => {
		const unsubscribe = getAndListenFeeds();
		return unsubscribe;
	}, []);
	return (
			<View style={styles.conainer}>
				<HomeScreenHeader feeds={feeds} />
				<HomeScreenField />
				<HomeScreenPosts />
				<Footer style={styles.footer}/>
			</View>
	);
});
const styles = StyleSheet.create({
	conainer: {
		flex: 1,
		backgroundColor: COLORS.backgroundLight
	},
	footer: {
		position: 'absolute',
		bottom: -0
	}
});
