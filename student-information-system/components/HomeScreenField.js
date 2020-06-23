import React, { useState , useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';

import { COLORS, ICONS_LIGHT, GLOBAL_STYLES } from '../styles';
import { IconBtn } from './IconBtn';
import fbApp from '../utils/FireBaseInit';

export const HomeScreenField = () => {
	const [ feed, setFeed ] = useState('');

	const postHandler = () => {
		if (feed.trim() !== '') {
			const newFeedID = fbApp.db.ref('feeds').push().key;
			const newMessageId = fbApp.db.ref(`posts/${newFeedID}`).push().key;
			const updates = {
				[`feeds/${newFeedID}`]: { title },
				[`posts/${newFeedID}/${newMessageId}`]: {
					text: 'Today',
					auther: 'system'
				}
			};
			fbApp.db.ref().update(updates, (err) => {
				if(err){
					console.log('errrs durinng post create ', err);
				}//temperrary error handling
			});
			setFeed('');
		}
	}; //a temporary function for submit btn
	
	return (
		<View style={{ ...styles.container, ...GLOBAL_STYLES.shaddowBottum }}>
			<TextInput
				value={feed}
				onChangeText={setFeed}
				style={styles.field}
				placeholder="what is on your mind...."
			/>
			<IconBtn icon={ICONS_LIGHT.origamiLight} style={styles.icon} onPress={postHandler} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.backgroundLight,
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	icon: {
		width: 40,
		height: 40
	},
	field: {
		width: '80%',
		height: '100%',
		color: COLORS.backgroundDark
	}
});
