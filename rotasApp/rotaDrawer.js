import React from 'react';
import { Text, View } from 'react-native';

//Import Home
import Home from './src/pages/Home';

//Importe Sobre
import About from './src/pages/About';

//Fornce o componnete que vai envolver nossa navegação
import { NavigationContainer } from '@react-navigation/native';
//importando as funções da Rota Stack
import { createDrawerNavigator } from '@react-navigation/drawer';

import FontAwesome from "@expo/vector-icons/FontAwesome"
import Feather from "@expo/vector-icons/Feather"

const Drawer = createDrawerNavigator();

//import styles
import { styles } from './src/styles/styles';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTintColor: "#768064",
          drawerStyle: { backgroundColor: "#2c3424", elevation: 0, shadowOpacity: 0 },
          drawerActiveBackgroundColor: "#959581",
          drawerActiveTintColor: "#daded8",
          drawerInactiveBackgroundColor: "#45583e",
          drawerInactiveTintColor: "#daded8"
        }}>
        <Drawer.Screen name='Home' component={Home} options={{
          drawerIcon: ({ color, size }) => {
            return <FontAwesome name='home' size={size} color={color} />
          },

        }} />
        <Drawer.Screen name='About' component={About} options={{
          drawerIcon: ({ color, size }) => {
            return <Feather name='message-circle' size={size} color={color} />
          },
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

