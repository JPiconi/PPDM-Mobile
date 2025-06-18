import React from 'react';
import { Text, View } from 'react-native';

//Import Home
import Home from './src/pages/Home';

//Importe Sobre
import About from './src/pages/About';

//Fornce o componnete que vai envolver nossa navegação
import { NavigationContainer } from '@react-navigation/native';
//importando as funções da Rota Stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//import styles
import { styles } from './src/styles/styles';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        {/* //options={{ headerShown: false }} */}
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



