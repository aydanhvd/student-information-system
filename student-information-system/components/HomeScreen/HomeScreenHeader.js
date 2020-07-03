import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { COLORS } from '../../styles/colors';
import { CustomText } from '../Customs/CustomText';
import { setActivePosts, selectActivePosts, selectPosts } from '../../redux/posts';
import {GLOBAL_STYLES} from "../../styles";

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state),
});

export const HomeScreenHeader = connect(mapStateToProps, {
	setActivePosts
})(({ feeds, setActivePosts, activePostID }) => {
	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={styles.container}
				data={feeds} //BTNS SHOULD BE FILTERED ACCORDING TO USER ACSESS
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							style={styles.btn}
							onPress={() => {
								setActivePosts(item.ID);
							}}
						>
							<CustomText
								style={{
									...styles.btnText,
									color:(activePostID === item.ID ) ? COLORS.acsentColor : COLORS.acsentLight
								}}
							>
								{item.feed}
							</CustomText>
							{(activePostID === item.ID ) && <View style={styles.indicator} />}
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
		justifyContent: 'space-between',
	},
	btnText: {
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
