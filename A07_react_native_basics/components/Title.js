import { Text, View, StyleSheet } from 'react-native';
import { BOOK_TITLE, AUTHOR } from '../constants.js';

function shout(text) {
  return text;
}

function Title() {
  return (
    <View>
      <Text style={styles.heading}>{`${BOOK_TITLE} by ${AUTHOR}`}</Text>
      <Text>Simple recipes, cooked simply.</Text>
      <Text>{shout('welcome to the kitchen')}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    color: '#b5651d',
    fontWeight: 'bold'
  }
})
