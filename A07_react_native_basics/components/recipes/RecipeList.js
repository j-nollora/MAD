import { View, StyleSheet } from 'react-native';
import PancakeRecipe from './PancakeRecipe.js';
import EggsRecipe from './EggsRecipe.js';
import CakeRecipe from './CakeRecipe.js';
import Divider from '../Divider.js';

function RecipeList() {
  return (
    <View>
      <View style={styles.recipeCard}>
        <PancakeRecipe />
      </View>
      <Divider />
      <View style={styles.recipeCard}>
        <EggsRecipe />
      </View>
      <Divider />
      <View style={styles.recipeCard}>
        <CakeRecipe />
      </View>
    </View> 
  );
}

export default RecipeList;

const styles = StyleSheet.create({
  recipeCard: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    borderColor: '#ddd',
  },
});
