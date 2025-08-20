import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Filmes from './src/pages/Filmes'

const Stack = createStackNavigator();

export default function App() {
  const [logado, setLogado] = useState(0);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const logado = await AsyncStorage.getItem('logado');
        setLogado(logado === 'true');
      } catch (e) {
        setLogado(false);
      }
    };
    checkLogin();
  }, []);

  if (logado === 0) return null; // Splash/loading

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {logado ? (
          <>
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} setLogado={setLogado} />}
            </Stack.Screen>
            <Stack.Screen name="Filmes" component={Filmes} />
          </>
        ) : (
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} setLogado={setLogado} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
