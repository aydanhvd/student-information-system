import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { CustomText } from '../../commons/CustomText';
import { IconBtn } from '../../commons/IconBtn';
import {ICONS_LIGHT, COLORS, GLOBAL_STYLES, ICONS_DARK} from '../../styles';
import { Seperator } from '../../commons/Seperator';
import { askForCameraPermissions, imagePickerOptions } from '../../utils/askForCameraPermissions';
import { connect } from 'react-redux';
import { uploadProfilePic, selectProfilePiC } from '../../redux/auth';
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	profilePic: selectProfilePiC(state),
	darkMode: selectTheme(state)
});

export const ProfilePictureLoader = connect(mapStateToProps, {
	uploadProfilePic
})(({ profilePic, uploadProfilePic, darkMode }) => {
	const selectImage = async (isCamera) => {
		try {
			//check for permissions
			let permisions = await askForCameraPermissions();
			if (permisions) {
				let image;
				//if person wants to open camera
				if (isCamera) {
					image = await ImagePicker.launchCameraAsync(imagePickerOptions);
				} else {
					//for oppening gallery
					image = await ImagePicker.launchImageLibraryAsync(imagePickerOptions);
				}
				const { canceled, uri } = image;
				//if not canceled take the uri of image
				if (!canceled) {
					uploadProfilePic(uri);
				}
			}
		} catch (err) {
			console.log('selectImage err', err);
			//todo handle err
		}
	};

	const colorTheme = darkMode
		? {
			color: COLORS.drawerDark,
			gallery: ICONS_DARK.galleryDark,
			camera: ICONS_DARK.cameraDark
		} : {
			color: COLORS.acsentColor,
			gallery: ICONS_LIGHT.gallery,
			camera: ICONS_LIGHT.camera
		};

	return (
		<View style={styles.container}>
			<View style={{...styles.imageWrapper, borderColor: colorTheme.color}}>
				<Image style={styles.profilePic} source={{ uri: profilePic }} />
			</View>
			<CustomText  style={{...styles.editText, color: colorTheme.color}}>
				Edit Picture
			</CustomText>		
			<View style={styles.row}>
				<IconBtn icon={colorTheme.camera} style={styles.icon} onPress={() => selectImage(true)} />
				<IconBtn icon={colorTheme.gallery} style={styles.icon} onPress={() => selectImage()} />
			</View>
			<Seperator style={{...styles.seperator, backgroundColor: colorTheme.color}} />
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50
	},
	imageWrapper: {
		width: 200,
		height: 200,
		borderRadius: 100,
		borderWidth: 2,
		marginBottom: 17,
		...GLOBAL_STYLES.shaddowTop
	},
	profilePic: {
		width: '100%',
		height: '100%',
		borderRadius: 100,
	},
	chooseBtn: {
		alignSelf: 'flex-end',
		marginRight: 68
	},
	seperator: {
		marginTop: 10,
		height:1,
		width: '85%',
	},
	row: {
		width: 75,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10
	},
	editText: {
		fontSize: 12,
		// alignSelf: 'center',
		position:'absolute',
		left:40,
		bottom:10
	},

});
