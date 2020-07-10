import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { COLORS, GLOBAL_STYLES } from '../../styles';
import { CustomText } from '../Customs/CustomText';
import { setActivePosts, selectActivePosts } from '../../redux/posts';
import { selectAuthGroup } from '../../redux/auth';
import {GLOBAL_STYLES} from "../../styles/globalStyles";

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state),
	groupID: selectAuthGroup(state) //ID of the groups user
});

export const HomeScreenHeader = connect(mapStateToProps, {
	setActivePosts
})(({ feeds, setActivePosts, activePostID, groupID }) => {
	const filteredFeed = feeds.filter((feed) => feed.ID === groupID || feed.feed === 'News');
	return (
		<FlatList
			contentContainerStyle={{ ...styles.container, ...GLOBAL_STYLES.shaddowBottum }}
			data={filteredFeed} //BTNS SHOULD BE FILTERED ACCORDING TO USER ACSESS
			renderItem={({ item }) => {
				return (
					<TouchableOpacity style={styles.btn} onPress={() => setActivePosts(item.ID)}>
						<CustomText
							style={{
								...styles.btnText,
								color: activePostID === item.ID ? COLORS.acsentColor : COLORS.acsentLight
							}}
						>
							{item.feed}
						</CustomText>
						{activePostID === item.ID && <View style={styles.indicator} />}
					</TouchableOpacity>
				);
			}}
		/>
	);
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.backgroundLight,
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
		overflow: 'hidden',
		justifyContent: 'space-between'
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
