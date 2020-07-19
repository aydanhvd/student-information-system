import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const CameraIcon = connect(mapStateToProps, {})(({ darkMode, onPress }) => {

	const colorTheme = darkMode
		? {
			fill: COLORS.backgroundLight,
		} : {
			fill: COLORS.acsentLight,
		};

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				id="Capa_1"
				viewBox="0 0 423.253 423.253"
				style="enable-background:new 0 0 423.253 423.253;"
				width="100%"
				height="100%"
				class=""
			>
				<G>
					<G>
						<G>
							<Path
								d="M308.413,105.054l-8.153-44.834c-0.587-3.246-3.413-5.606-6.714-5.606h-163.84c-3.301,0-6.127,2.36-6.714,5.608    l-8.079,44.433c-0.679,3.705,1.78,7.262,5.494,7.936c3.726,0.666,7.265-1.787,7.933-5.497l7.067-38.827h152.439l7.139,39.228    c0.594,3.296,3.468,5.606,6.707,5.606c0.408,0,0.814-0.038,1.227-0.111C306.633,112.317,309.093,108.761,308.413,105.054z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill= {colorTheme.fill}
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M389.072,102.4H34.179C15.333,102.4,0,117.697,0,136.497v198.045c0,18.801,15.333,34.098,34.179,34.098h354.895    c18.847,0,34.179-15.297,34.179-34.096V136.497C423.253,117.697,407.921,102.4,389.072,102.4z M409.598,334.542    c0,11.274-9.206,20.444-20.526,20.444H34.179c-11.319,0-20.526-9.17-20.526-20.442V136.497c0-11.274,9.207-20.444,20.526-20.444    h354.895c11.319,0,20.526,9.17,20.524,20.444V334.542z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill={colorTheme.fill}
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M211.627,129.707c-60.227,0-109.227,49-109.227,109.227s49,109.227,109.227,109.227s109.227-49,109.227-109.227    S271.853,129.707,211.627,129.707z M211.627,334.507c-52.7,0-95.573-42.873-95.573-95.573c0-52.7,42.873-95.573,95.573-95.573    s95.573,42.873,95.573,95.573C307.2,291.633,264.327,334.507,211.627,334.507z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill={colorTheme.fill}
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M211.627,157.013c-45.174,0-81.92,36.75-81.92,81.92c0,45.17,36.746,81.92,81.92,81.92s81.92-36.75,81.92-81.92    C293.547,193.763,256.8,157.013,211.627,157.013z M211.627,307.2c-37.641,0-68.267-30.623-68.267-68.267    c0-37.644,30.626-68.267,68.267-68.267s68.267,30.623,68.267,68.267C279.893,276.577,249.267,307.2,211.627,307.2z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill={colorTheme.fill}
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M211.627,184.32c-30.114,0-54.613,24.499-54.613,54.613c0,3.77,3.053,6.827,6.827,6.827s6.827-3.057,6.827-6.827    c0-22.586,18.374-40.96,40.96-40.96c3.773,0,6.827-3.057,6.827-6.827S215.4,184.32,211.627,184.32z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill={colorTheme.fill}
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M95.573,75.093H47.787c-3.773,0-6.827,3.057-6.827,6.827v27.307c0,3.77,3.053,6.827,6.827,6.827h47.787    c3.773,0,6.827-3.057,6.827-6.827V81.92C102.4,78.15,99.347,75.093,95.573,75.093z M88.747,102.4H54.613V88.747h34.133V102.4z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill={colorTheme.fill}
							/>
						</G>
					</G>
					<G>
						<G>
							<Path
								d="M368.64,122.88c-15.06,0-27.307,12.25-27.307,27.307s12.247,27.307,27.307,27.307s27.307-12.25,27.307-27.307    S383.7,122.88,368.64,122.88z M368.64,163.84c-7.526,0-13.653-6.123-13.653-13.653c0-7.53,6.127-13.653,13.653-13.653    c7.526,0,13.653,6.124,13.653,13.653C382.293,157.716,376.166,163.84,368.64,163.84z"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill={colorTheme.fill}
							/>
						</G>
					</G>
				</G>
			</Svg>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		width: 22,
		height: 22
	}
});
