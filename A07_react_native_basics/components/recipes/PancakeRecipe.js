import { View, Text } from 'react-native';

function PancakeRecipe() {
  const minutes = 15

  return (
    <View>
      <Text>Pancakes</Text>
      <Text>Flour, egg, milk</Text>
      <Text>Time for 3 batches: {minutes * 3} mins</Text>
    </View>
  );
}

export default PancakeRecipe;
