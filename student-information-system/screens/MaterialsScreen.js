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



//
// import React, {useState} from 'react';
// import {StyleSheet, View, TextInput, Image, TouchableOpacity} from 'react-native';
// import { COLORS } from '../styles/colors';
// import {ICONS_LIGHT} from "../styles";
// import {connect} from "react-redux";
// import {CustomSeperator, CustomText} from "../components";
// import {createMaterial, selectGroups,} from "../redux/materials";
//
// const mapStateToProps = (state) => ({
// 	groups: selectGroups(state)
// });
//
// export const MaterialsScreen = connect(mapStateToProps, { createMaterial })(({ activePostID, createMaterial }) => {
// 	const [ newPost, setNewPost ] = useState('');
//     const [ newLink, setNewLink ] = useState('');
//     const sharePostHandler = () => {
// 		if (newPost.trim() !== '' && newLink.trim() !== '') {
// 			createMaterial(activePostID, newPost, newLink);
// 			setNewPost('');
//             setNewLink('');
//
//         }
// 	};
//     return (
//         <>
//             <View style={styles.container}>
//                 <Image source={ICONS_LIGHT.survey} style={styles.icon} />
//                 <CustomText weight='bold' style={styles.heading}>Share your opinions about this app, please!</CustomText>
//                 <CustomSeperator distance={17} color={COLORS.commentsColorLight} />
//                 <View style={styles.textInput}>
//                     <TextInput
//                         placeholder = 'Type your thoughts...'
//                         onChangeText={setNewPost}
//                         value={newPost}
//                         style={styles.text}
//                     />
//                     <TextInput
//                         placeholder = 'Type your thoughts...'
//                         onChangeText={setNewLink}
//                         value={newLink}
//                         style={styles.text}
//                     />
//
//                     <TouchableOpacity style={styles.touchIcon} onPress={sharePostHandler} >
//                         <Image source={ICONS_LIGHT.sendLight} style={styles.sendIcon}/>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//
//         </>
//     );
// });
// const styles = StyleSheet.create({
//     container: {
//         paddingHorizontal: 17,
//         backgroundColor: COLORS.backgroundLight,
//         marginTop: 5
//     },
//     icon: {
//         width: 120,
//         height: 120,
//         alignSelf: 'center',
//         marginVertical: 15,
//     },
//     heading: {
//         fontSize: 20,
//         color: COLORS.acsentColor,
//         textAlign: 'center',
//         marginBottom: 23,
//         marginHorizontal: 10,
//     },
//     textInput: {
//         height: 250,
//         borderRadius: 4,
//         marginVertical: 25,
//         backgroundColor: COLORS.backgroundLight,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 3
//         },
//         shadowOpacity: 0.46,
//         shadowRadius: 11.14,
//         elevation: 17
//     },
//     text: {
//         paddingVertical: 15,
//         paddingHorizontal: 15,
//         flexWrap: 'wrap'
//     },
//     sendIcon: {
//         width: 30,
//         height: 30,
//         alignSelf: 'center',
//         position: 'absolute',
//         right: 15,
//     },
//     touchIcon: {
//         marginTop: -35,
//     }
// });
