import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { COLORS } from '../../styles';

export const SignUpInput = () => {
	const [ fields, setFields ] = useState([
		{ placeholder: 'email', value: '', secureTextEntry: false },
		{ placeholder: 'username', value: '', secureTextEntry: false },
		{ placeholder: 'full name', value: '', secureTextEntry: false },
		{ placeholder: 'password', value: '', secureTextEntry: true },
		{ placeholder: 'repeat password', value: '', secureTextEntry: true }
	]);
	console.log(fields);
	const fieldsChangeHandler = (key, value) => {
		
	};
	return (
		<View>
			{fields.map((field, key) => {
				return (
					<TextInput
						style={styles.input}
						value={field.value}
						placeholder={field.placeholder}
						secureTextEntry={field.secureTextEntry}
						placeholderTextColor="rgba(255,255,255, 0.3)"
						onChange={(value) => fieldsChangeHandler(key, value)}
					/>
				);
			})}
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
