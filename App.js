import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from 'react-native-screens';

import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'


const Dados = () => <Screen><Text>dados pessoais</Text></Screen>
const Profissinal = () => <Screen><Text>Profissinal</Text></Screen>
const Academico = () => <Screen><Text>Academico</Text></Screen>
const Pessoal = () => <Screen><Text>Pessoal</Text></Screen>


const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
      // tabBarActiveBackgroundColor​: '#e91e63',
      // tabBarActiveTintColor: 'white',
      // tabBarInactiveBackgroundColor​: '#eee',
      // tabBarInactiveTintColor​: 'black',
    }}>
    <Tab.Screen name="Dados" component={Dados} options={{
      tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/>
    }} />
    <Tab.Screen name="Profissinal" component={Profissinal} options={{
      tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="card-account-details" size={size} color={color}/>
    }} />
    <Tab.Screen name="Acadêmico" component={Academico} options={{
      tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="book-open-variant" size={size} color={color}/>
    }} />
    <Tab.Screen name="Pessoal" component={Pessoal} options={{
      tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="gamepad-variant" size={size} color={color}/>
    }} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
