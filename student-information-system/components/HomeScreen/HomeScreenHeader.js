import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { COLORS, GLOBAL_STYLES } from '../../styles';
import { CustomText } from '../Customs/CustomText';
import { setActivePosts, selectActivePosts } from '../../redux/posts';
import { selectAuthGroup } from '../../redux/auth';

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state),
	groupID: selectAuthGroup(state) //ID of the groups user
});

export const HomeScreenHeader = connect(mapStateToProps, {
	setActivePosts
})(({ feeds, setActivePosts, activePostID, groupID }) => {
	const filteredFeed = feeds.filter((feed) => feed.ID === groupID || feed.feed === 'News');
	return (
		<View style={styles.container}>
			{filteredFeed.map((feed) => (
				<TouchableOpacity style={styles.btn} onPress={() => setActivePosts(feed.ID)} key={feed.id}>
					<CustomText
						style={{
							...styles.btnText,
							color: activePostID === feed.ID ? COLORS.acsentColor : COLORS.acsentLight
						}}
					>
						{feed.feed}
					</CustomText>
					{activePostID === feed.ID && <View style={styles.indicator} />}
				</TouchableOpacity>
			))}
		</View>
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
		marginHorizontal: 25
	},
	indicator: {
		position: 'absolute',
		bottom: -8,
		marginTop: 10,
		backgroundColor: COLORS.acsentColor,
		width: 50,
		height: 3,
		alignSelf: 'center'
	}
});

