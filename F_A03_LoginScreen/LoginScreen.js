import { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Header() {
  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.logo}
        source={{
          uri: 'https://doshe.store/media/site_logo/2024-11-08-672e1828f0e43_clU2f5S.png',
        }}
      />

      <Text style={headerStyles.greetings}>Welcome back</Text>
      <Text style={headerStyles.subtitle}>
        Sign in to manage your store and products
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: 60,
    height: 17,
    marginBottom: 60,
  },
  greetings: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#19191b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    color: '#9b9b9b',
  },
});

function MainContent() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password1');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <View style={contentStyles.container}>
        <View style={contentStyles.tabContainer}>
          <TouchableOpacity style={contentStyles.siTab}>
            <Text style={contentStyles.siTabText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={contentStyles.caTab}>
            <Text style={contentStyles.caTabText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View style={contentStyles.texts}>
          <Text style={contentStyles.title}>Sign in to continue</Text>
          <Text style={contentStyles.subtitle}>
            Access your dashboard, products, and store tools.
          </Text>
        </View>

        <View style={contentStyles.form}>
          <View style={contentStyles.inputField}>
            <Ionicons
              style={contentStyles.icon}
              name="person-outline"
              size={20}
              color={'black'}
            />
            <TextInput
              style={contentStyles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="black"
              autoCapitalize="none"
            />
          </View>

          <View style={contentStyles.inputField}>
            <Ionicons
              style={contentStyles.icon}
              name="lock-closed-outline"
              size={20}
              color={'black'}
            />
            <TextInput
              style={contentStyles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                style={contentStyles.icon}
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color={'black'}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={contentStyles.button}>
            <Text style={contentStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const contentStyles = StyleSheet.create({
  container: {
    width: '95%',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f5f6fb',
    borderRadius: 18,
    padding: 4,
    marginBottom: 25,
    alignSelf: 'center',
  },
  siTab: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 2,
    borderRadius: 18,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 1,
  },
  siTabText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2f2f2f',
  },
  caTab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    margin: 2,
  },
  caTabText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#8f9095',
  },
  texts: {
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#2c2c2c',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 17,
    color: '#9b9b9b',
  },
  form: {
    gap: 15,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fb',
    borderRadius: 18,
    paddingHorizontal: 14,
    height: 65,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 5,
    fontSize: 19,
    color: 'black',
  },
  button: {
    backgroundColor: '#01a43b',
    borderRadius: 18,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

function Footer() {
  return (
    <>
      <View style={footerStyles.container}>
        <TouchableOpacity>
          <Text style={footerStyles.buttonText}>
            No account yet? Create one
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#02a33b',
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.content}>
          <MainContent />
        </View>

        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    flex: 3.5,
    justifyContent: 'center',
  },
  content: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
