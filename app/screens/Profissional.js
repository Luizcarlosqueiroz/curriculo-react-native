import React from "react";
import { FlatList, View } from "react-native";

import { Divider } from "react-native-paper";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const experienciasProfissionais = [
	{
		id: 1,
		empresa: "Liferay",
		cargo: "Estagiário",
		image: require("../assets/liferay-logo.png"),
	},
	{
		id: 2,
		empresa: "Raylife",
		cargo: "Intern",
		image: require("../assets/liferay-logo.png"),
	},
];

function Profissional(props) {
	return (
		<Screen>
			<FlatList
				data={experienciasProfissionais}
				keyExtractor={(experienciasProfissionais) =>
					experienciasProfissionais.id.toString()
				}
				renderItem={({ item }) => (
					<ListItem
						title={item.empresa}
						subtitle={item.cargo}
						image={item.image}
						paragraph="test"
					/>
				)}
				ItemSeparatorComponent={Divider}
			/>
		</Screen>
	);
}

export default Profissional;

// String Empresa
// String Cargo
// LocalDate dtInicio
// LocalDate dtFim
// String atividades
