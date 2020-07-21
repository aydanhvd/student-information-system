import React from "react";
import {COLORS} from "./colors";


export const darkModeHandler = (darkMode) => {
    let colorTheme={}
    if(darkMode){
        colorTheme= {
            backgroundColor: COLORS.backgroundDark,
            mainColor: COLORS.drawerDark,
            postBgColor: COLORS.screenBgDark,
            placeholderColor: COLORS.backgroundLight,
            textColor: COLORS.backgroundLight,
        }
    }else{
        colorTheme= {
            backgroundColor: COLORS.backgroundLight,
            mainColor: COLORS.acsentColor,
            postBgColor: COLORS.screenBgLight,
            placeHolderTheme: COLORS.textColorDark,
            textColor: COLORS.acsentLight,
        } 
    }
    console.log(colorTheme)
    return {...colorTheme};
};
