import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { COLORS, GLOBAL_STYLES } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { setActivePosts, selectActivePosts } from '../../redux/posts';
import { selectAuthGroup } from '../../redux/auth';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state),
	groupID: selectAuthGroup(state), //ID of the groups user
	darkMode: selectTheme(state)
});

export const HomeScreenHeader = connect(mapStateToProps, {
	setActivePosts
})(({ feeds, setActivePosts, activePostID, groupID, darkMode }) => {
	const filteredFeed = feeds.filter((feed) => feed.ID === groupID || feed.feed === 'News');

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark,
			textTheme: COLORS.backgroundLight,
			activeTextTheme: COLORS.drawerDark
		} : {
			backgroundColor: COLORS.backgroundLight,
			textTheme: COLORS.acsentLight,
			activeTextTheme: COLORS.acsentColor
		};

	return (
		<View style={{...styles.container, ...colorTheme}}>
			{filteredFeed.map((feed) => (
				<TouchableOpacity style={styles.btn} onPress={() => setActivePosts(feed.ID)} key={feed.id}>
					<CustomText
						style={{
							...styles.btnText,
							color: activePostID === feed.ID ? colorTheme.activeTextTheme : colorTheme.textTheme
						}}
					>
						{feed.feed}
					</CustomText>
					{activePostID === feed.ID && <View style={styles.indicator} backgroundColor={colorTheme.activeTextTheme}/>}
				</TouchableOpacity>
			))}
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
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
		width: 50,
		height: 3,
		alignSelf: 'center'
	}
});

