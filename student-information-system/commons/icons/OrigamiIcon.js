import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import {selectTheme} from "../../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "../../styles";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});

export const OrigamiIcon = connect(mapStateToProps, {})(({ darkMode, onPress, style }) => {

    const colorTheme = darkMode
        ? {
            fill: COLORS.drawerDark,
        } : {
            fill: COLORS.acsentColor,
        };

    return (
        <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
            <Svg
                height="100%"
                viewBox="0 0 128 128"
                width="100%"
                xmlns="http://www.w3.org/2000/svg">
                <G>
                    <Path
                        d="m101.818 24.377a1.751 1.751 0 0 0 -1.9-.537l-66.365 22.189a1.75 1.75 0 0 0 -.527 3.036l16.982 13.344v12.529a1.749 1.749 0 0 0 2.825 1.38l7.475-5.818 10.653 8.371a1.751 1.751 0 0 0 2.617-.536l28.433-52a1.751 1.751 0 0 0 -.193-1.958zm-11.253 6.282-38.775 28.699-14.048-11.039zm-37.057 40.7v-6.2l3.964 3.115zm17.992 3.485-16.857-13.244 40.482-29.963z"
                        data-original="#000000"
                        class="active-path"
                        data-old_color="#000000"
                        fill={colorTheme.fill}
                    />
                    <Path
                        d="m29.265 96.535a1.751 1.751 0 0 0 -2.2 1.134c-.446 1.394-.864 2.879-1.24 4.414a1.75 1.75 0 1 0 3.4.834c.358-1.457.753-2.864 1.174-4.182a1.749 1.749 0 0 0 -1.134-2.2z"
                        data-original="#000000"
                        class="active-path"
                        data-old_color="#000000"
                        fill={colorTheme.fill}
                    />
                    <Path
                        d="m46.629 79.894a10.146 10.146 0 0 0 -6.712.348 17.877 17.877 0 0 1 2.983-6.542 1.75 1.75 0 0 0 -2.749-2.165c-.2.254-3.939 5.073-3.993 10.934a25.09 25.09 0 0 0 -6.329 8.331 1.75 1.75 0 0 0 3.125 1.578 24.24 24.24 0 0 1 3.85-5.7q.117.351.257.7a8.582 8.582 0 0 0 8.812 5.659 6.682 6.682 0 0 0 5.887-6.081c.408-3.099-1.702-6.005-5.131-7.062zm1.661 6.606a3.235 3.235 0 0 1 -2.853 3.065 5.081 5.081 0 0 1 -5.126-3.487 8.888 8.888 0 0 1 -.518-1.853 7.249 7.249 0 0 1 5.805-.991c1.766.549 2.873 1.892 2.692 3.266z"
                        data-original="#000000"
                        class="active-path"
                        data-old_color="#000000"
                        fill={colorTheme.fill}
                    />
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
