import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { Avatar, Caption, Subheading, Title } from "react-native-paper";

import AppText from "./AppText";
import defaultStyle from "../../config/styles";

function ListItem({ title, subtitle, dtStart, dtEnd, paragraph }) {
	return (
		<View style={styles.container}>
			<Avatar.Icon style={styles.image} icon="domain" />
			<View>
				<Title style={styles.title}>{title}</Title>
				<Subheading style={styles.subtitle}>{subtitle}</Subheading>
				<View style={styles.dates}>
					{dtStart && <Subheading>{dtStart}</Subheading>}
					{dtEnd && <Subheading>{dtEnd}</Subheading>}
				</View>
				{paragraph ? <Caption>{paragraph}</Caption> : null}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "stretch",
		padding: 15,
		borderWidth: 1,
		borderColor: defaultStyle.colors.medium,
		borderRadius: 13,
		margin: 5,
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
