import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

function AlreadyHaveAccount({ color }) {
  const navigation = useNavigation()

    return (
        <View style={styles.footer}>
            <Text style={{ color: color }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}> Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AlreadyHaveAccount

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'
    },
    loginText: {
        color: '#ffa500',
        fontWeight: 'bold'
    },
})