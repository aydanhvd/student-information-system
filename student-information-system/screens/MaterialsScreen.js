import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ClassField } from '../components/ClassField';
import {COLORS} from "../styles";
import {connect} from "react-redux";
import {
	getAndListenMaterials,
	selectActiveGroup,
	selectMaterials, setActiveGroup
} from "../redux/materials";


//materials in material screen
const mapStateToProps = (state) => ({
    materials: selectMaterials(state),
    activeGroup: selectActiveGroup(state),
});
//posts in home screen
export const MaterialsScreen = connect(mapStateToProps, {
    getAndListenMaterials
})(({ getAndListenMaterials, materials, activeGroup  }) => {
    useEffect(
        () => {
            getAndListenMaterials(activeGroup)
        },
        []
    );

	return (
		<View style={styles.container}>
			<Header title={'Materials'} style={{ position: 'absolute', top: -20 }} />

			<ScrollView>

				<FlatList
					data={materials.slice(0).reverse()}
					renderItem={({ title }) => {
						console.log(materials)
						return <ClassField
							topic = {title}
							style = {{ width: '92%', marginHorizontal: 15, marginVertical: 15 }}
							backgroundColor = {{ backgroundColor: COLORS.drawerLight}}
							color={{ color: "white"}}
						/>;
					}}
				/>
			</ScrollView>

			<Footer style={styles.footer} screen='MaterialsStack'/>

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
