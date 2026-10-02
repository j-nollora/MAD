import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  const handleContinue = () => {};

  return (
    <View style={styles.screen}>
      <View style={styles.graphicWrapper}>
        <Image
          style={styles.graphic}
          source={require('../assets/Frame.png')}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <View style={styles.texts}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Manage your products, track orders, and grow your sales effortlessly
            with Doshe Seller.
          </Text>
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.continueButton}
            activeOpacity={0.7}
            onPress={handleContinue}>
            <Text style={styles.continueText}>Continue</Text>
            <Image
              style={styles.continueIcon}
              source={require('../assets/Continue.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  graphicWrapper: {
    flex: 6.4,
    width: '100%',
    overflow: 'hidden',
  },
  graphic: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 3.6,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  texts: {
    marginTop: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3d3d3d',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#9b9b9b',
  },
  actionRow: {
    alignItems: 'flex-end',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  continueText: {
    fontSize: 14,
    color: '#4a4a4a',
    marginRight: 4,
  },
  continueIcon: {
    width: 56,
    height: 40,
  },
});
