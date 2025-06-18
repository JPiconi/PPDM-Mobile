
import React from 'react';
import { Text, View } from 'react-native';

//Import Home
import Home from './src/pages/Home';
//Importe Sobre
import About from './src/pages/About';

//Fornce o componnete que vai envolver nossa navegação
import { NavigationContainer } from '@react-navigation/native';
//importando as funções da Rota Stack
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from "@expo/vector-icons/FontAwesome"
import Feather from "@expo/vector-icons/Feather"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveBackgroundColor: "0e0e0f",
          tabBarActiveTintColor: "390007",
          tabBarStyle: {
            backgroundColor: "9ba0ab",
            height: 50,
            position: 'absolute',
            bottom: 50,
            borderTopEndRadius: 15,
            borderTopColor: 'transparent',
            padding: 10,
            shadowColor: '0e0e0f',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 8,
            width: '80%',
            left: '10%',
            marginHorizontal: '10%'
          }
        }}>
        <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='home' size={size} color={color} />
          },


        }} />
        <Tab.Screen name='About' component={About} options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name='message-circle' size={size} color={color} />
          },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

