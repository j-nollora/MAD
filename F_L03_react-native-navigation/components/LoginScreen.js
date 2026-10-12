import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native'

export default function LoginScreen() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            {/* Header Section */}
            <View style={styles.header}>
                <Image source={require('../assets/login.webp')} style={styles.illustration} />
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Email Address</Text>
                <View style={styles.inputWrapper}>
                    <Ionicons name="mail-outline" size={32} color="#696969" />
                    <TextInput style={styles.input} placeholder="john@gmail.com" />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={32} color="#696969" />
                    <TextInput style={styles.input} placeholder="*****" secureTextEntry />
                </View>

                <TouchableOpacity>
                    <Text style={[styles.label, styles.forgotText]}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>Or</Text>

                <View style={styles.socialMedia}>
                    <TouchableOpacity style={styles.socialIcon}>
                        <Ionicons name="logo-google" size={32} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialIcon}>
                        <Ionicons name="logo-apple" size={32} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialIcon}>
                        <Ionicons name="logo-facebook" size={32} color="blue" />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() =>  navigation.navigate('SignUp')}>
                        <Text style={styles.signupText}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        paddingHorizontal: 15,
        borderRadius: 15,
        gap: 10
    },
    signupText: {
        color: '#ffa500',
        fontWeight: 'bold'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'
    },
    socialIcon: {
        padding: 15,
        backgroundColor: '#d3d3d3',
        borderRadius: 15,
    },
    socialMedia: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center'
    },
    orText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 20
    },
    loginButtonText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    loginButton: {
        backgroundColor: '#ffa500',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 30
    },
    forgotText: {
        textAlign: 'right'
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 15
    },
    label: {
        fontSize: 14,
        color: '#696969',
        marginTop: 15,
        marginBottom: 5
    },
    illustration: {
        width: '100%',
        height: '100%'
    },
    formContainer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 30
    },
    header: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#9932cc'
    }
})