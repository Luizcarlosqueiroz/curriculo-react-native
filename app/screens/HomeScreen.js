import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import { Avatar, Chip, IconButton } from "react-native-paper";
import AppText from "../components/AppText";

import Screen from "../components/Screen";
import defaultStyle from "../../config/styles";
import Social from "../components/Social";

const dadosPessoais = {
	id: 1,
	nome: "Luiz Carlos",
	especialidade: "X",
	endereco: "R. do Príncipe, 526 - Boa Vista",
	email: "luiz.2020107069@unicap.br",
	telefone: "(81) 99512-4444",
};

function HomeScreen(props) {
	return (
		<Screen styles={styles.container}>
			<View style={styles.images}>
				<Image
					source={{
						width: "100%",
						height: 200,
						uri: "https://images.unsplash.com/photo-1594800083755-8fe31b2c99df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80",
					}}
				/>
				<Avatar.Image
					resizeMode={"cover"}
					style={styles.imageProfile}
					size={200}
					source={require("../assets/profile.jpeg")}
				/>
			</View>
			<View style={styles.texts}>
				<AppText style={styles.textname}>{dadosPessoais.nome}</AppText>
				<AppText>{dadosPessoais.especialidade}</AppText>
				<AppText style={styles.textinfo}>{dadosPessoais.endereco}</AppText>
				<AppText style={styles.textinfo}>{dadosPessoais.email}</AppText>
			</View>
			<Social />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "space-between",
	},
	images: {
		height: 300,
		alignItems: "center",
	},
	imageProfile: {
		position: "absolute",
		marginTop: 100,
		overflow: "hidden",
		borderWidth: 5,
		borderColor: "white",
		borderStyle: "solid",
	},
	specialities: {
		flexDirection: "row",
	},
	texts: {
		alignItems: "center",
	},
	textinfo: {
		color: defaultStyle.colors.medium,
		fontSize: 15,
	},
	textname: {
		fontSize: 40,
	},
});

export default HomeScreen;

// String Nome
// String Especialidade
// String Endereço
// String E-mail
// String Telefone

// https://programmingwithmosh.com/react-native/make-api-calls-in-react-native-using-fetch/
