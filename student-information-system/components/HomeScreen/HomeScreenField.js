import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import {COLORS, ICONS_LIGHT, GLOBAL_STYLES, ICONS_DARK} from '../../styles';
import { IconBtn } from '../../commons/IconBtn';
import { shareNewPost, selectActivePosts } from '../../redux/posts';
import { connect } from 'react-redux';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	activePostID: selectActivePosts(state),
	darkMode: selectTheme(state)
});

export const HomeScreenField = connect(mapStateToProps, { shareNewPost })(({ activePostID, shareNewPost, darkMode }) => {
	const [ newPost, setNewPost ] = useState('');

	const sharePostHandler = () => {
		if (newPost.trim() !== '') {
			shareNewPost(activePostID, newPost);
			setNewPost('');
		}
	};

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.backgroundDark,
			placeHolderTheme: COLORS.backgroundLight,
			source: ICONS_DARK.origamiDark
		} : {
			backgroundColor: COLORS.backgroundLight,
			placeHolderTheme: COLORS.textColorDark,
			source: ICONS_LIGHT.origamiLight
		};

	return (
		<View style={{ ...styles.container, ...GLOBAL_STYLES.shaddowBottum, ...colorTheme }}>
			<TextInput
				value={newPost}
				onChangeText={setNewPost}
				placeholderTextColor = {colorTheme.placeHolderTheme}
				style={styles.field}
				placeholder="what is on your mind...."
			/>
			<IconBtn icon={colorTheme.source} style={styles.icon} onPress={sharePostHandler} />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		height: 100,
		flexDirection: 'row',
		borderBottomEndRadius: 40,
		borderBottomStartRadius: 40,
	},
	icon: {
		width: 45,
		height: 45,
		alignSelf: 'center',
	},
	field: {
		width: '90%',
		height: '100%',
		color: COLORS.backgroundDark,
		textAlign:"auto",
		flexWrap:'wrap',
	}
});
