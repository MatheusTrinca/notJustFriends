import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { useEffect, useState } from 'react';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setAuthUser);
  }, []);

  console.log(authUser);

  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withAuthenticator(App);

// 1:46:20
