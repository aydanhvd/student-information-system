import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { COLORS, ICONS_LIGHT, GLOBAL_STYLES } from '../../styles';
import { CustomIconBtn } from '../Customs/CustomIconBtn';
import { shareNewPost, selectActivePosts } from '../../redux/posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state)
});

export const HomeScreenField = connect(mapStateToProps, { shareNewPost })(({ activePostID, shareNewPost }) => {
	const [ newPost, setNewPost ] = useState('');

	const sharePostHandler = () => {
		if (newPost.trim() !== '') {
			shareNewPost(activePostID, newPost);
			setNewPost('');
		}
	};
	return (
		<View style={{ ...styles.container, ...GLOBAL_STYLES.shaddowBottum }}>
			<TextInput
				value={newPost}
				onChangeText={setNewPost}
				style={styles.field}
				placeholder="what is on your mind...."
			/>
			<CustomIconBtn icon={ICONS_LIGHT.origamiLight} style={styles.icon} onPress={sharePostHandler} />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.backgroundLight,
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		borderBottomEndRadius: 30,
		borderBottomStartRadius: 30,
	},
	icon: {
		width: 40,
		height: 40
	},
	field: {
		width: '80%',
		height: '100%',
		color: COLORS.backgroundDark
	}
});
