import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../../styles';

export const SignUpInput = ({ fields, fieldsChangeHandler }) => {
	return (
		<View>
			{Object.keys(fields).map((key) => (
				<TextInput
					key={Date.now()}
					style={styles.input}
					placeholder={fields[key].label}
					placeholderTextColor="rgba(255,255,255, 0.3)"
					secureTextEntry={fields[key].secureTextEntry}
					onChangeText={(value) => fieldsChangeHandler(key, value)}
				/>
			))}
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		width: '100%',
		borderBottomColor: COLORS.backgroundLight,
		borderBottomWidth: 1,
		color: COLORS.backgroundLight,
		height: 40
	}
});
