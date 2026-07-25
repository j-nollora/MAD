import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function BasicComponentsDemo() {
  const [message, setMessage] = useState('Welcome!');

  function displayMessage() {
    setMessage('Hello! Welcome to my React Native Application');
  }

  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/242917709?v=4',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Janelyn G. Nollora</Text>
        <Text style={styles.course}>Associate in Computer Technology 2</Text>
        <Text style={styles.description}>Aspiring Tech Entrepreneur</Text>
        <Text style={styles.message}>{message}</Text>
        <Pressable style={styles.button} onPress={() => displayMessage()}>
          <Text style={styles.buttonText}>Say Hello</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f2f4f7',
  },

  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },

  name: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  course: {
    marginBottom: 16,
    fontSize: 17,
    textAlign: 'center',
  },

  description: {
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },

  message: {
    marginBottom: 20,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },

  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#1d4ed8',
    borderRadius: 8,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});