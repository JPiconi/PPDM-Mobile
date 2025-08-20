import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { setItem } from '../components/AsyncStorage';

const { width, height } = Dimensions.get('window')

export default function OnboardingScreen() {
  const navigation = useNavigation()

  const handleDone = () => {
    navigation.navigate("Home")
    setItem('onboarded', '1')
  }
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={styles.text}>Done</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[{
          backgroundColor: '#2a2e2f',
          image: (
            <View style={styles.lottie}>
              <LottieView source={require("../assets/images/Salad Cat.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          ),
          title: "Welcome!",
          subtitle: "Discover things you like and be ready."
        },
        {
          backgroundColor: '#484848',
          image: (
            <View style={styles.lottie}>
              <LottieView source={require("../assets/images/Cat Movement.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          ),
          title: "Hello!",
          subtitle: "Are you ready for what's about to happen?."
        },
        {
          backgroundColor: '#484848',
          image: (
            <View style={styles.lottie}>
              <LottieView source={require("../assets/images/Cute Bird Flapping Animation.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          ),
          title: "Haha!",
          subtitle: "You have been prankde!!!."
        }
        ]}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lottie: {
    width: width * 0.9,
    height: width
  },
  doneButton: {
    padding: 20,
    backgroundColor: "#484848",
    borderTopLeftRadius: "100%",
    borderBottomLeftRadius: "100%",
  },
  text: {
    color: '#fff'
  }

});
