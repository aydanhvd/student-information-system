import React from 'react';
import { StyleSheet, TouchableOpacity ,View} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { connect } from 'react-redux';
import { COLORS } from '../../styles';
import { selectTheme } from '../../redux/theme';

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});
//notebook icon on footer
export const NoteBookIcon = connect(mapStateToProps, {})(({ darkMode, onPress }) => {
	const colorTheme = darkMode
		? {
				fill: COLORS.backgroundLight
			}
		: {
				fill: COLORS.acsentLight
			};

	return (
		<View style={styles.container}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Capa_1"
				viewBox="0 0 58 58"
				style="enable-background:new 0 0 58 58;"
				width="100%"
				height="100%"
			>
				<G>
					<G>
						<Path
							d="M3,43c0.552,0,1-0.447,1-1c0-1.654,1.346-3,3-3s3,1.346,3,3c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.757-2.243-5-5-5   s-5,2.243-5,5C2,42.553,2.448,43,3,43z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="M3,37c0.552,0,1-0.447,1-1c0-1.654,1.346-3,3-3s3,1.346,3,3c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.757-2.243-5-5-5   s-5,2.243-5,5C2,36.553,2.448,37,3,37z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="M3,31c0.552,0,1-0.447,1-1c0-1.654,1.346-3,3-3s3,1.346,3,3c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.757-2.243-5-5-5   s-5,2.243-5,5C2,30.553,2.448,31,3,31z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="M3,25c0.552,0,1-0.447,1-1c0-1.654,1.346-3,3-3s3,1.346,3,3c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.757-2.243-5-5-5   s-5,2.243-5,5C2,24.553,2.448,25,3,25z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="M4,18c0-1.654,1.346-3,3-3s3,1.346,3,3c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.757-2.243-5-5-5s-5,2.243-5,5   c0,0.553,0.448,1,1,1S4,18.553,4,18z"
							data-original="#000000"
							class="active-path"
							data-old_color="#000000"
							fill={colorTheme.fill}
						/>
						<Path
							d="M52.003,0.004H50h-7H19V0H6v7.101C3.721,7.566,2,9.585,2,12c0,0.553,0.448,1,1,1s1-0.447,1-1c0-1.654,1.346-3,3-3   s3,1.346,3,3c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.415-1.721-4.434-4-4.899V2h9v54H8v-4v-3c0-0.553-0.448-1-1-1s-1,0.447-1,1v1.815   C4.839,50.401,4,49.302,4,48c0-1.654,1.346-3,3-3s3,1.346,3,3c0,0.553,0.448,1,1,1s1-0.447,1-1c0-2.757-2.243-5-5-5s-5,2.243-5,5   c0,2.415,1.721,4.434,4,4.899V58h11h2h24h7h2.003C54.207,58,56,56.207,56,54.004V4C56,1.797,54.207,0.004,52.003,0.004z M19,56   V2.004h24V56H19z M45,56V2.004h3V56H45z M54,54.004C54,55.104,53.104,56,52.003,56H50V2.004h2.003C53.104,2.004,54,2.899,54,4   V54.004z"
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
