import React from "react";
import { FlatList, StyleSheet, Image, View, ScrollView } from "react-native";

import { Card, List } from "react-native-paper";

import ListItem from "../components/ListItem";

const hobbies = ["Natação", "Fotografia", "Ciclismo", "Viagens"];
const habilidades = [
	"Programação Web",
	"Data Science",
	"QA",
	"Front-end",
	"Back-end",
];

function Pessoal(props) {
	return (
		<>
			<ScrollView>
				<Card>
					<Card.Cover
						source={{
							uri: "https://images.unsplash.com/photo-1538652116325-8f5fa30fefff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
						}}
					/>
					<Card.Content>
						<List.AccordionGroup>
							<List.Accordion
								title="Habilidades"
								id="1"
								left={(props) => (
									<List.Icon {...props} icon="desktop-classic" />
								)}
							>
								<FlatList
									data={habilidades}
									keyExtractor={(habilidades) => habilidades.key}
									renderItem={({ item }) => (
										<List.Item title={item}></List.Item>
									)}
								/>
							</List.Accordion>
						</List.AccordionGroup>
					</Card.Content>
				</Card>

				<Card>
					<Card.Cover
						source={{
							uri: "https://images.unsplash.com/photo-1581217313197-53a16d027e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
						}}
					/>
					<Card.Content>
						<List.AccordionGroup>
							<List.Accordion
								title="Hobbies"
								id="2"
								left={(props) => <List.Icon {...props} icon="gamepad" />}
							>
								<FlatList
									data={hobbies}
									keyExtractor={(hobbies) => hobbies.key}
									renderItem={({ item }) => (
										<List.Item title={item}></List.Item>
									)}
								/>
							</List.Accordion>
						</List.AccordionGroup>
					</Card.Content>
				</Card>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({});

export default Pessoal;

// String Hobbies
// String Habilidades

// <Image
// 					source={{
// 						width: "100%",
// 						height: 200,
// 						uri: "https://images.unsplash.com/photo-1594800083755-8fe31b2c99df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80",
// 					}}
