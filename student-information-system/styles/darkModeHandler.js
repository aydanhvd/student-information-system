import React from "react";
import {selectTheme} from "../redux/theme";
import {connect} from "react-redux";
import {COLORS} from "./colors";

const mapStateToProps = (state) => ({
    darkMode: selectTheme(state)
});

export const darkModeHandler =  connect(mapStateToProps, {})(({ darkMode }) => {

    const colorTheme = darkMode
        ? {
            backgroundColor: COLORS.backgroundDark,
            mainColor: COLORS.drawerDark,
            postBgColor: COLORS.screenBgDark,
            placeholderColor: COLORS.backgroundLight,
            textColor: COLORS.backgroundLight,
        } : {
            backgroundColor: COLORS.backgroundLight,
            mainColor: COLORS.acsentColor,
            postBgColor: COLORS.screenBgLight,
            placeHolderTheme: COLORS.textColorDark,
            textColor: COLORS.acsentLight,
        };

    return true;
});
