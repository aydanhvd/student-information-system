import * as Font from 'expo-font';

import RelewayExtraLight from '../assets/fonts/Raleway_ExtraLight.ttf';
import RelewayRegular from '../assets/fonts/Raleway_Regular.ttf';
import RelewayMeium from '../assets/fonts/Raleway_Medium.ttf';
import RelewaySemiBold from '../assets/fonts/Raleway_SemiBold.ttf';
import RelewayBold from '../assets/fonts/Raleway_Bold.ttf';

export function loadFonts() {
	return Font.loadAsync({
		RelewayExtraLight,
		RelewayRegular,
		RelewayMeium,
		RelewaySemiBold,
		RelewayBold
	});
}

export const FontFamiles = Object.freeze({
	extraLight: 'RelewayExtraLight',
	regular: 'RelewayRegular',
	meium: 'RelewayMeium',
	semi: 'RelewaySemiBold',
	bold: 'RelewayBold'
});
