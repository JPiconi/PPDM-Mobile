import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginTop: 5,
    textAlign: 'center',
  },
  title1: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#a3b1c6',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#0d47a1',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
