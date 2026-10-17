import { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'


export default function SignUpScreen() {
  const [name, setName] = useState('')
  const [emailOrNum, setEmailOrNum] = useState('')
  const [password, setPassword ] = useState('')
  const [showPassword, setShowPassword ] = useState(false)
  const [agreed, setAgreed] = useState(false);
  
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create an account to get started.</Text>
        <Text style={styles.subtitle}>It only takes a minute.</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btns}>
          <Ionicons name="logo-facebook" size={30} color="#1877F2"/>
          <Text style={styles.btnTxt}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btns}>
          <Ionicons name="logo-google" size={30} color="#5F6368"/>
          <Text style={styles.btnTxt}>Google</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.divider}>
        <View style={styles.line}></View>
        <Text>Or</Text>
        <View style={styles.line}></View>
      </View>

      <TextInput 
        value={name}
        style={styles.nameOrEmailInput}
        onChangeText={setEmailOrNum}
        placeholder="Name"
        placeholderTextColor="gray"
      />

      <TextInput 
        value={emailOrNum}
        style={styles.nameOrEmailInput}
        onChangeText={setEmailOrNum}
        placeholder="Email/Phone Number"
        placeholderTextColor="gray"
      />
      
      <View style={styles.passwordInput}>
        <TextInput 
        value={password}
        style={styles.passwordInputTxt}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="gray"
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="dimgray"
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
            color={agreed ? '#3461fd' : '#555555'}
            style={styles.checkboxIcon}
          />
          <Text style={styles.termsText}>
            I agree to the{' '}
            <Text style={styles.termsLink}>Terms of Service</Text> and 
            <Text style={styles.termsLink}> Privacy Policy</Text>.
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginBtnTxt}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Already have an account?</Text>
        <TouchableOpacity style={styles.footerLink} onPress={() =>  navigation.navigate('Login')}>
          <Text style={styles.footerLinkTxt}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'white'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 70,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3c61d1'
  },
  subtitle: {
    fontSize: 18,
    color: '#a1a8bc',
    textAlign: 'center',
    width: '90%'
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'space-between',
    marginTop: 25,
    gap: 16
  },  
  btns: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f9fe',
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 15,
    borderRadius: 15,
  },
  btnTxt: {
    fontSize: 20,
    color: "dimgray"
  },
  divider: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10
  },
  line: {
    height: 1,
    width: "45%",
    backgroundColor: 'darkgray',
    marginVertical: 8
  },
  nameOrEmailInput: {
    marginTop: 15,
    backgroundColor: '#f5f9fe',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%",
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  passwordInput: {
    marginTop: 15,
    backgroundColor: '#f5f9fe',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "100%",
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  passwordInputTxt :{
    fontSize: 18,
  },
  checkboxContainer: {
    width: '100%',
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
    flexDirection: 'row',
    fontSize: 13.5,
    color: '#555555',
    lineHeight: 19,
  },
  termsLink: {
    color: '#3461fd',
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: '#3461fd',
    width: '100%',
    marginTop: 40,
    paddingVertical: 20,
    borderRadius: 15,
  },
  loginBtnTxt: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 5,
  },
  footerTxt: {
    fontSize: 14,
  },
  footerLinkTxt: {
    fontSize: 14,
    color: '#3461fd'
  }
});
