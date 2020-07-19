import React from 'react';
import { StyleSheet, TouchableOpacity ,View} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {connect} from "react-redux";
import {COLORS} from "../../styles";
import {selectTheme} from "../../redux/theme";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const CalendarIcon = connect(mapStateToProps, {})(({ darkMode, onPress }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundLight,
		} : {
			fill: COLORS.acsentLight,
		};

	return (
		<View style={styles.container} >
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				id="Layer_1"
				enable-background="new 0 0 512 512"
				height="100%"
				viewBox="0 0 512 512"
				width="100%"
				class=""
			>
				<G>
					<G>
						<Path
							d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
					</G>
				</G>
			</Svg>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		width: 22,
		height: 22
	}
});
