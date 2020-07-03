import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { COLORS, ICONS_LIGHT } from '../styles';
import { IconBtn } from './IconBtn';

export const SearchBar = () => {
	return (
		<View style={styles.container}>
			<TextInput style={styles.searchBar} placeholder="search" placeholderTextColor={COLORS.textColorDark} />
			<IconBtn icon={ICONS_LIGHT.search} style={styles.searchIcon} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: COLORS.borderLight,
		borderRadius: 4,
		height: 32,
		alignItems: 'center',
		paddingHorizontal: 11,
		paddingVertical: 8,
		marginTop: 8,
		marginBottom: 13
	},
	searchBar: {
		width: '95%',
		height: '100%'
	},
	searchIcon: {
		width: 18,
		height: 18
	}
});
