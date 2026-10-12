import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import AlreadyHaveAccount from './AlreadyHaveAccount'

export default function LoginScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            {/* Header Section */}
            <View style={styles.header}>
                <Image source={require('../assets/signup.webp')} style={styles.illustration} />
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput style={styles.input} placeholder="John Doe" />

                <Text style={styles.label}>Email Address</Text>
                <TextInput style={styles.input} placeholder="john@gmail.com" />

                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="*****" secureTextEntry />

                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
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

                <AlreadyHaveAccount />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    signupButtonText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    signupButton: {
        backgroundColor: '#ffa500',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 30
    },
    input: {
        backgroundColor: '#d3d3d3',
        padding: 15,
        borderRadius: 15,
        fontSize: 16
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