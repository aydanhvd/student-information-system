import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { CustomText } from './CustomText';
import { IconBtn } from './IconBtn';
import { ICONS_LIGHT, COLORS, GLOBAL_STYLES } from '../styles';
import { Seperator } from './Seperator';
import { askForCameraPermissions, imagePickerOptions } from '../utils/askForCameraPermissions';
import { connect } from 'react-redux';
import { uploadProfilePic, selectProfilePiC } from '../redux/auth';

const mapStateToProps = (state) => ({
	profilePic: selectProfilePiC(state)
});

export const ProfilePictureLoader = connect(mapStateToProps, {
	uploadProfilePic
})(({ profilePic, uploadProfilePic }) => {
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
	return (
		<View style={styles.container}>
			<View style={styles.imageWrapper}>
				<Image style={styles.profilePic} source={{ uri: profilePic }} />
			</View>
			<CustomText weight="semi" style={styles.editText}>
				Edit Picture
			</CustomText>
			<Seperator color={COLORS.acsentColor} style={styles.seperator} />
			<View style={styles.row}>
				<IconBtn icon={ICONS_LIGHT.camera} style={styles.icon} onPress={() => selectImage(true)} />
				<IconBtn icon={ICONS_LIGHT.gallery} style={styles.icon} onPress={() => selectImage()} />
			</View>
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
		borderWidth: 20,
		borderColor: COLORS.acsentColor,
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
		width: '80%',
		...GLOBAL_STYLES.shaddowBottum
	},
	row: {
		width: 75,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 10
	},
	editText: {
		color: COLORS.acsentColor,
		fontSize: 12,
		alignSelf: 'center'
	},

});
