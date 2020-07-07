import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { COLORS } from '../../styles/colors';
import { CustomText } from '../Customs/CustomText';
import { setActivePosts, selectActivePosts} from '../../redux/posts';
import { GLOBAL_STYLES } from '../../styles';
import { selectAuthGroup } from '../../redux/auth';

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state),
	group: selectAuthGroup(state) //ID of the groups user
});

export const HomeScreenHeader = connect(mapStateToProps, {
	setActivePosts
})(({ feeds, setActivePosts, activePostID, group }) => {
	return (
		<FlatList
			contentContainerStyle={styles.container}
			data={feeds} //BTNS SHOULD BE FILTERED ACCORDING TO USER ACSESS
			renderItem={({ item }) => {
				return (
					<>
						{(item.ID === group || item.feed === 'News') && (
							<TouchableOpacity
								style={styles.btn}
								onPress={() => {
									setActivePosts(item.ID);
								}}
							>
								<CustomText
									style={{
										...styles.btnText,
										color: activePostID === item.ID ? COLORS.acsentColor : COLORS.acsentLight
									}}
								>
									{item.feed}
								</CustomText>
								{/* {(activePostID === item.ID) ? <View style={styles.indicator} /> : <View/>} */}
								{/* i dont know why but indicator doesnt work */}
							</TouchableOpacity>						
						)}
						
					</>
				);
			}}
		/>
	);
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.backgroundLight,
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		overflow:'hidden',
		justifyContent: 'flex-end'
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
