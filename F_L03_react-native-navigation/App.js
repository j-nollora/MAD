import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import WelcomeScreen from './components/WelcomeScreen';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Welcome',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Welcome: WelcomeScreen,
    SignUp: SignUpScreen,
    Login: LoginScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
