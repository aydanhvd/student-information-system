import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles';
import { CustomText } from '../Customs/CustomText';
import { connect } from 'react-redux';
import { setChatID, setRecieverInfo } from '../../redux/chats';
import { ICONS_LIGHT } from '../../styles/iconsLight';

export const StartedChatsCover = connect(null, {
	setChatID,
	setRecieverInfo
})(({ item, navigation, setChatID, setRecieverInfo }) => {
	const date = new Date(item.lastMessage.time);
	const humanTime = `${date.getHours()}:${date.getMinutes()}`;
	const onPressHandler = () => {
		setChatID(item.id),
			setRecieverInfo({
				userName: item.title,
				image: item.image
			});
		navigation.navigate('PriviteChat');
	};

	return (
		<TouchableOpacity style={styles.container} onPress={onPressHandler}>
			<Image source={item.image ? { uri: item.image } : ICONS_LIGHT.userLight} style={styles.image} />
			<View style={styles.textContainer}>
				<CustomText style={styles.name}>{item.title}</CustomText>
				<CustomText numberOfLines={1} style={styles.text}>
					{item.lastMessage.text}
				</CustomText>
			</View>
			<CustomText style={styles.time}>{humanTime}</CustomText>
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
		borderColor: COLORS.drawerLight,
		alignSelf: 'center',
		marginLeft: 3
		// marginRight:
	},
	textContainer: {
		width: '60%'
		// justifyContent:'space-between',
	},
	name: {
		fontSize: 18,
		color: COLORS.textColorDark
		// marginBottom: 12
	},
	text: {
		fontSize: 12,
		color: COLORS.drawerLight
	},
	time: {
		fontSize: 13,
		color: COLORS.textColorDark,
		marginRight: 13
		// alignSelf:'flex-start',
	}
});
