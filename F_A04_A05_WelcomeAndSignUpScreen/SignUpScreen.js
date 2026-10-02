import { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.column}>
        <View style={styles.header}>
          <Text style={styles.greetings}>Create seller account</Text>
          <Text style={styles.headerSubtitle}>
            {'Register and start managing your store and\nproducts'}
          </Text>
        </View>

        <View style={styles.body}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabInactive}>
              <Text style={styles.tabInactiveText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabActive}>
              <Text style={styles.tabActiveText}>Create Account</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.texts}>
            <Text style={styles.title}>Create your seller profile</Text>
            <Text style={styles.contentSubtitle}>
              {'Register now and start managing your store\nprofessionally.'}
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

            <View style={styles.inputField}>
              <Ionicons
                style={styles.icon}
                name="lock-closed-outline"
                size={20}
                color="#555555"
              />
              <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm password"
                placeholderTextColor="#a0a0a0"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Ionicons
                  style={styles.icon}
                  name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={20}
                  color="#555555"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkboxRow}
                activeOpacity={0.8}
                onPress={() => setAgreed(!agreed)}>
                <Ionicons
                  name={agreed ? 'checkbox' : 'square-outline'}
                  size={22}
                  color={agreed ? '#00a651' : '#555555'}
                  style={styles.checkboxIcon}
                />
                <Text style={styles.termsText}>
                  I agree to the{' '}
                  <Text style={styles.termsLink}>Terms of Service</Text> and{'\n'}
                  <Text style={styles.termsLink}>Privacy Policy</Text>.
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>
              Already have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  column: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 70,
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
  body: {
    flex: 7,
    justifyContent: 'center',
    width: '100%',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#f2f3f7',
    borderRadius: 20,
    padding: 4,
    marginBottom: 20,
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
  checkboxContainer: {
    width: '100%',
    backgroundColor: '#f8f9fb',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 4,
    height: 56,
    justifyContent: 'center',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkboxIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  termsText: {
    flex: 1,
    fontSize: 13.5,
    color: '#555555',
    lineHeight: 19,
  },
  termsLink: {
    color: '#2a82e4',
    fontWeight: 'bold',
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
  footer: {
    flex: 1.2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14.5,
    color: '#00a651',
    fontWeight: 'bold',
  },
});