import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { selectMaterials } from '../../redux/materials';
import { COLORS } from '../../styles';
import { ClassField } from '../ClassField';
import {selectTheme} from "../../redux/theme";


const mapStateToProps = (state) => ({
	materials: selectMaterials(state),
	darkMode: selectTheme(state)
});

export const Materialslist = connect(mapStateToProps)(({ materials, darkMode }) => {

	const colorTheme = darkMode
		? {
			backgroundColor: COLORS.headerColor
		} : {
			backgroundColor: COLORS.drawerLight
		};

	return (
		<FlatList
         	keyExtractor={(item)=>item.ID}
      		style={styles.container}
			data={materials}
			renderItem={({ item }) => {
				return (
					<ClassField
						heading={item.title}
						topic={item.link}
						backgroundColor={{ ...colorTheme }}
						textStyles={{ color: COLORS.backgroundLight }}
					/>
				);
			}}
		/>
	);
});

const styles = StyleSheet.create({
   container:{
      paddingVertical:30
   }
});
