import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';

import { COLORS, ICONS_LIGHT, GLOBAL_STYLES } from '../styles';
import { IconBtn } from './IconBtn';
import { shareNewPost, selectActivePosts } from '../redux/posts';
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
			<IconBtn icon={ICONS_LIGHT.origamiLight} style={styles.icon} onPress={sharePostHandler} />
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
		paddingHorizontal: 10
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
