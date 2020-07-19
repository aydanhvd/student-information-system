import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import {COLORS, ICONS_LIGHT, GLOBAL_STYLES, ICONS_DARK} from '../../styles';
import { IconBtn } from '../../commons/IconBtn';
import { shareNewPost, selectActivePosts } from '../../redux/posts';
import { connect } from 'react-redux';
import {selectTheme} from "../../redux/theme";
import {OrigamiIcon} from "../../commons/icons/OrigamiIcon";

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
		} : {
			backgroundColor: COLORS.backgroundLight,
			placeHolderTheme: COLORS.textColorDark,
		};

	return (
		<View style={{ ...styles.container, ...GLOBAL_STYLES.shaddowBottum, ...colorTheme }}>
			<TextInput
				value={newPost}
				onChangeText={setNewPost}
				placeholderTextColor = {colorTheme.placeHolderTheme}
				style={{...styles.field, color: colorTheme.placeHolderTheme}}
				placeholder="what is on your mind...."
			/>
			<OrigamiIcon style={styles.icon} onPress={sharePostHandler} />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		height: 100,
		flexDirection: 'row',
		borderBottomEndRadius: 50,
		borderBottomStartRadius: 50,
	},
	icon: {
		width: 45,
		height: 45,
		alignSelf: 'center',
	},
	field: {
		width: '90%',
		height: '100%',
		textAlign:"auto",
		flexWrap:'wrap',
	}
});
