import React, { useCallback } from "react";
import { Alert, Linking, StyleSheet, View } from "react-native";
import { CustomText } from "./CustomText";

const supportedURL = "https://google.com";

const OpenURL = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      /*Todo handle error*/
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <CustomText title={children} onPress={handlePress} />;
};

export const CustomLink = () => {
  return (
    <View>
      <OpenURL url={supportedURL}></OpenURL>
    </View>
  );
};
