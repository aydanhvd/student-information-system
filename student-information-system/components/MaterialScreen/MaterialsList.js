import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { selectMaterials } from '../../redux/materials';
import { COLORS } from '../../styles';
import { ClassField } from '../ClassField';


const mapStateToProps = (state) => ({
	materials: selectMaterials(state)
});

export const Materialslist = connect(mapStateToProps)(({ materials }) => {
	return (
		<FlatList
      style={styles.container}
			data={materials}
			renderItem={({ item }) => {
				return (
					<ClassField
						heading={item.title}
						topic={item.link}
						backgroundColor={{ backgroundColor: COLORS.drawerLight }}
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
