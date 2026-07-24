import { View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <>
      <ScrollView>
        <View>
          <Image
            source={require('../assets/MyPicture.jpg')}
            style={{
              marginTop: 60,
              width: 300,
              height: 300,
              borderRadius: 200,
              borderWidth: 7,
              borderColor: '#3b5998',
              alignSelf: 'center',
            }}
          />
        </View>

        <View>
          <Text
            style={{
              color: '#333333',
              textAlign: 'center',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'system-ui',
            }}>
            Janelyn G. Nollora
          </Text>

          <Text
            style={{
              color: '#637bad',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              fontStyle: 'italic',
              marginBottom: 20,
            }}>
            Associate in Computer Technology 2
          </Text>
        </View>

        <View
          style={{
            maxWidth: 350,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: '#3a5795',
            backgroundColor: '#edf0f5',
            alignSelf: 'center',
            padding: 20,
          }}>
          <Text
            style={{
              color: '#333333',
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 17,
              fontWeight: 'normal',
              fontFamily: 'system-ui',
            }}>
            {'\n'}Fun fact: I love watching shows with multiple seasons like The
            Walking Dead{'\n'}
          </Text>

          <Text
            style={{
              color: '#333333',
              alignSelf: 'center',
              textAlign: 'justify',
              fontSize: 17,
              fontWeight: 'normal',
              fontFamily: 'system-ui',
            }}>
            What I've learned so far in Mobile Applications Development: First,
            I've learned about mobile devices, its history, statistics,
            platforms, etc. Second, I've learned how to establish a connection
            between my local computer and my GitHub account using Secure Shell
            or SSH. Third, I've learned how to use git commands to interact with
            my GitHub account's repositories. Lastly, I've learned the basics of
            React Native through Sir Elmer's guidance and our recent lessons
            regarding React with Sir Jehu in Web Applications Development 2.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}