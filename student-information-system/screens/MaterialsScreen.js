import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ClassField } from '../components/ClassField';
import {COLORS} from "../styles";


const data = [
	{
		title: 'Test',
		topic: 'Lorem ipsum dolor sit amet'
	},
	{
		title: 'Test2',
		topic: 'orem ipsum dolor sit amet'
	},
	{
		title: 'Test2',
		topic: 'orem ipsum dolor sit amet'
	}
];

export const MaterialsScreen = () => {
	return (
		<View style={styles.container}>

			<Header title={'Materials'} style={{ position: 'absolute', top: -20 }} />


		<ScrollView>

			{data.map((data) => (

				<ClassField
				key={data.text}
				heading = {data.title}
				topic = {data.topic}
				style = {{ width: '92%', marginHorizontal: 15, marginVertical: 15 }}
				backgroundColor = {{ backgroundColor: COLORS.drawerLight}}
				color={{ color: "white"}}
				/>
			))}
		</ScrollView>
			<Footer style={styles.footer} screen='MaterialsStack'/>
		</View>
	);
};

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
