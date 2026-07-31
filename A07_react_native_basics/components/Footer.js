import { Text } from 'react-native';

function Footer() {
  const year = 2026;
  return (
    <>
      <Text>© {new Date().getFullYear()} My Recipe Book</Text>
      <Text>Made with love in the kitchen.</Text>
    </>
  );
}

export default Footer;
