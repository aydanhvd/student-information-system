import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { selectHomeworks } from '../../redux/materials';
import { connect } from 'react-redux';
import { ClassField } from '../ClassField';
import { COLORS } from '../../styles';
import { selectTheme } from '../../redux/theme';

const mapStateToProps = (state) => ({
	homeworks: selectHomeworks(state),
	darkMode: selectTheme(state)
});

export const HomeWorksList = connect(mapStateToProps)(({ homeworks, darkMode }) => {
	const colorTheme = darkMode
		? {
				headerBackground: COLORS.acsentLight,
				headerText: COLORS.backgroundLight
			}
		: {
				headerBackground: COLORS.commentsColorLight,
				headerText: COLORS.acsentLight
			};

	return (
		<FlatList
			style={styles.container}
         keyExtractor={(item)=>item.ID}
			data={homeworks}
			renderItem={({ item }) => {
				return (
					<ClassField
						heading={item.title}
						topic={item.link}
						backgroundColor={{ backgroundColor: colorTheme.headerBackground }}
						textStyles={{ color: colorTheme.headerText }}
					/>
				);
			}}
		/>
	);
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		marginBottom: 50
	}
});
