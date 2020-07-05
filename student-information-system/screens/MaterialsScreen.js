import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ClassField } from '../components/ClassField';
import { COLORS } from '../styles';
import { connect } from 'react-redux';
import { getAndListenMaterials, selectMaterials } from '../redux/materials';
import { selectAuthGroup } from '../redux/auth';

//materials in material screen
const mapStateToProps = (state) => ({
	materials: selectMaterials(state),
	groupID: selectAuthGroup(state)
});
//posts in home screen
export const MaterialsScreen = connect(mapStateToProps, {
	getAndListenMaterials
})(({ getAndListenMaterials, materials, groupID }) => {
	useEffect(() => {
		getAndListenMaterials(groupID);
	}, []);

	return (
		<View style={styles.container}>
			<Header title={'Materials'} style={{ position: 'absolute', top: -20 }} />

			<ScrollView>
				<FlatList
					data={materials}
					renderItem={({ item }) => {
						console.log(item);
						return (
							<ClassField
								heading={item.title}
								topic={item.link}
								style={{ width: '92%', marginHorizontal: 15, marginVertical: 15 }}
								backgroundColor={{ backgroundColor: COLORS.drawerLight }}
								color={{ color: 'white' }}
							/>
						);
					}}
				/>
			</ScrollView>

			<Footer style={styles.footer} screen="MaterialsStack" />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.backgroundLight
	},
	footer: {
		position: 'absolute',
		bottom: 0
	}
});
