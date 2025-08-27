import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { removeItem } from '../components/AsyncStorage';


export default function Home() {
  const navigation = useNavigation();

  const LetsGo = () => {
    navigation.navigate("Filmes");
  }
  const handleReset = async () => {
    await removeItem('login')
    navigation.push("Login")
  }

  return (
    <ImageBackground
      source={require("../assets/images/uuu.jpg")}
      resizeMode="cover"
      blurRadius={10}
      style={styles.container}>
      <SafeAreaView style={styles.container2} >
        <Text style={styles.text}>What you want to do?!</Text>
        <Text style={styles.text}>Choose your next step!</Text>
        <View style={styles.contButton}>
          <TouchableOpacity style={styles.ButtonMovie} onPress={LetsGo}>
            <Text style={styles.text2}>Filmes !</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleReset} style={styles.ButtonReset}>
            <Text style={styles.text2}>Reset !</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contButton: {
    gap: 5,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    color: '#fff'
  },
  text2: {
    fontSize: 20,
    alignSelf: 'center'

  },
  ButtonMovie: {
    backgroundColor: '#e5dac9',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  ButtonReset: {
    backgroundColor: '#e5dac9',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  }
});
