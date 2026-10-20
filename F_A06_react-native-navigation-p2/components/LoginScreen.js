import { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation()

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://doshe.store/media/site_logo/2024-11-08-672e1828f0e43_clU2f5S.png',
          }}
        />
        <Text style={styles.greetings}>Welcome back</Text>
        <Text style={styles.headerSubtitle}>
          Sign in to manage your store and products
        </Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity  style={styles.tabActive} >
          <Text style={styles.tabActiveText} >Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabInactive} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.tabInactiveText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.texts}>
        <Text style={styles.title}>Sign in to continue</Text>
        <Text style={styles.contentSubtitle}>
          Access your dashboard, products, and store tools.
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputField}>
          <Ionicons
            style={styles.icon}
            name="person-outline"
            size={20}
            color="#555555"
          />
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#a0a0a0"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputField}>
          <Ionicons
            style={styles.icon}
            name="lock-closed-outline"
            size={20}
            color="#555555"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#a0a0a0"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              style={styles.icon}
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="#555555"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}>
            No account yet? Create One
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 70,
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 17,
    marginBottom: 30
  },
  greetings: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f2f3f7',
    borderRadius: 20,
    padding: 4,
    marginBottom: 20,
    margin: 5,
  },
  tabInactive: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabInactiveText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#777777',
  },
  tabActive: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  tabActiveText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  texts: {
    marginBottom: 16,
    alignContent: 'flex-start',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  contentSubtitle: {
    fontSize: 13.5,
    color: '#888888',
    lineHeight: 18,
  },
  form: {
    gap: 12,
    margin: 5
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fb',
    borderRadius: 18,
    paddingHorizontal: 16,
    height: 56,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
  },
  button: {
    backgroundColor: '#00a651',
    borderRadius: 18,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14.5,
    color: '#00a651',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});