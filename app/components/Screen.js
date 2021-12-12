import React, { Children } from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Screen({ children }) {
	return <View>{children}</View>;
	// return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
	},
});

export default Screen;
