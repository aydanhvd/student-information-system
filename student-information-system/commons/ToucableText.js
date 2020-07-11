import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from './CustomText';

export const TouchableText = ({ text, style, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<CustomText style={{ ...style }}>{text}</CustomText>
	</TouchableOpacity>
);
