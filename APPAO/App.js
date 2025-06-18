import React from 'react';

// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';

import Home from './src/pages/Home';
import Calzone from './src/pages/Calzone';
import Croissant from './src/pages/Croissant';
import Focaccia from './src/pages/Focaccia';
import Panqueca from './src/pages/Panqueca';
import PaoCaseiro from './src/pages/PaoCaseiro';
import PaoFrances from './src/pages/PaoFrances';
import Waffles from './src/pages/Waffles';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTintColor: "#000",
          drawerStyle: {
            backgroundColor: "#8B5E3C",
            elevation: 0,
            shadowOpacity: 0,
          },
          drawerActiveBackgroundColor: "#D4A373",
          drawerActiveTintColor: "#5C3A21",
          drawerInactiveBackgroundColor: "#C2A78D",
          drawerInactiveTintColor: "#7a5447",
        }}
      >

        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Calzone' component={Calzone} />
        <Drawer.Screen name='Croissant' component={Croissant} />
        <Drawer.Screen name='Focaccia' component={Focaccia} />
        <Drawer.Screen name='Panqueca' component={Panqueca} />
        <Drawer.Screen name='Pão Caseiro' component={PaoCaseiro} />
        <Drawer.Screen name='Pão Frânces' component={PaoFrances} />
        <Drawer.Screen name='Waffles' component={Waffles} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

