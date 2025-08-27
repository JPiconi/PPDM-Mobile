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
    navigation.navigate("Login")
    setItem('onboarded', '1')
  }
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={styles.text}>Login</Text>
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
          backgroundColor: '#000',
          image: (
            <View style={styles.lottie}>
              <LottieView source={require("../assets/images/Popcorn.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          ),
          title: "Welcome!",
        },
        {
          backgroundColor: '#000',
          image: (
            <View style={styles.lottie}>
              <LottieView source={require("../assets/images/Video  Movie.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          ),
          title: "Discover Movies of your interest!."
        },
        {
          backgroundColor: '#000',
          image: (
            <View style={styles.lottie}>
              <LottieView source={require("../assets/images/Ticket.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          ),
          title: "Take your best company."
        },
        {
          backgroundColor: '#000',
          image: (
            <View style={styles.lottie}>
              <LottieView source={require("../assets/images/Movie3.json")}
                autoPlay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          ),
          title: "And Enjoy!!"
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
    backgroundColor: '#000',
  },
  lottie: {
    width: width * 0.9,
    height: width
  },
  doneButton: {
    padding: 20,
    backgroundColor: "#484848",
    borderRadius: "100%"
  },
  text: {
    color: '#fff'
  }
});
