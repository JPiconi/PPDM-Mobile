import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Tela de Login' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Tela Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
