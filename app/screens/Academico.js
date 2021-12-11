import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Card, Title, Paragraph, Subheading } from "react-native-paper";

import Screen from "../components/Screen";

const expAcademicas = [
	{
		id: 1,
		curso: "Sistemas para Internet",
		instituicao: "UNICAP",
		dtInicio: "2020",
		dtFim: "2022",
	},
	{
		id: 2,
		curso: "Administração",
		instituicao: "FCAP",
		dtInicio: "2016",
		dtFim: "2019",
	},
	{
		id: 3,
		curso: "Administração",
		instituicao: "Curso de sei lá",
		dtInicio: "2016",
		dtFim: "2019",
	},
];

function Academico(props) {
	const imageCard = (inst) => {
		if (inst === "UNICAP") {
			return <Card.Cover source={require("../assets/academico/unicap.jpg")} />;
		} else if (inst === "FCAP") {
			return <Card.Cover source={require("../assets/academico/fcap.jpg")} />;
		} else {
			return (
				<Card.Cover
					source={require("../assets/academico/general-courses.jpg")}
				/>
			);
		}
	};

	return (
		<Screen>
			<FlatList
				data={expAcademicas}
				keyExtractor={(expAcademicas) => expAcademicas.id.toString()}
				renderItem={({ item }) => (
					<Card style={styles.card}>
						{imageCard(item.instituicao)}
						<Card.Content>
							<Title>{item.curso}</Title>
							<Subheading>{item.instituicao}</Subheading>
							<View>
								<Paragraph>
									{item.dtInicio} - {item.dtFim}
								</Paragraph>
							</View>
						</Card.Content>
					</Card>
				)}
				ItemSeparatorComponent={null}
			/>
		</Screen>
	);
}

export default Academico;

const styles = StyleSheet.create({
	card: {
		width: "90%",
		flex: 1,
		alignSelf: "center",
		margin: 10,
	},
});
