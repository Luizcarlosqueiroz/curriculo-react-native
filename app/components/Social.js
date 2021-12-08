import React from "react";
import { StyleSheet, View } from "react-native";

import { IconButton } from "react-native-paper";

import defaultStyle from "../../config/styles";

function Social(props) {
	return (
		<View style={styles.iconBar}>
			<IconButton
				icon="facebook"
				onPress={() => console.log("social media")}
				color={defaultStyle.colors.primary}
			/>
			<IconButton
				icon="twitter"
				onPress={() => console.log("social media")}
				color={defaultStyle.colors.primary}
			/>
			<IconButton
				icon="instagram"
				onPress={() => console.log("social media")}
				color={defaultStyle.colors.primary}
			/>
			<IconButton
				icon="linkedin"
				onPress={() => console.log("social media")}
				color={defaultStyle.colors.primary}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	iconBar: {
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default Social;
