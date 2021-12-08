import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import defaultStyle from "../../config/styles";

function ListItem({ title, subtitle, image }) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subtitle}>{subtitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "stretch",
		padding: 15,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 15,
		marginRight: 10,
		alignSelf: "center",
	},
	title: {
		fontWeight: "500",
	},
	subtitle: {
		color: defaultStyle.colors.medium,
	},
});

export default ListItem;
