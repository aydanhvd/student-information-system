import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles';
import { CustomText } from '../../commons/CustomText';
import { connect } from 'react-redux';
import { setChatID, setRecieverInfo } from '../../redux/chats';
import { ICONS_LIGHT } from '../../styles/iconsLight';
import { selectTheme } from '../../redux/theme';
import { timeHumanizer } from '../../utils/timeHumanizer';

const mapStateToProps = (state) => ({
	darkMode: selectTheme(state)
});

export const StartedChatsCover = connect(mapStateToProps, {
	setChatID,
	setRecieverInfo
})(({ item, navigation, setChatID, setRecieverInfo, darkMode }) => {
	const humanTime = item.lastMessage.time ? timeHumanizer(item.lastMessage.time) : '';

	const onPressHandler = () => {
		setChatID(item.id),
			setRecieverInfo({
				userName: item.title,
				image: item.image
			});
		navigation.navigate('PriviteChat');
	};

	const colorTheme = darkMode
		? {
				textColor: COLORS.sendDark,
				nameColor: COLORS.backgroundLight
			}
		: {
				textColor: COLORS.drawerLight,
				nameColor: COLORS.acsentLight
			};

	return (
		<TouchableOpacity style={styles.container} onPress={onPressHandler}>
			<Image source={item.image ? { uri: item.image } : ICONS_LIGHT.userLight} style={styles.image} />
			<View style={styles.textContainer}>
				<CustomText style={{ ...styles.name, color: colorTheme.nameColor }}>{item.title}</CustomText>
				<CustomText numberOfLines={1} style={{ ...styles.text, color: colorTheme.textColor }}>
					{item.lastMessage.text}
				</CustomText>
			</View>
			<CustomText style={{ ...styles.time, color: colorTheme.nameColor }}>
				{humanTime[0]} {humanTime[1]}
			</CustomText>
		</TouchableOpacity>
	);
});
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	image: {
		width: 55,
		height: 55,
		borderRadius: 40,
		borderWidth: 3,
		borderColor: COLORS.commentsColorLight,
		alignSelf: 'center',
		marginLeft: 3
		// marginRight:
	},
	textContainer: {
		width: '60%'
		// justifyContent:'space-between',
	},
	name: {
		fontSize: 18
	},
	text: {
		fontSize: 12
	},
	time: {
		fontSize: 13,
		marginLeft: -17
		// alignSelf:'flex-start',
	}
});
