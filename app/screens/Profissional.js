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
		empresa: "FedEx Espress",
		cargo: "Assistente Administrativo",
		image: require("../assets/liferay-logo.png"),
	},
	{
		id: 3,
		empresa: "FedEx Espress",
		cargo: "Assistente de Operações",
		image: require("../assets/liferay-logo.png"),
	},
	{
		id: 4,
		empresa: "FedEx Espress",
		cargo: "Auxiliar de Operações",
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
						paragraph="Descição das atividades"
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
