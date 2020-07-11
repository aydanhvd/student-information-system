import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/colors';
import { CustomText } from '../commons/CustomText';
import { Link } from '../commons/Link';
import { GLOBAL_STYLES } from '../styles';

export const ClassField = ({ heading, topic, backgroundColor,  onPress , textStyles, style }) => {
	return (
		<TouchableOpacity style={{ ...styles.container, ...style }} onPress={onPress}>
			<View style={{ ...styles.headerContainer, ...backgroundColor }}>
				<CustomText style={{ ...styles.heading, ...textStyles }}>{heading}</CustomText>
			</View>
			<View style={styles.row}>
				<Link link={topic} styleText={styles.topic} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 90,
		borderRadius: 4,
		backgroundColor: COLORS.backgroundLight,
		...GLOBAL_STYLES.shaddowTop,
		marginVertical: 10,
		marginHorizontal:16
	},
	headerContainer: {
		borderColor: COLORS.backgroundDark,
		borderTopStartRadius: 4,
		borderTopEndRadius: 4,
		backgroundColor: COLORS.commentsColorLight
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 14
	},
	heading: {
		fontSize: 20,
		marginVertical: 5,
		marginHorizontal: 14
	},
	date: {
		fontSize: 14,
		marginVertical: 10,
		color: COLORS.acsentLight
	},
	topic: {
		fontSize: 13,
		marginVertical: 10,
		color: COLORS.drawerLight
	}
});
