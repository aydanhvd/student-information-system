import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { COLORS } from '../styles/colors';
import { CustomText } from './CustomText';
import { getAndListenFeeds, selectFeeds } from '../redux/posts';

const mapStateToProps = (state) => ({
	feeds: selectFeeds(state)
	//Todo make it so 
});

export const HomeScreenHeader = connect(mapStateToProps, {
	getAndListenFeeds
})(({ feeds, getAndListenFeeds }) => {
	const [ indicater, setIndicater ] = useState('News'); //indiator is the line under each group name
	//Todo update onPress part of the TouchableOpacity
	useEffect(() => {
		const unsubscribe = getAndListenFeeds();
		return unsubscribe;
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={styles.container}
				data={feeds} //BTNS SHOULD BE FILTERED ACCORDING TO USER ACSESS
				renderItem={({ item: { feed } }) => {
					const isActive = feed === indicater;
					return (
						<TouchableOpacity
							style={styles.btn}
							onPress={() => {
								setIndicater(feed);
							}}
						>
							<CustomText style={{ ...styles.btnText }}>{feed}</CustomText>
							{isActive && <View style={styles.indicator} />}
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.backgroundLight,
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	btnText: {
		color: COLORS.acsentColor,
		fontSize: 18,
		marginHorizontal: 17
	},
	indicator: {
		position: 'absolute',
		bottom: -20,
		marginTop: 10,
		backgroundColor: COLORS.acsentColor,
		width: 50,
		height: 3,
		alignSelf: 'center'
	}
});
