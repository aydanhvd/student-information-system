import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CustomText } from '../Customs/CustomText';
import { COLORS } from '../../styles/colors';
import { CustomBtn } from '../Customs/CustomBtn';
import { GLOBAL_STYLES } from '../../styles';
import { CustomSeperator } from '../Customs/CustomSeperator';

export const Modal = ({ cancel, sent, text }) => {
	// click send button and confirm with this modal
	return (
		<View style={styles.container}>
			<CustomText style={styles.headerText}>{text}</CustomText>
			<CustomSeperator />
			<View style={styles.row}>
				<CustomBtn onPress={cancel} text="Cancel" />
				<CustomBtn onPress={sent} text="YES! SEND" />
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		borderRadius: 10,
		marginHorizontal: 40,
		marginVertical: 270,
		paddingVertical: 30,
		paddingHorizontal: 20,
		height: 150,
		backgroundColor: COLORS.backgroundLight,
		...GLOBAL_STYLES.shaddowTop
	},
	row: {
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row'
	},

	headerText: {
		textAlign: 'center',
		marginBottom: 20,
		color: COLORS.textColorDark
	},
	text: {
		textAlign: 'center',
		color: COLORS.backgroundLight
	}
});
