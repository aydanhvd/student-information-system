import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

export const RefreshIcon = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				id="Capa_1"
				enable-background="new 0 0 512 512"
				height="100%"
				viewBox="0 0 512 512"
				width="100%"
				class=""
			>
				<G>
					<G>
						<Path
							d="m414.5 0h-317c-37.22 0-67.5 30.28-67.5 67.5v444.5l173.5-86.75 173.5 86.75v-241h105v-203.5c0-37.22-30.28-67.5-67.5-67.5zm-67.5 67.5v395.959l-143.5-71.75-143.5 71.75v-395.959c0-20.678 16.822-37.5 37.5-37.5h260.9c-7.197 10.732-11.4 23.636-11.4 37.5zm105 173.5h-75v-173.5c0-20.678 16.822-37.5 37.5-37.5s37.5 16.822 37.5 37.5z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill="#53565A"
						/>
					</G>
				</G>
			</Svg>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 22,
		height: 22
	}
});
