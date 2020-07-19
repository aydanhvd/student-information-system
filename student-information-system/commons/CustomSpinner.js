import React from "react";
import { StyleSheet, View } from "react-native";
import { List, ListItem, Spinner } from "@ui-kitten/components";
import { HomeScreen } from "../screens/HomeScreen";

export const CustomSpinner = () => {
  return (
    <View style={styles.loading}>
      <Spinner style={styles.spin} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
});
