import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ICONS_LIGHT } from '../styles/iconsLight';
import { COLORS } from '../styles/colors';

const btns = [
    {
        name: 'calendar',
        img: ICONS_LIGHT.calendarLight
    },
    {
        name: 'bookmark',
        img: ICONS_LIGHT.bookmarkLight
    },
    {
        name: 'menu',
        img: ICONS_LIGHT.menuLight
    },
    {
        name: 'send',
        img: ICONS_LIGHT.sendLight
    },
    {
        name: 'noteboook',
        img: ICONS_LIGHT.notebookLight
    }
];

export const Footer = ({style}) => {
    const [ indicator, setIndicator ] = useState('menu');//indicator will be a props for indicate wich page we r in in future
    return (
        <View style={[styles.container,{...style}]}>
            {btns.map((btn) => {
                return (
                    <TouchableOpacity
                        style={[ styles.btn, { height: btn.name === indicator ? 35 : 30 } ]}
                        onPress={() => setIndicator(btn.name)}
                    >
                        {/* rewrite onPress after ur done with testing and create a function to naviagte between screens */}
                        <Image source={btn.img} style={styles.icon} />
                        {btn.name === indicator && <View style={styles.indicator} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: COLORS.backgroundLight,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17
    },
    btn: {
        width: 35,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    indicator: {
        position: 'absolute',
        bottom: -13,
        marginTop: 10,
        backgroundColor: COLORS.acsentColor,
        width: 60,
        height: 4
    }
});
