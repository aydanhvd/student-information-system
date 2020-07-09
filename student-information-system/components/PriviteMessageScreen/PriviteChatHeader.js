import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomIconBtn } from '../index';
import { ICONS_LIGHT, COLORS } from '../../styles';
import { CustomText } from '../Customs/CustomText';
import { connect } from 'react-redux';
import { selectRecieverUserName, selectRecieverUserImage } from '../../redux/chats';

const mapStateToProps = (state) => ({
	recieverName: selectRecieverUserName(state),
	recieverPic: selectRecieverUserImage(state)
});
export const PriviteChatsHeader = connect(mapStateToProps)(({ navigation, recieverName, recieverPic }) => {
	return (
		<View style={styles.container}>
			<CustomIconBtn icon={ICONS_LIGHT.backLight} style={styles.backArrow} onPress={() => navigation.goBack()} />
			<Image style={styles.profilePiC} source={recieverPic ? { uri: recieverPic } : ICONS_LIGHT.userLight} />
			<View style={styles.nameContainer}>
				<CustomText style={styles.name}>{recieverName}</CustomText>
				{/* <CustomText style={styles.userName}>@{reciever.userName}</CustomText> */}
			</View>
		</View>
	);
});
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 60,
		alignItems: 'center'
	},
	profilePiC: {
		width: 40,
		height: 40,
		borderRadius: 30,
		marginHorizontal: 15,
		borderWidth: 2,
		borderColor: COLORS.acsentColor
	},
	backArrow: {
		marginLeft: 16
	},
	nameContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 18,
		color: COLORS.textColorDark
	},
	userName: {
		fontSize: 12,
		color: COLORS.acsentColor
	}
});
