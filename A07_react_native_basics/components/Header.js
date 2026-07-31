import { View, Text } from 'react-native';
import Title from './Title';

export default function Header() {
  const isWeekend = true;

  return (
    <View>
      <Title />
      <Text>{isWeekend ? 'Happy cooking this weekend!':'Happy cooking today!'}</Text>
    </View>
  );
}
