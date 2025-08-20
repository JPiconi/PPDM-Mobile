import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, TouchableOpacity, View, Pressable } from 'react-native';
import { styles } from '../styles/Styles';

import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.container}
      source={require("../images/background.jpg")} blurRadius={5}
      resizeMode="cover"
    >
      <AntDesign name="staro" size={60} color="#616e69" style={styles.icon} />

      <Text style={styles.Text}>Welcome!.</Text>
      <Text style={styles.Text}>Life is so much better with us.</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.text}>Login with Email !</Text>
      </TouchableOpacity>

      <View style={styles.ViewSignUp}>
        <Text style={styles.baixo}>Don't Have an account? </Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}><Text style={styles.baixo3}>Sign Up!</Text></Pressable>
      </View>


    </ImageBackground>
  );
}
