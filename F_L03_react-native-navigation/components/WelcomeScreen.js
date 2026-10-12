import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AlreadyHaveAccount from './AlreadyHaveAccount';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#da70d6', '#ba55d3', '#9932cc']}
      style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Let's Get Started</Text>
      </View>

      {/* Image Content */}
      <View style={styles.imageContent}>
        <Image source={require('../assets/welcome.png')} style={styles.image} />
      </View>

      {/* Footer*/}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={styles.signupButtonText}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <AlreadyHaveAccount color="#fff" />
      </View>
    </LinearGradient>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  signupButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  signupButton: {
    backgroundColor: '#ffa500',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    color: '#fff',
  },
  footer: {
    flex: 1.5,
    padding: 30,
  },
  imageContent: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#9932cc',
  },
});
